/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `美味しい食材と食事を探求するサイト`,
    lang:`ja`,
  },
/* Your site config here */ plugins: [
`gatsby-plugin-image`, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
{
resolve: `gatsby-source-filesystem`, options: {
name: `images`,
path: `${__dirname}/src/images/`, },
  },
    `gatsby-plugin-react-helmet`
  ],
}