module.exports = {
  siteMetadata: {
    title: `Blog Starter`,
    author: `Gaurav Gaur`,
    description: `A blog that shows you the awesome power of gatsby.`,
    social: {
      twitter: `coding_love`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
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
    'gatsby-plugin-react-helmet'
  ],
}
