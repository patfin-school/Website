import React, { Component } from "react"
import styled from "styled-components"
import { media } from "../../media_style"
import { Card } from "react-bootstrap"
import { Text } from "../../styles/style"

// import Image from '../image';

const Div = styled.div``

const CardText = styled.p`
  font-size: 1.1em;
  color: white;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 5%;
`

const Title = styled.h3`
  text-align: center;
  font-weight: bold;
  padding-top: 3%;
  color: white;
`

const Map = styled.button`
  background: white;
  border-radius: 3px;
  border: 1.3px solid palevioletred;
  color: #022b69;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 1.1em;
  height: 50px;
  width: 40%;
  margin-left: 7%;
  margin-top: 5%;
  font-weight: bold;
  margin-bottom: 5%;
  ${media.tablet`;
  border-radius: 5px;
  font-size : 1.1em;
  height : 45px;
  margin-top : 5px;
  `} ${media.phone`
  border: 1.1px solid palevioletred;
  border-radius: 3px;
  font-size : 1.1em;
  height : 40px;
  width : 57%;
  margin-top : 3px;
  `};
`

export default function about() {
  return (
    <Div>
      <br />
      <Text>
        Patfin School Description Patfin School Description Patfin School
        Description Patfin School Description Patfin School Description Patfin
        School Description Patfin School Description Patfin School Description
        Patfin School Description Patfin School Description Patfin School
        Description Patfin School Description Patfin School Description Patfin
      </Text>
      <br />

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
          <ul> Cross over to the left i.e Akesan Bustop </ul>
          <ul> Pick a bike heading to Patfin School or 11, Oyelami Street </ul>
        </div>
        <Map> Google Map </Map>{" "}
      </Card>
    </Div>
  )
}
