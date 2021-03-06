import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header/header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          <Helmet>
            <meta charSet="utf-8" />
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" />
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            />
            <link
              hrnef="https://fots.googleapis.com/css?family=Open+Sans"
              rel="stylesheet"
            />
          </Helmet>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
