createPage({
  path: `/blog/blog/${id}`,
  component: path.resolve(`./src/pages/blog/blog`),
  context: {
    id: id,
  },
})
