import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { FiPhoneCall, FiMap } from "react-icons/fi"

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
          <div>
            <Body>
              <Text center>
                Patfin School Description Patfin School Description Patfin
                School Description Patfin School Description Patfin School
                Description Patfin School Description Patfin School Description
                Patfin School Description Patfin School Description Patfin
                School Description
              </Text>{" "}
            </Body>
            <Flex justifyCenter>
              <Button>
                <FiPhoneCall
                  style={{ paddingRight: "10px", fontSize: "2rem" }}
                />{" "}
                Contact Support{" "}
              </Button>
              <Button>
                <FiMap style={{ paddingRight: "10px", fontSize: "2rem" }} />{" "}
                View Location{" "}
              </Button>
            </Flex>
          </div>
          <br />

          <Items>
            {Data.map(({ id, name, text }) => {
              return (
                <div key={id}>
                  <Flex justifyCenter>
                    <img style={{}} src={Features} alt="features" />
                  </Flex>
                  <Title black small bold>
                    {name}
                  </Title>
                  <Text center small>
                    {text}{" "}
                  </Text>
                </div>
              )
            })}
          </Items>

          <Flex justifyCenter>
            {Width >= 750 ? (
              <div>
                <Title black> Subscribe To Our Newsletter List. </Title>
                <Flex>
                  <Input placeholder="Enter Email Address" type="text" />{" "}
                  <Button rounded> Join </Button>
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
