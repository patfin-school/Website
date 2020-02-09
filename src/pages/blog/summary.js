import React from "react"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { FiArrowRight, FiClock, FiEye } from "react-icons/fi"
import { Link } from "gatsby"

import {
  Title,
  Contain,
  Text,
  Body,
  StyledCard,
  BlogItems,
} from "../../styles/style"
import Features from "../../assets/svg/features.svg"

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
        <img src={Features} alt="blog art" style={{ textAlign: "center" }} />
      </Flex>
      <Title black> RECENT STORIES </Title>
      <Text center>
        All school events and activities pened down for your viewing.
      </Text>
      <hr />
      <BlogItems>
        {Data.map(({ id, title, summary }) => {
          return (
            <StyledCard>
              <Card.Img
                variant="top"
                src={
                  "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
                }
              />
              <Title small black>
                {title}{" "}
              </Title>
              <Card.Body>
                <Text center small>
                  {summary}
                </Text>

                <Flex justifyBetween>
                  <Flex>
                    <FiClock style={{ fontSize: "1.4em", color: "grey" }} />
                    <Text>01/01/01</Text>
                  </Flex>

                  <Flex>
                    <FiEye style={{ fontSize: "1.4em", color: "grey" }} />
                    <Text>11</Text>
                  </Flex>
                </Flex>

                <Contain>
                  <Flex justifyCenter>
                    <Link to="/">
                      <Flex>
                        <h4> Read More</h4>

                        <FiArrowRight style={{ fontSize: "1.7em" }} />
                      </Flex>
                    </Link>
                  </Flex>
                </Contain>
              </Card.Body>
            </StyledCard>
          )
        })}
      </BlogItems>
    </Body>
  )
}

export default Summary
