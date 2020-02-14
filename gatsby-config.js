require("dotenv").config
const fetch = require("isomorphic-fetch")
const createHttpLink = require("apollo-link-http")

console.log(process.env.GRAPHQL_LOCAL, "env p")
module.exports = {
  siteMetadata: {
    title: `Patfin School`,
    description: `Official brand website for patfin School`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Cases",
        // Field under which the remote schema will be accessible.
        fieldName: "Cases",
        // createLink: () => {
        //   return createHttpLink({
        //     uri: 'http://127.0.0.1:8080/v1/graphql',
        //     // headers: { 'x-hasura-admin-secret': process.env.HASURA_SECRET },
        //     fetch,
        //   });
        // },
        url: "http://127.0.0.1:8080/v1/graphql",
      },
    },
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
        icon: `src/images/banner.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
