import React from "react"
import Flex from "styled-flex-component"
import { Image } from "react-bootstrap"
import { graphql } from "gatsby"
import { useQuery } from "@apollo/react-hooks"

import Layout from "../components/layout"
import { Body, BlogItems, ArticleBody, Title, Text } from "../styles/style"
import StoryCard from "../pages/blog/storycard"

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

const Article = ({ id }) => {
  const Article = data.articles.articles

  const { data, error } = useQuery(query, {
    variables: {
      id,
    },
  })

  console.log(Article)
  if (data) {
    console.log(data)
  }
  return (
    <Layout>
      <br />
      <Body id={Article.id}>
        <Flex justifyBetween>
          <Flex>
            <Image
              src=""
              alt="author"
              roundedCircle
              style={{ marginRight: "15px", marginLeft: "20px" }}
            />
            <Title black small>
              {Article.author}
            </Title>
          </Flex>

          <Text small> {Article.content} </Text>
        </Flex>
        <Title black> {Article.title} </Title>
        <ArticleBody>{Article.content}</ArticleBody>
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
