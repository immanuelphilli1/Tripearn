/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-DHJ9KWJHTQ"],
      },
    },
    'gatsby-plugin-postcss', 'gatsby-plugin-react-helmet',
  ],
}
