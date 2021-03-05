import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import post from "../templates/post";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const blogTitle = data.site.siteMetadata.title;
    const authorName = data.site.siteMetadata.author;
    const bio = data.site.siteMetadata.bio;
    const profilePic = data.profilePic.childImageSharp.fluid;

    const posts = data.allMarkdownRemark.edges;
    const node = posts.node
    // const frontmatter = posts.node.frontmatter;
    // const { title, subtitle, description, date } = frontmatter;

    console.log(posts)
    console.log(node)
    // console.log(title)

    return (
        <Layout title={blogTitle} subtitle="Built with React and Gatsby">
          <SEO title="All posts" />
          <div className="blog-container">
            <section>
              <div className="post-summary">
                <p>May 4th, 2019</p>
                <h2>Cheddar cheese and biscuits</h2>
                <p>
                  Cheese and wine rubber cheese airedale cottage cheese the big cheese stinking bishop
                  cheesecake st. agur blue cheese. Cow rubber cheese cheese triangles say cheese cheese on
                  toast cheddar red leicester swiss.{' '}
                </p>
                <Link to="/cheddar-cheese">
                  <button>Read more</button>
                </Link>
              </div>
              <div className="post-summary">
                <p>May 13th, 2019</p>
                <h2>Cheese on toast babybel babybel</h2>
                <p>
                  Pecorino fondue manchego who moved my cheese babybel hard cheese fromage roquefort.
                  Roquefort port-salut cheeseburger cheese on toast jarlsberg red leicester chalk and
                  cheese fromage.
                </p>
                <Link to="/toast-babybel">
                  <button>Read more</button>
                </Link>
              </div>
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
				title
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
