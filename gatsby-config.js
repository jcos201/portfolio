/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteTitle: 'Jorge Cossi | Software Engineer',
    author: 'Jorge L. Cossi',
    
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve:`gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts:[
          `texturina: 300, 400, 500, 600, 700`
        ], display: 'swap'
      }
    },
    `gatsby-plugin-fontawesome-css`,
  ],
}
