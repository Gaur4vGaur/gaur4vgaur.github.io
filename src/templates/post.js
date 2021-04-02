import React from 'react';
import {graphql, Link} from 'gatsby';
import sanitizeHtml from 'sanitize-html';
import kebabCase from "lodash/kebabCase";


// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

class PostTemplate extends React.Component {

    render() {
        function sanitize(html) {
            return sanitizeHtml(html, {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe', 'style']),
                allowedAttributes: false,
                allowVulnerableTags: true
            })
        }

        const frontmatter = this.props.data.markdownRemark.frontmatter;
        const {title, subtitle, description, date, tags} = frontmatter;
        const post = this.props.data.markdownRemark;
        const {previous, next, slug} = this.props.pageContext;

        return (
            <Layout title={title} subtitle={subtitle}>
                <SEO title={title} description={description || post.excerpt} slug={slug}/>
                <section className="posts">
                    <p className="date">{date}</p>
                    <div dangerouslySetInnerHTML={{__html: sanitize(post.html)}}/>
                    <ul className="post-navigation">
                        {
                            tags.map((tag, index) => {
                                return (
                                    <li key={index} className="post-tag">{
                                        <Link to={`/tags/${kebabCase(tag)}/`}>
                                            {tag}
                                        </Link>
                                    }</li>
                                )
                            })
                        }
                    </ul>
                    <ul className="post-navigation">
                        <li className="post-navigation-left">
                            {previous && (
                                <Link to={previous.fields.slug} rel="prev">
                                    ← {previous.frontmatter.title}
                                </Link>
                            )}
                        </li>
                        <li className="post-navigation">
                            {next && (
                                <Link to={next.fields.slug} rel="next">
                                    {next.frontmatter.title} →
                                </Link>
                            )}
                        </li>
                    </ul>
                </section>
            </Layout>
        );
    }
}

export default PostTemplate;

export const pageQuery = graphql`
	query Posts($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				subtitle
				description
				tags
			}
		}
	}
`;
