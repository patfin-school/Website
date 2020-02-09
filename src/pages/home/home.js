import React from "react"

import Layout from "../../components/layout"
import Banner from "../../components/banner"
import { Body } from "../../styles/style"

import About from "./about"
import Contact from "./contact"

const Home = () => {
  return (
    <Layout>
      <Banner />

      <Body>
        <About />

        <Contact />
      </Body>
    </Layout>
  )
}

export default Home
