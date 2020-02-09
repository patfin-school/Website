import React, { useState, useEffect } from "react"
import Flex from "styled-flex-component"
import { FiGithub, FiTwitter, FiFacebook } from "react-icons/fi"
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
      {Width >= 500 ? (
        <div style={{ padding: "2%" }}>
          <Flex justifyAround>
            <div>
              <Titles small>Patfin School</Titles>
              <Flex justifyAround>
                <FiFacebook style={{ color: "black", fontSize: "1.5em" }} />
                <FiTwitter style={{ color: "blue", fontSize: "1.5em" }} />
                <FiGithub style={{ color: "black", fontSize: "1.5em" }} />
              </Flex>
            </div>
            <Flex column>
              <p style={Head}> PRODUCT </p>
              <Text small white>
                Create Team{" "}
              </Text>
              <Text small white>
                Documentation{" "}
              </Text>
              <Text small white>
                Billing{" "}
              </Text>
            </Flex>{" "}
            <Flex column>
              <p style={Head}> PRODUCT </p>
              <Text small white>
                Create Team{" "}
              </Text>
              <Text small white>
                Documentation{" "}
              </Text>
              <Text small white>
                Billing{" "}
              </Text>
            </Flex>
            <Flex column>
              <p style={Head}> PRODUCT </p>
              <Text small white>
                Create Team{" "}
              </Text>
              <Text small white>
                Documentation{" "}
              </Text>
              <Text small white>
                Billing{" "}
              </Text>
            </Flex>
          </Flex>
        </div>
      ) : (
        <div style={{ padding: "0.5%" }}>
          <Flex justifyCenter>
            <div>
              <h5 style={{ marginTop: "1em", color: "#fff" }}>Event.Inc</h5>

              <Flex justifyAround>
                <FiFacebook style={{ color: "black", fontSize: "1.5em" }} />
                <FiTwitter style={{ color: "blue", fontSize: "1.5em" }} />
                <FiGithub style={{ color: "black", fontSize: "1.5em" }} />
              </Flex>
            </div>
          </Flex>

          <br />
          <Flex justifyAround>
            <Flex column>
              <p style={Head}> PRODUCT </p>
              <Text small white>
                Create Team{" "}
              </Text>
              <Text small white>
                Documentation{" "}
              </Text>
              <Text small white>
                Billing{" "}
              </Text>
            </Flex>{" "}
            <Flex column>
              <p style={Head}> PRODUCT </p>
              <Text small white>
                Create Team{" "}
              </Text>
              <Text small white>
                Documentation{" "}
              </Text>
              <Text small white>
                Billing{" "}
              </Text>
            </Flex>
            <Flex column>
              <p style={Head}> PRODUCT </p>
              <Text small white>
                Create Team{" "}
              </Text>
              <Text small white>
                Documentation{" "}
              </Text>
              <Text small white>
                Billing{" "}
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
