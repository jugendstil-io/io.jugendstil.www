module.exports = {
  siteMetadata: {
    title: `Jugendstil_IO`,
    description: `Jugendstil_IO helps businesses master the digital reinvention of the industry when they use advanced digital technologies to transform core operations and unlock new revenue streams and business models. We support every aspect of our clients' multi-phase transformation, including workforce, customer experience, Research and development, engineering, manufacturing, business support, and ecosystems.`,
    author: `@jugendstil_io`,
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jugendstil_IO`,
        short_name: `J_`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `asset/jugendstil_io_icon_colored.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
