import React from "react"
import Layout from "../../components/layout"

import { Body, BlogItems } from "../../styles/style"
import StoryCard from "./storycard"

const Data = [
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

const Blog = () => {
  return (
    <Layout>
      <Body>
        <BlogItems>
          {Data.map(({ id, imgUri, title, summary, created }) => {
            return (
              <StoryCard
                id={id}
                img={imgUri}
                title={title}
                summary={summary}
                date={created}
              />
            )
          })}
        </BlogItems>
      </Body>
    </Layout>
  )
}

export default Blog
