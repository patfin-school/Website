import React from "react"
import { Link } from "gatsby"

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
        <br />
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
