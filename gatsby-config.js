require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const fetch = require("isomorphic-fetch")
const createHttpLink = require("apollo-link-http")

const URL = process.env.GATSBY_GRAPHQL_ENDPOINT
const SECRET = process.env.GATSBY_HASURA_SECRET

console.log(SECRET, URL)

module.exports = {
  siteMetadata: {
    title: `Patfin School`,
    description: `Building a future generation of learned ones.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "articles",
        // Field under which the remote schema will be accessible.
        fieldName: "articles",
        url: URL,
        headers: { "x-hasura-admin-secret": SECRET },
        // createLink: (pluginOptions) => {
        //   return createHttpLink({
        //     uri: URL,
        //     headers: { 'x-hasura-admin-secret': SECRET },
        //     fetch,
        //   });
        // },
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
  ],
}
