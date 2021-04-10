import React from 'react';
import {Link, graphql} from 'gatsby';
import Img from 'gatsby-image';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogIndex extends React.Component {
    render() {
        const {data} = this.props;
        const blogTitle = data.site.siteMetadata.title;
        const subtitle = data.site.siteMetadata.subtitle;
        const authorName = data.site.siteMetadata.author;
        const bio = data.site.siteMetadata.bio;
        const profilePic = data.profilePic.childImageSharp.fluid;

        const posts = data.allMarkdownRemark.edges;

        const { isFirstPage, isLastPage, currentPage, totalPages } = this.props.pageContext;
        const nextPage = `/${String(currentPage + 1)}`
        const prevPage = currentPage - 1 === 1 ? '/' : `/${String(currentPage - 1)}`


        return (
            <Layout title={blogTitle} subtitle={subtitle}>
                <SEO title="Code Thoughts"/>
                <div className="blog-container">
                    <aside>
                        <Img fluid={profilePic} alt={`Author ${authorName}`}/>
                        <h3>{authorName}</h3>
                        <p>{bio}</p>
                        <a href="mailto:gaurav@gaurgaurav.com"> Contact me</a>
                    </aside>
                    <section>
                        {
                            posts.map((post, index) => {
                            return (
                                <div className="post-summary" key={index}>
                                    <p>{post.node.frontmatter.date } <span> {post.node.fields.readingTime.text} </span></p>
                                    <Link to={post.node.fields.slug}>
                                        <h2 className="post-navigation">{post.node.frontmatter.title}</h2>
                                    </Link>
                                    <div className="content">{post.node.frontmatter.description}</div>
                                </div>
                            );
                            })
                        }
                    </section>
                </div>
                {/* Pagination Links */}
                <div className="post-pagination">
                    {!isFirstPage && (
                        <Link to={prevPage} rel="prev">
                            &lt;
                        </Link>
                    )}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Link key={index} to={`/${index === 0 ? '' : index + 1}`}>
                            {index + 1}
                        </Link>
                    ))}
                    {!isLastPage && (
                        <Link to={nextPage} rel="next">
                            &gt;
                        </Link>
                    )}
                </div>
            </Layout>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
	query ($skip: Int!, $limit: Int!){
		site {
			siteMetadata {
				title
				subtitle
				author
				bio
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
		skip: $skip
        limit: $limit
		) {
			edges {
				node {
					excerpt
					fields {
						slug
						readingTime {
                          text
                        }
					}
					html
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						subtitle
						description
					}
				}
			}
		}
		profilePic: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
			childImageSharp {
				fluid(maxWidth: 200, maxHeight: 200) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
