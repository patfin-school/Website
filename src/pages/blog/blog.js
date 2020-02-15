import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import { Body, BlogItems } from "../../styles/style"
import StoryCard from "./storycard"

const Data1 = [
  {
    id: 1,
    title: "My  Welcome back party experience",
    imgUri:
      "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg",
    created: "",
    summary:
      "Welcome back party experience Welcome experience Welcome back party experience Welcome back party experience ",
  },
  {
    id: 2,
    title: "My  Welcome back party experience",
    imgUri:
      "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg",
    created: "",
    summary:
      "Welcome back party experience Welcome experience Welcome back party experience Welcome back party experience ",
  },
  {
    id: 3,
    title: "Our Latest Excursion",
    imgUri:
      "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg",
    created: "",
    summary:
      "Welcome back party experience Welcome experience Welcome back party experience Welcome back party experience ",
  },
  {
    id: 4,
    title: "My Last Class Party",
    imgUri:
      "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg",
    created: "",
    summary:
      "Welcome back party experience Welcome experience Welcome back party experience Welcome back party experience ",
  },
]

export const query = graphql`
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
`

const Blog = ({ data }) => {
  console.log(data, "data")

  return (
    <Layout>
      <Body>
        <BlogItems>
          {data.articles.articles.map(({ id, title, content }) => {
            return (
              <StoryCard
                id={id}
                title={title}
                summary={content}
                date="12-12-12"
              />
            )
          })}
        </BlogItems>
      </Body>
    </Layout>
  )
}

export default Blog
