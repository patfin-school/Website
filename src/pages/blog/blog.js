import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"

import { Body, BlogItems } from "../../styles/style"
import StoryCard from "./storycard"

const Data = [
  {
    id: 1,
    title: "Trip To Ibadan",
    imgUri:
      "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg",
    summary:
      "Welcome back party experience Welcome Welcome back party experience Welcome back party experience ",
    created: "",
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
    id: 1,
    title: "Trip To Ibadan",
    imgUri:
      "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg",
    summary:
      "Welcome back party experience Welcome Welcome back party experience Welcome back party experience ",
    created: "",
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
]

const Blog = () => {
  return (
    <div>
      <Header />
      <Body>
        <div>
          {Data.map(({ id, imgUri, title, summary, created }) => {
            return (
              <BlogItems>
                <StoryCard
                  id={id}
                  img={imgUri}
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
