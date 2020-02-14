const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(` 
    {
  articles {
    title
    author
    id
    content
  }
 `)

  const articles = result.articles
  console.log(articles)
  articles.forEach(edge => {
    createPage({
      path: `/blog/blog/${id}`,
      component: path.resolve(`./src/pages/blog/blog`),
      context: {
        id: id,
      },
    })
  })
}
