import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"

import Layout from "../../components/layout"
import Banner from "../../components/banner"
import {
  Body,
  Text,
  SummaryBody,
  Title,
  Button,
  Input,
  Items,
} from "../../styles/style"
import Features from "../../assets/svg/features.svg"

import Blog from "../blog/summary"
import Activities from "./activites"

const Data = [
  {
    id: 1,
    name: "Refined Curriculmun",
    text:
      "Your children arev taught with children a children arev taught with children arev taught with ",
  },
  {
    id: 1,
    name: "Refined Curriculmun",
    text:
      "Your children arev taught with children arev taugh arev taught with children arev taught with ",
  },
  {
    id: 1,
    name: "Refined Curriculmun",
    text:
      "Your children arev taught with children arev taugh arev taught with children arev taught with ",
  },
  {
    id: 1,
    name: "Refined Curriculmun",
    text:
      "Your children arev taught with children arev taugh arev taught with children arev taught with ",
  },
]

const Home = () => {
  const [Width, setWidth] = useState(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 1000)

  const handleResize = value => {
    setWidth(value)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize.bind(this))
    return () => window.removeEventListener("resize", handleResize.bind(this))
  }, [])

  return (
    <Layout>
      <Banner />

      <Body>
        <div>
          <br />
          <Text center>
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
          </Text>
          <br />

          <Items>
            {Data.map(({ id, name, text }) => {
              return (
                <div key={id}>
                  <Flex justifyCenter>
                    <img style={{}} src={Features} alt="features" />
                  </Flex>
                  <Title black small>
                    {name}{" "}
                  </Title>
                  <Text center> {text} </Text>>
                </div>
              )
            })}
          </Items>

          <Flex justifyCenter>
            {Width >= 630 ? (
              <div>
                <Title black> Join Our Newsletter List. </Title>
                <Flex>
                  <Input placeholder="Enter Email Address" type="text" />{" "}
                  <Button> Join </Button>
                </Flex>
              </div>
            ) : (
              <div>
                <Title black small>
                  {" "}
                  Newsletter List.{" "}
                </Title>
                <Flex justifyCenter>
                  <Input placeholder="Enter Email Address" type="text" />{" "}
                </Flex>
                <br />
                <Flex justifyCenter>
                  <Button> Join List </Button>
                </Flex>
              </div>
            )}
          </Flex>
        </div>

        <div>
          <Activities />
          <br />
          <br />
        </div>
      </Body>
      <SummaryBody>
        <Blog />
      </SummaryBody>
    </Layout>
  )
}

export default Home
