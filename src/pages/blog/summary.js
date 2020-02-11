import React from "react"
import Flex from "styled-flex-component"
import { Link } from "gatsby"

import { Title, Text, Body, BlogItems } from "../../styles/style"
import Reader from "../../assets/svg/reader.svg"

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
    imgUri:
      "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg",
    title: "My  Welcome back party experience",
    created: "",
    summary:
      "Welcome back party experience Welcome experience Welcome back party experience Welcome back party experience ",
  },
]

const Summary = () => {
  return (
    <Body>
      <Flex justifyCenter>
        <img src={Reader} alt="blog art" style={{ textAlign: "center" }} />
      </Flex>
      <Title black> RECENT STORIES </Title>
      <Text center>
        All school events and activities pened down for your viewing.
      </Text>
      <hr />
      <BlogItems>
        {Data.map(({ id, title, summary, imgUri }) => {
          return (
            <BlogItems>
              <StoryCard id={id} title={title} summary={summary} img={imgUri} />
            </BlogItems>
          )
        })}
      </BlogItems>
    </Body>
  )
}

export default Summary
