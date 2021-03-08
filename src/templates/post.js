import React from 'react';
import { graphql, Link } from 'gatsby';
import sanitizeHtml from 'sanitize-html';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

class PostTemplate extends React.Component {
	render() {
		const frontmatter = this.props.data.markdownRemark.frontmatter;
		const { title, subtitle, description, date } = frontmatter;
		const post = this.props.data.markdownRemark;
		const { previous, next, slug } = this.props.pageContext;

		return (
			<Layout title={title} subtitle={subtitle}>
				<SEO title={title} description={description || post.excerpt} slug={slug} />
				<section className="posts">
					<p className="date">{date}</p>
					<div dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.html, {
						allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ]),
							allowedAttributes: { 'a': [ 'href' ]},
							allowedIframeHostnames: ['www.youtube.com']
					}) }} />
					<p className="post-navigation">
						{previous && (
							<Link to={previous.fields.slug} rel="prev">
								← {previous.frontmatter.title}
							</Link>
						)}
					</p>
					<p className="post-navigation">
						{next && (
							<Link to={next.fields.slug} rel="next">
								{next.frontmatter.title} →
							</Link>
						)}
					</p>
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
			}
		}
	}
`;
