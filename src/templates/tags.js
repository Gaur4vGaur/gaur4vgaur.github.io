import React from "react"

// Components
import {Link, graphql} from "gatsby"

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';


class Tags extends React.Component {

    render() {

        const {tag} = this.props.pageContext;
        const {edges, totalCount} = this.props.data.allMarkdownRemark
        const tagSubHeading = `${totalCount} post${
            totalCount === 1 ? "" : "s"
        }`

        return (
            <Layout title="Posts By #" subtitle="">
                <SEO title="Code Thoughts"/>
                <div className="blog-container">
                    <aside>
                        <h3 className="tag-heading">#{tag}</h3>
                        <p className="tag-summary">{tagSubHeading}</p>
                    </aside>
                    <section>

                        <ul className="tag-ul">
                            {
                                edges.map(({node, index}) => {
                                        const {slug, readingTime} = node.fields
                                        const {title, date, description} = node.frontmatter
                                        return (
                                            <div className="post-summary" key={index}>
                                                <p>{date} <span> {readingTime.text} </span></p>
                                                <Link to={slug}>
                                                    <h2 className="post-navigation">{title}</h2>
                                                </Link>
                                                <div className="content">{description}</div>
                                            </div>
                                        );
                                    }
                                )
                            }
                        </ul>
                        {/*<Link to="/tags">All tags</Link>*/}
                    </section>
                </div>
            </Layout>
        )
    }

}


export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`