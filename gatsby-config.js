module.exports = {
  siteMetadata: {
    title: `Dashboard Acuerdo Ambiental`,
    description: `Tablero con información en tiempo real sobre el cambio climático.`,
    author: `@kaenovsky`,
    siteUrl: `https://www.acuerdoambiental.com.ar/ecodash`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Acuerdo Ambiental`,
        short_name: `ecodash`,
        start_url: `/`,
        background_color: `#348AA7`,
        theme_color: `#5DD39E`,
        display: `minimal-ui`,
        icon: `src/images/dash-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
