import React from "react"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { FiArrowRight, FiClock, FiEye } from "react-icons/fi"
import { Link } from "gatsby"

import {
  Title,
  Contain,
  Text,
  Hover,
  Body,
  StyledCard,
  BlogItems,
} from "../../styles/style"
import Reader from "../../assets/svg/reader.svg"

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
        {Data.map(({ id, title, summary }) => {
          return (
            <StyledCard key={id}>
              <Card.Img
                fluid
                variant="top"
                src={
                  "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
                }
              />
              <Title small black>
                {title}
              </Title>
              <Text center small>
                {summary}
              </Text>

              <Flex justifyBetween>
                <Flex>
                  <Hover style={{ paddingRight: "7px" }}>
                    <FiClock style={{ fontSize: "1.7em", color: "grey" }} />
                  </Hover>
                  <Text>01/01/01</Text>
                </Flex>

                <Flex>
                  <Hover style={{ paddingRight: "7px" }}>
                    <FiEye style={{ fontSize: "1.7em", color: "grey" }} />
                  </Hover>
                  <Text>11</Text>
                </Flex>
              </Flex>

              <Contain>
                <Flex justifyCenter>
                  <Link to="/">
                    <Flex>
                      <h4> Read More</h4>

                      <FiArrowRight style={{ fontSize: "2em" }} />
                    </Flex>
                  </Link>
                </Flex>
              </Contain>
            </StyledCard>
          )
        })}
      </BlogItems>
    </Body>
  )
}

export default Summary
