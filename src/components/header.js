import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { FiMenu } from "react-icons/fi"

import { HeaderBody } from "../styles/style"

const Header = props => {
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
    <div>
      {Width >= 800 ? (
        <HeaderBody>
          <Flex justifyBetween>
            <Flex>
              <img
                alt="logo"
                style={{ maxWidth: "5em" }}
                src={
                  "https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                }
              />
              <Link to="/">
                <h2>Patfin</h2>
              </Link>
            </Flex>
            <Flex>
              <div style={{ paddingRight: "10px", paddingTop: "15px" }}>
                <Link to="/blog/blog">
                  <a> Blog</a>
                </Link>

                <Link to="/">
                  <a> Activities </a>
                </Link>

                <Link to="/">
                  <a> Academics</a>
                </Link>
              </div>
            </Flex>
          </Flex>
        </HeaderBody>
      ) : (
        <HeaderBody>
          <Flex justifyBetween>
            <Flex>
              <img
                alt="logo"
                style={{ maxWidth: "5em" }}
                src={
                  "https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                }
              />
              <Link to="/">
                <h3>Patfin</h3>
              </Link>
            </Flex>

            <FiMenu style={{ fontSize: "2em" }} />
          </Flex>
        </HeaderBody>
      )}
    </div>
  )
}

export default Header
