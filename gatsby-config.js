require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter WooCommerce`,
    description: `A basic starter to build a Gatsby-powered WooCommerce app`,
    author: `@zeekinteractive`,
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
    FAST_REFRESH: true,
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        url: process.env.GATSBY_API_URL,
        typeName: `WORDPRESS`,
        fieldName: `wp`,
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
      },
    },
  ],
}
