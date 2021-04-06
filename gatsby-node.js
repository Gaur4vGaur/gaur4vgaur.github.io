const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    const _ = require("lodash")

    const blogPost = path.resolve(`./src/templates/post.js`)
    const blogHome = path.resolve(`./src/templates/index.js`)
    const tagTemplate = path.resolve(`./src/templates/tags.js`)

    return graphql(
        `
      {
        pageQuery: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                subtitle
                description
                tags
              }
              fields {
                slug
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___tags) {
              fieldValue
            }
        }
      }
    `
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        const posts = result.data.pageQuery.edges

        posts.forEach((post, index) => {
            const previous = index === 0 ? null : posts[index - 1].node
            const next = index === posts.length - 1 ? null : posts[index + 1].node

            createPage({
                path: post.node.fields.slug,
                component: blogPost,
                context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                },
            })
        })

        const postsPerPage = 5
        const totalPages = Math.ceil(posts.length / postsPerPage)
        Array.from({length: totalPages}).forEach((_, index) => {
            const currentPage = index + 1
            const isFirstPage = index === 0
            const isLastPage = currentPage === totalPages

            createPage({
                path: isFirstPage ? '/' : `/${currentPage}`,
                component: blogHome,
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    isFirstPage,
                    isLastPage,
                    currentPage,
                    totalPages,
                },
            })
        })

        // Extract tag data from query
        const tags = result.data.tagsGroup.group
        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
            component: tagTemplate,
            context: {
              tag: tag.fieldValue,
            },
          })
        })

        return null
    })
}

exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({node, getNode})

        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
