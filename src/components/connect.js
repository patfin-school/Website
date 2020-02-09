import React from "react"
import styled from "styled-components"
import { Icon } from "semantic-ui-react"
import Flex from "styled-flex-component"
import Link from "gatsby"
import { media } from "../media_style"

const Div = styled.div`
  margin-top: 2%
  padding-top: 5%
  margin-left: 35%
  margin-bottom: 2%
  text-align: center 
  ${media.tablet`
  margin-left: 27%;
`}
  ${media.phone`
  margin-left: 17%;
`}
`

const Text = styled.p`
  ${media.phone`
padding-top: 7%
`}
  ${media.tablet`
padding-top: 13%
`}
margin-top: 5%
padding-top: 5%
text-align: center
font-size: 1.3em
`

const IconContain = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  ${media.tablet`
  margin-left: 5%;
  margin-right: 5%;
`}
  ${media.phone`
  margin-left: 3%;
  margin-right: 3%;
`}
`
export default function connect() {
  return (
    <>
      <Text /> <hr />
      <Div>
        <Flex>
          <IconContain>
            <Icon name="instagram" size="big" link color="green" />
          </IconContain>
          <IconContain>
            <Icon name="facebook" size="big" link color="blue" />
          </IconContain>
          <IconContain>
            <Icon name="google plus square" link size="big" color="red" />
          </IconContain>

          <IconContain>
            <Icon name="twitter" size="big" link color="blue" />
          </IconContain>
        </Flex>
      </Div>
    </>
  )
}
