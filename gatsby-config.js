module.exports = {
  siteMetadata: {
    title: `Imperex`,
    description: `Impermeabilização civil `,
    author: `Matheus Cortez`,
    siteUrl: `https://imperex-gatsby.netlify.app/`,
  
  },
  plugins: [
    
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Imperex`,
        short_name: `Imperex`,
        start_url: `/`,
        background_color: `#232367`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_transparente_superior.png`,
      },

    },
  
  
    `gatsby-plugin-offline`,
  ],
}
