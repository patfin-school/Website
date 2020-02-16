import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { FiMenu } from "react-icons/fi"

import { HeaderBody, Hover } from "../../styles/style"
import Menu from "./menu"
import Burger from "./burger"

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

  const [open, setOpen] = useState(false)
  const menuId = "main-menu"

  return (
    <div>
      {Width >= 800 ? (
        <HeaderBody>
          <Flex justifyBetween>
            <Flex>
              <img
                alt="logo"
                style={{ maxWidth: "4em" }}
                src={
                  "https://res.cloudinary.com/dkfptto8m/image/upload/v1558522007/Patfin/banner.png"
                }
              />
              <Link to="/">
                <h2>Patfin</h2>
              </Link>
            </Flex>
            <Flex>
              <div style={{ paddingRight: "10px", paddingTop: "10px" }}>
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
                style={{ maxWidth: "3em" }}
                src={
                  "https://res.cloudinary.com/dkfptto8m/image/upload/v1558522007/Patfin/banner.png"
                }
              />
              <Link to="/">
                <h3>Patfin</h3>
              </Link>
            </Flex>

            <Flex>
              <Burger
                type="Notification"
                open={open}
                setOpen={setOpen}
                aria-controls={menuId}
              />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </Flex>
          </Flex>
        </HeaderBody>
      )}
    </div>
  )
}

export default Header
