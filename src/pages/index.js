import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Profile from "./profile"
import Update from "./updates/update"
import Footer from "../components/footer"
import About from "../components/about"
import Contact from "../components/contact"
import Header from "../components/header"
import Connect from "../components/connect"

import All from "../components/banner/all"

const IndexPage = () => (
  <div>
    <Header />
    <Profile />
    <Layout>
      <SEO title="Home" />
      <>
        {" "}
        <About />
        <Update /><br />
        <Contact />
      </>
    </Layout>
    <Connect />
    <Footer />
  </div>
)

export default IndexPage
