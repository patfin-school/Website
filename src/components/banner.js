import React, { useState } from "react"
import Flex from "styled-flex-component"
import { FiX } from "react-icons/fi"

import {
  Body,
  BannerBody,
  Title,
  Motto,
  Button,
  Notification,
  Text,
  Hover,
} from "../styles/style"
import Art from "../assets/svg/banner-art.svg"

const Banner = () => {
  const [Notify, setNotify] = useState(true)

  return (
    <div>
      {Notify ? (
        <Notification>
          <Flex justifyBetween>
            <Text small>
              School Activities are currently halted until futher notice.
            </Text>
            <Hover
              onClick={() => {
                setNotify(false)
              }}
            >
              <FiX style={{ fontSize: "1.7rem" }} />
            </Hover>
          </Flex>
        </Notification>
      ) : null}
      <BannerBody>
        <Body>
          <img alt="illustration" src={Art} style={{ maxHeight: "25em" }} />

          <Motto>
            Raising Future Leaders <br /> Of Tomorrow
          </Motto>
          <Title small black>
            Our mission is to transform young ones into the future leaders of
            the next generation
          </Title>
          <Button> Our Activities </Button>
        </Body>
      </BannerBody>
    </div>
  )
}

export default Banner
