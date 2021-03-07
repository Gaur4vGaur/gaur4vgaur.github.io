import React from 'react';
import {Link, graphql} from 'gatsby';
import Img from 'gatsby-image';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import post from "../templates/post";

class BlogIndex extends React.Component {
    render() {
        const {data} = this.props;
        const blogTitle1 = data.site.siteMetadata.title1;
        const blogTitle2 = data.site.siteMetadata.title2;
        const subtitle = data.site.siteMetadata.subtitle;
        const authorName = data.site.siteMetadata.author;
        const bio = data.site.siteMetadata.bio;
        const profilePic = data.profilePic.childImageSharp.fluid;

        const posts = data.allMarkdownRemark.edges;


        return (
            <Layout title1={blogTitle1} title2={blogTitle2} subtitle={subtitle}>
                <SEO title="Gaurav Gaur All Blog Posts"/>
                <div className="blog-container">
                    <section>
                        {
                            posts.map((post, index) => {
                            return (
                                <div className="post-summary" key={index}>
                                    <p>{post.node.frontmatter.date}</p>
                                    <h2>{post.node.frontmatter.title}</h2>
                                    <div className="content">{post.node.frontmatter.description}</div>
                                    <Link to={post.node.fields.slug}>
                                        <button data-gtm="read-more" id={`data::${post.node.fields.slug}`}>
                                            Read more
                                        </button>
                                    </Link>
                                </div>
                            );
                            })
                        }
                    </section>
                    <aside>
                        <Img fluid={profilePic} alt={`Author ${authorName}`}/>
                        <h3>{authorName}</h3>
                        <p>{bio}</p>
                    </aside>
                </div>
            </Layout>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title1
				title2
				subtitle
				author
				bio
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
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
				fluid(maxWidth: 400, maxHeight: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
