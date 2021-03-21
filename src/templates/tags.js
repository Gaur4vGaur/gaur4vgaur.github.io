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
            <Layout title="Code Thoughts">
                <SEO title="Code Thoughts"/>
                <div className="blog-container">
                    <aside>
                        <h3 className="tag-heading">#{tag}</h3>
                        <p className="tag-summary">{tagSubHeading}</p>
                    </aside>
                    <section>

                        <ul className="tag-ul">
                            {
                                edges.map(({node}) => {
                                        const {slug} = node.fields
                                        const {title} = node.frontmatter
                                        return (
                                            <li key={slug}>
                                                <Link to={slug}>{title}</Link>
                                            </li>
                                        )
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
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`