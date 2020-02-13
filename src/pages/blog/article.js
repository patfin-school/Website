import React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"

import Layout from "../../components/layout"
import { Body, BlogItems, ArticleBody, Title, Text } from "../../styles/style"
import StoryCard from "./storycard"

const Data = {
  author: "Francis Nwani",
  created: "12th,  November,  2017",
  title: "My Trip To Ibadan",
  content: "",
}

const Stories = [
  {
    id: 1,
    title: "Trip To Ibadan",
    imgUri:
      "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg",
    summary:
      "Welcome back party experience Welcome Welcome back party experience Welcome back party experience ",
    created: "3 days ago",
  },
  {
    id: 2,
    imgUri:
      "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg",
    title: "My  Welcome back party experience",
    created: "5 days ago",
    summary:
      "Welcome back party experience Welcome experience Welcome back party experience Welcome back party experience ",
  },
]

const Article = () => {
  return (
    <Layout>
      <br />
      <Body>
        <Flex justifyBetween>
          <Flex>
            <Image
              src=""
              alt="author"
              roundedCircle
              style={{ marginRight: "15px", marginLeft: "20px" }}
            />
            <Title black small>
              {Data.author}{" "}
            </Title>
          </Flex>

          <Text small> {Data.created} </Text>
        </Flex>
        <Title black> {Data.title} </Title>
        <ArticleBody>
          The date was 10th , October 2019. It was a morning welcomed with a
          sweet smelling aroma of freshly fried bean cakes It was a morning
          welcomed with a sweet smelling aroma of freshly fried bean cakes It
          was a morning welcomed with a sweet smelling aroma of freshly fried
          bean cakes It was a morning welcomed with a sweet smelling aroma of
          freshly fried bean cakes It was a morning welcomed with a sweet
          smelling aroma of freshly fried bean cakes It was a morning welcomed
          with a sweet smelling aroma of freshly fried bean cakes It was a
          morning welcomed with a sweet smelling aroma of freshly fried bean
          cakes It was a morning welcomed with a sweet smelling aroma of freshly
          fried bean cakes It was a morning welcomed with a sweet smelling aroma
          of freshly fried bean cakes It was a morning welcomed with a sweet
          smelling aroma of freshly fried bean cakes It was a morning welcomed
          with a sweet smelling aroma of freshly fried bean cakes It was a
          morning welcomed with a sweet smelling aroma of freshly fried bean
          cakes It was a morning welcomed with a sweet smelling aroma of freshly
          fried bean cakes{" "}
        </ArticleBody>
        <br />
        <ArticleBody>
          It was a morning welcomed with a sweet smelling aroma of freshly fried
          bean cakes It was a morning welcomed with a sweet smelling aroma of
          freshly fried bean cakes It was a morning welcomed with a sweet
          smelling aroma of freshly fried bean cakes It was a morning welcomed
          with a sweet smelling aroma of freshly fried bean cakes It was a
          morning welcomed with a sweet smelling aroma of freshly fried bean
          cakes It was a morning welcomed with a sweet smelling aroma of freshly
          fried bean cakes It was a morning welcomed with a sweet smelling aroma
          of freshly fried bean cakes It was a morning welcomed with a sweet
          smelling aroma of freshly fried bean cakes It was a morning welcomed
          with a sweet smelling aroma of freshly fried bean cakes It was a
          morning welcomed with a sweet smelling aroma of freshly fried bean
          cakes It was a morning welcomed with a sweet smelling aroma of freshly
          fried bean cakes It was a morning welcomed with a sweet smelling aroma
          of freshly fried bean cakes It was a morning welcomed with a sweet
          smelling aroma of freshly fried bean cakes
        </ArticleBody>{" "}
        <br />
        <ArticleBody>
          It was a morning welcomed with a sweet smelling aroma of freshly fried
          bean cakes It was a morning welcomed with a sweet smelling aroma of
          freshly fried bean cakes It was a morning welcomed with a sweet
          smelling aroma of freshly fried bean cakes It was a morning welcomed
          with a sweet smelling aroma of freshly fried bean cakes It was a
          morning welcomed with a sweet smelling aroma of freshly fried bean
          cakes It was a morning welcomed with a sweet smelling aroma of freshly
          fried bean cakes It was a morning welcomed with a sweet smelling aroma
          of freshly fried bean cakes It was a morning welcomed with a sweet
          smelling aroma of freshly fried bean cakes
        </ArticleBody>
        <br />
        <Body>
          <Title bold uncentered black small>
            Recommended For Your Reading{" "}
          </Title>

          <BlogItems>
            {Stories.map(({ id, title, summary, imgUri, created }) => {
              return (
                <StoryCard
                  id={id}
                  title={title}
                  summary={summary}
                  img={imgUri}
                  date={created}
                />
              )
            })}
          </BlogItems>
        </Body>
      </Body>
    </Layout>
  )
}

export default Article
