/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `My Resume Portfolio`,
    description: `About Witni Whittle`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e7gsyqd8m8w4`,
        accessToken: `vmZdDhxz48q-ijxw8b_XIxHkC-lKziHklz_5OgQIvgY`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Rancho`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ],
}
