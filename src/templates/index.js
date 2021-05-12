import React from 'react';
import {Link, graphql} from 'gatsby';
import Img from 'gatsby-image';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import ComponentTags from "../components/tags";

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
                    <aside className="aside-left">
                        <Img fluid={profilePic} alt={`Author ${authorName}`}/>
                        <h3>{authorName}</h3>
                        <p>{bio}</p>
                        <a href="mailto:gaurav@gaurgaurav.com"> Contact me</a>
                        <div className="contacts-div">
                            <ul className="contacts-list">
                                <li className="contacts-list-item">
                                    <a className="contacts-list-item-links"
                                    href="https://www.youtube.com/user/gauravgaur91/" rel="noreferrer" target="_blank">
                                    <svg className="contacts-icons" viewBox="0 0 24 24">
                                        <title>YouTube</title>
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                </a></li>
                                <li className="contacts-list-item">
                                    <a className="contacts-list-item-links"
                                    href="https://twitter.com/Gaur4vGaur" rel="noreferrer" target="_blank">
                                    <svg className="contacts-icons" viewBox="0 0 26 28">
                                        <title>twitter</title>
                                        <path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z"></path>
                                    </svg>
                                </a></li>
                            </ul>
                        </div>
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
                    <aside  className="aside-right">
                        <ComponentTags></ComponentTags>
                    </aside>
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
