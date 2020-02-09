import React from "react"
import Flex from "styled-flex-component"

import Layout from "../../components/layout"
import Banner from "../../components/banner"
import { Body, Text, Title, Button, Input, Items } from "../../styles/style"
import Features from "../../assets/svg/features.svg"

import Contact from "./contact"
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
  return (
    <Layout>
      <Banner />

      <Body>
        <div>
          <br />
          <Text>
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
                  <Text> {text} </Text>>
                </div>
              )
            })}
          </Items>

          <Flex justifyCenter>
            <div>
              <Title black> Join Our Newsletter </Title>
              <Flex>
                <Input placeholder="Enter Email Address" type="text" />{" "}
                <Button> Join </Button>
              </Flex>
            </div>
          </Flex>
        </div>

        <div>
          <Activities />
          <Contact />
          <Blog />
        </div>
      </Body>
    </Layout>
  )
}

export default Home
