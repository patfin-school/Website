import React from "react"
import Flex from "styled-flex-component"
import {} from "react-icons/fi"

import { Body, BannerBody, Title, Motto, Button } from "../styles/style"
import Art from "../assets/svg/banner-art.svg"

export default function banner() {
  return (
    <BannerBody>
      <Body>
        <img alt="illustration" src={Art} style={{ maxHeight: "25em" }} />

        <Motto>
          Raising Future Leaders <br /> Of Tomorrow
        </Motto>
        <Title small black>
          Our mission is to transform young ones into the future leaders of the
          next generation
        </Title>
        <Button> Our Activities </Button>
      </Body>
    </BannerBody>
  )
}
