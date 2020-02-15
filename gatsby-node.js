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

  // {
  //     Cases {
  //       Cases {
  //         author
  //         title
  //         created
  //         id
  //       }
  //     }
  //   }a

  // const articles = result.data.Cases.Cases;
  const articles = result.data.articles.articles
  console.log(articles)

  articles.forEach(edge => {
    createPage({
      path: `/templates/article/${articles.id}`,
      component: require.resolve(`./src/templates/article.js`),
      context: {
        id: articles.id,
      },
    })
  })
}
