const path = require(`path`)

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      articles {
        articles {
          title
          author
          id
          content
        }
      }
    }
  `)

  // const articles = result.data.Cases.Cases;

  try {
    const articles = result.data.articles.articles

    articles.forEach(articles => {
      const { id } = articles

      createPage({
        path: `/article/${id}`,
        component: require.resolve(`./src/templates/article.js`),
        context: {
          id: id,
        },
      })
    })
  } catch (error) {
    console.log(error)
  }
}
