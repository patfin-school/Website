import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"

import { Body, BlogItems } from "../../styles/style"
import StoryCard from "./storycard"

const Data = [
  {
    id: 1,
    title: "Trip To Ibadan",
    summary:
      "Welcome back party experience Welcome Welcome back party experience Welcome back party experience ",
    created: "",
  },
  {
    id: 2,
    title: "My  Welcome back party experience",
    created: "",
    summary:
      "Welcome back party experience Welcome experience Welcome back party experience Welcome back party experience ",
  },
  {
    id: 1,
    title: "Trip To Ibadan",
    summary:
      "Welcome back party experience Welcome Welcome back party experience Welcome back party experience ",
    created: "",
  },
  {
    id: 2,
    title: "My  Welcome back party experience",
    created: "",
    summary:
      "Welcome back party experience Welcome experience Welcome back party experience Welcome back party experience ",
  },
]

const Blog = () => {
  return (
    <div>
      <Header />
      <Body>
        <div>
          {Data.map(({ id, title, summary, created }) => {
            return (
              <BlogItems>
                <StoryCard
                  id={id}
                  title={title}
                  summary={summary}
                  date={created}
                />{" "}
              </BlogItems>
            )
          })}
        </div>
      </Body>
      <Footer />
    </div>
  )
}

export default Blog
