module.exports = {
  siteMetadata: {
    title: `Blog Starter`,
    author: `Gaurav Gaur`,
    bio: `Gaurav Gaur Bio`,
    description: `A blog that shows you the awesome power of gatsby.`,
    social: {
      twitter: `gaur4vgaur`,
    },
    siteUrl: `http://localhost:9000`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `blogPosts`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-social-cards`,
            options: {
              title: {
                field: 'title',
                font: 'DejaVuSansCondensed',
                color: 'black', // black|white
                size: 48, // 16|24|32|48|64
                style: 'bold', // normal|bold|italic
                x: null, // Will default to xMargin
                y: null // Will default to yMargin
              },
              meta: {
                parts: [ '- ', { field: 'author' }, ' » ', { field: 'date', format: 'mmmm dS' } ],
                font: 'DejaVuSansCondensed',
                color: 'black', // black|white
                size: 24, // 16|24|32|48|64
                style: 'normal', // normal|bold|italic
                x: null, // Will default to xMargin
                y: null // Will default to cardHeight - yMargin - size
              },
              background: '#FFFFFF', // Background color for the card
              xMargin: 24, // Edge margin used when x value is not set
              yMargin: 24 // Edge margin used when y value is not set
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog Starter`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `content/assets/cheese-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-162427596-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM`, // TODO change this
        includeInDevelopment: true
      }
    }
  ]
}
