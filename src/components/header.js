import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import Img from "react-image"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiMenu } from "react-icons/fi"

import { HeaderBody, Button } from "../styles/style"

const Header = props => {
  const Image = styled(Img)`
    width: 7%;
    height: 25px;
  `

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

  // const hooks = useWindowWidth()
  return (
    <div>
      {Width >= 600 ? (
        <HeaderBody>
          <nav>
            <Flex justifyBetween>
              <Flex>
                <Image
                  src={
                    "https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                  }
                />
                <Link to="/">
                  <h2>Patfin</h2>
                </Link>
              </Flex>
              <Flex>
                <div style={{ paddingRight: "20px" }}>
                  <Link to="/">
                    <a> Activities</a>
                  </Link>

                  <Link to="/">
                    <a> Calendar </a>
                  </Link>

                  <Link to="/">
                    <a> Resources </a>
                  </Link>
                </div>
              </Flex>
            </Flex>
          </nav>
        </HeaderBody>
      ) : (
        <HeaderBody>
          <nav>
            <Flex justifyBetween>
              <Flex>
                <Image
                  src={
                    "https:/a/res.cloudinary.com/dkfptto8m/image/upload/v1558070244/Mongodb%20hackathon%20project/thunder.png"
                  }
                />
                <Link to="/">
                  <h2>Remotify</h2>
                </Link>
              </Flex>

              <Link to="/download/download">
                <Button> Download </Button>
              </Link>
            </Flex>
          </nav>
        </HeaderBody>
      )}
    </div>
  )
}

export default Header
