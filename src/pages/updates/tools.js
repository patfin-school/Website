import React from "react"
import styled from "styled-components"
import { media } from "../../media_style"
import Flex from "styled-flex-component"
import { Card } from "react-bootstrap"
import Countdown from "./countdown"

const Header = styled.p`
  ${media.tablet`
  padding-top: 15px;
  font-size : 1.4em
  `}

  ${media.phone`
  padding-top: 10px;
  font-size : 1.3em
  `} 
  font-size : 1.5em
  padding-top: 30px;
  text-align: center;
`

const Div = styled.div`
  ${media.tablet`
height: 235vh;
`}
  ${media.phone`
height: 200vh;
`} 
  background-color: #f8f8f9;
  color: black;
  height: 250vh;
`

const Title = styled.p`
  ${media.tablet`
font-size : 1.2em
`}
  ${media.phone`
font-size : 1.1em
`} 
font-size : 1.4em
text-align: center;
`

const Text = styled.p`
  ${media.tablet`
font-size : 0.9em
`}
  ${media.phone`
font-size : 0.7em
`}
  font-size : 1em
`

const Github = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size : 1.1em
  width : 35%
  height : 60px
  margin-left : 10%
  margin-top : 2%
  ${media.tablet`
  border-radius: 3px;
  font-size : 1.1em
  height : 55px
  `}
    ${media.phone`
  border-radius: 3px;
  font-size : 1em
  height : 42px
  margin-top : 5px
  `}
`

const Donate = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1.3px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size : 1.1em
  height : 50px
  margin-left : 7%
  margin-top : 10px
  ${media.tablet`
  border-radius: 5px;
  font-size : 1.1em
  height : 45px
  margin-top : 5px
  `}
    ${media.phone`
  border: 1.1px solid palevioletred;
  border-radius: 3px;
  font-size : 0.8em
  height : 40px
  margin-top : 3px
  `}
`

const Button = styled.div`
  text-align: center;
`

const Contain = styled.div`
margin-left : 2%
margin-right : 2%
`

const Image = styled.img`
 width : 100%
 height : 60vh
 border-radius : 5px
 ${media.tablet`
 width : 100%
 height : 45vh
 border-radius : 3px
 `}
   ${media.phone`
   width : 100%
   height : 30vh
 `} 
`

const Details = styled.div`
  margin-left: 7%;
  ${media.tablet`
    margin-left: 2%;
  `}
  ${media.phone`
  margin-bottom: 3%;
  margin-left: 3%;
  `}
`
var textStyle = {
  position: "absolute",
  top: "2%",
  left: "63%",
}

export default function update() {
  return (
    <Div>
      <Header> Upcoming Events </Header>
      <hr />
      <Contain>
        <Card>
          <Image
            responsive
            src={
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
            }
          />
          <div style={textStyle}>
            <Countdown date={"11, Oct"} />{" "}
          </div>
          <Details>
            <Title> COLOUR DAY </Title>
            <Text>
              bla bla bla bla jmgrbkgjkdbsunkbhseefkseekfsebnhkeb
              cjrmdhbirnkubrgnhkr kljkhlmnlgbj
            </Text>

            <Flex justifyBetween>
              <Donate>Donate</Donate>
              <Donate>Calendar</Donate>
            </Flex>
          </Details>
        </Card>

        <hr />
        <Card>
          <Image
            responsive
            src={
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
            }
          />
          <div style={textStyle}>
            <Countdown date={"11, Oct"} />{" "}
          </div>
          <Details>
            <Title> COLOUR DAY </Title>
            <Text>
              bla bla bla bla jmgrbkgjkdbsunkbhseefkseekfsebnhkeb
              cjrmdhbirnkubrgnhkr kljkhlmnlgbj
            </Text>

            <Flex justifyBetween>
              <Donate>Donate</Donate>
              <Donate>Calendar</Donate>
            </Flex>
          </Details>
        </Card>
        <hr />
        <Card>
          <Image
            responsive
            src={
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
            }
          />
          <div style={textStyle}>
            <Countdown date={"11, Oct"} />{" "}
          </div>
          <Details>
            <Title> COLOUR DAY </Title>
            <Text>
              bla bla bla bla jmgrbkgjkdbsunkbhseefkseekfsebnhkeb
              cjrmdhbirnkubrgnhkr kljkhlmnlgbj
            </Text>

            <Flex justifyBetween>
              <Donate>Donate</Donate>
              <Donate>Calendar</Donate>
            </Flex>
          </Details>
        </Card>
      </Contain>
      <br />
      <Button>
        <Github> See More </Github>{" "}
      </Button>
    </Div>
  )
}
