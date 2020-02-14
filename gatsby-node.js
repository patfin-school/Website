const path = require(`path`)

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      Cases {
        Cases {
          author
          title
          created
          id
        }
      }
    }
  `)

  const articles = result.data.Cases.Cases
  console.log(articles, "case")
  articles.forEach(edge => {
    createPage({
      path: `/blog/blog/${articles.id}`,
      component: require.resolve(`./src/templates/article.js`),
      context: {
        id: articles.id,
      },
    })
  })
}
