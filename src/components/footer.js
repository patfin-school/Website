import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { FiMail, FiTwitter, FiFacebook } from "react-icons/fi"
import { Link } from "gatsby"

import {
  Text,
  Body,
  FooterBody,
  FooterSection,
  Title as Titles,
  Tiny,
} from "../styles/style"

const Footer = () => {
  const Head = {
    fontSize: "0.9em ",
    fontWeight: "bold",
    color: "#fff",
  }

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
      <FooterBody>
        {Width >= 700 ? (
          <div style={{ padding: "2% 1%" }}>
            <Flex justifyAround>
              <Body>
                <Text bold white>
                  Patfin School{" "}
                </Text>
                <Flex column>
                  <Tiny white small>
                    11,Oyelami Street , Akeasan , Lagos
                  </Tiny>
                  <Tiny white small>
                    Patfin@gmail.com
                  </Tiny>
                </Flex>
                <Flex justifyBetween>
                  <FiFacebook style={{ color: "blue", fontSize: "2.2em" }} />
                  <FiTwitter style={{ color: "blue", fontSize: "2.2em" }} />
                  <FiMail style={{ color: "red", fontSize: "2.2em" }} />
                </Flex>
              </Body>

              <Flex column>
                <p style={Head}> ACADEMICS </p>
                <Text small white>
                  Scheme
                </Text>
                <Text small white>
                  Dates
                </Text>
                <Text small white>
                  Admissions
                </Text>
              </Flex>
              <Flex column>
                <p style={Head}> SOCIAL </p>
                <Text small white>
                  Create Team
                </Text>
                <Text small white>
                  Documentation
                </Text>
                <Text small white>
                  Billing
                </Text>
              </Flex>
              <Flex column>
                <p style={Head}> HELP </p>
                <Text small white>
                  Support
                </Text>
                <Text small white>
                  Documentation
                </Text>
                <Text small white>
                  Billing
                </Text>
              </Flex>
            </Flex>
          </div>
        ) : (
          <div style={{ padding: "0.5%" }}>
            <Flex justifyCenter>
              <div>
                <br />

                <div white style={{ color: "#fff", textAlign: "center" }}>
                  <Titles small bold>
                    Patfin School
                  </Titles>
                  <Tiny small>
                    11,Oyelami Street, Akeasan , Lagos State , Nigeria{" "}
                  </Tiny>
                </div>

                <Flex justifyAround>
                  <FiFacebook style={{ color: "black", fontSize: "2em" }} />
                  <FiTwitter style={{ color: "blue", fontSize: "2em" }} />
                  <FiMail style={{ color: "black", fontSize: "2em" }} />
                </Flex>
              </div>
            </Flex>

            <br />
            <Flex justifyAround>
              <Flex column>
                <p style={Head}> PRODUCT </p>
                <Tiny small white>
                  Jobs
                </Tiny>
                <Tiny small white>
                  Help
                </Tiny>
                <Tiny small white>
                  Billing
                </Tiny>
              </Flex>
              <Flex column>
                <p style={Head}> HELP </p>
                <Tiny small white>
                  Scheme
                </Tiny>
                <Tiny small white>
                  Help
                </Tiny>
                <Tiny small white>
                  Billing
                </Tiny>
              </Flex>
              <Flex column>
                <p style={Head}> MORE </p>
                <Tiny small white>
                  Admissions
                </Tiny>
                <Tiny small white>
                  Scheme
                </Tiny>
              </Flex>
            </Flex>
          </div>
        )}

        <FooterSection>
          <Tiny small>
            Copyright © {new Date().getFullYear()} - Rights Reserved
            <br /> <a href="/"> Terms of Service </a> or
            <a href="/"> Privacy Policies </a>
          </Tiny>
        </FooterSection>
      </FooterBody>{" "}
    </div>
  )
}

export default Footer
