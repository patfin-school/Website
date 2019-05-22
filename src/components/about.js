import React, { Component } from "react"
import styled from "styled-components"
import { media } from "../media_style"
import { Card } from "react-bootstrap"

const Div = styled.div`
    padding-top : 10px 
    padding-bottom : 10px 
`

const Text = styled.p`
  font-size: 1.1em;
  color: #212529;
  margin-left : 2%
  margin-right : 2%
  ${media.tablet`
  font-size: 1em;
  `}
  ${media.phone`
    font-size: 0.75em;
  `}
`

const CardText = styled.p`
font-size : 1.1em
  color : white
  margin-left : 5%
  margin-right : 5%
  margin-bottom : 5%
`

const Contain = styled.div`
  margin-left : 7%
  margin-right : 7%
`

const Title = styled.h5`
  text-align : center
  font-wieght : bold
  color : white
`

const Button = styled.div`
text-align : center
`

const Map = styled.button`
  background: white;
  border-radius: 3px;
  border: 1.3px solid palevioletred;
  color: #022b69;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size : 1.1em
  height : 50px
  width : 40%
  margin-left : 7%
  margin-top : 5%
  font-weight : bold
  margin-bottom : 5%
  ${media.tablet`
  border-radius: 5px;
  font-size : 1.1em
  height : 45px
  margin-top : 5px
  `}
    ${media.phone`
  border: 1.1px solid palevioletred;
  border-radius: 3px;
  font-size : 1.1em
  height : 40px
  margin-top : 3px
  `}
`

export default function about() {
  return (
    <Div>
      <Text>
        Patfin School Description Patfin School Description Patfin School
        Description Patfin School Description Patfin School Description Patfin
        School Description Patfin School Description Patfin School Description
        Patfin School Description Patfin School Description Patfin School
        Description Patfin School Description Patfin School Description Patfin
        School Description Patfin School Description
      </Text>
      <Contain>
        <Card style={{ backgroundColor: "#0066f5", borderRadius: "15px" }}>
          <div style={{ marginTop: "3%" }}>
            {" "}
            <Title> Direction</Title>{" "}
          </div>{" "}
          <hr />
          <CardText> From Igando : </CardText>
          <div style={{ color: "white", marginLeft: "2%" }}>
            <ul> Take a bus heading towards Lasu </ul>{" "}
            <ul> Stop at Akesan Junction </ul>
            <ul> Cross over to the left i.e Akesan Bustop  </ul>
            <ul>  Pick a bike heading to Patfin School or 11, Oyelami Street  </ul>
          </div>
          <Button> <Map> Google Map </Map> </Button>
        </Card>

      </Contain>
      <br /> <br />
    </Div>
  )
}
