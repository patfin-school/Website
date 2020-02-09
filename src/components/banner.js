import React from "react"

import { Body, BannerBody, Motto, Button } from "../styles/style"
import Art from "../assets/svg/banner-art.svg"

export default function banner() {
  return (
    <BannerBody>
      <Body>
        <img alt="illustration" src={Art} style={{ maxHeight: "25em" }} />

        <Motto>
          Raising Future Leaders <br /> Of Tomorrow
        </Motto>
        <Button> Our Activities </Button>
      </Body>
    </BannerBody>
  )
}
