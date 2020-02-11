import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { FiMail, FiTwitter, FiFacebook } from "react-icons/fi"
import { Link } from "gatsby"

import {
  Text,
  FooterBody,
  FooterSection,
  Title as Titles,
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
    <FooterBody>
      {Width >= 700 ? (
        <div style={{ padding: "2% 1%" }}>
          <Flex justifyAround>
            <div>
              <Titles small>Patfin School</Titles>
              <Flex justifyAround>
                <FiFacebook style={{ color: "blue", fontSize: "2.5em" }} />
                <FiTwitter style={{ color: "blue", fontSize: "2.5em" }} />
                <FiMail style={{ color: "red", fontSize: "2.5em" }} />
              </Flex>
            </div>
            <Flex column>
              <p style={Head}> PRODUCT </p>
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
              <p style={Head}> PRODUCT </p>
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
              <p style={Head}> PRODUCT </p>
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
          </Flex>
        </div>
      ) : (
        <div style={{ padding: "0.5%" }}>
          <Flex justifyCenter>
            <div>
              <br />

              <Titles small>Patfin School</Titles>

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
              <Text small white>
                Jobs
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
              <p style={Head}> MORE </p>
              <Text small white>
                Admissions
              </Text>
              <Text small white>
                Scheme
              </Text>
            </Flex>
          </Flex>
        </div>
      )}

      <FooterSection>
        <Text small>
          Copyright © {new Date().getFullYear()} , a subsidiary of the
          <a href="https://www.fundry.netlify.com"> Fundry Program </a>.
          <br /> <a href="/"> Terms of Service </a> or
          <a href="/"> Privacy Policies </a>
        </Text>
      </FooterSection>
    </FooterBody>
  )
}

export default Footer
