import React from "react"
import styled from "styled-components"
import { media } from "../../media_style"
import Flex from "styled-flex-component"
import { Card } from "react-bootstrap"
import { Icon } from "semantic-ui-react"
import posed from "react-pose"

const Header = styled.p`
  ${media.tablet`
  padding-top: 15px;
  font-size : 1.4em
  `} ${media.phone`
  padding-top: 10px;
  font-size : 1.3em
  `} font-size : 1.5em padding-top: 30px;
  text-align: center;
`

const Div = styled.div`
  ${media.tablet`
padding-left : 10%
padding-left : 10%
padding-right : 5%
`} ${media.phone`
padding-right : 1%
padding-left : 1%
`} padding-left : 20% padding-bottom : 5% padding-right : 5% background-color: #f8f8f9;
  color: black;
  margin-top: 6%;
`

const Title = styled.p`
  ${media.tablet`
font-size : 1.2em
`} ${media.phone`
font-size : 1.1em
`} font-size : 1.4em text-align: center;
`

const Text = styled.p`
  ${media.tablet`
font-size : 0.9em
`} ${media.phone`
font-size : 0.7em
`} font-size : 1em;
`

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    paddingTop: "15px",
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },

  attention: {
    scale: 1.3,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 0,
    },
  },
})

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
  margin-top : 1%
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

const Details = styled.div`
  margin-left: 7%;
  margin-bottom: 5%;
  ${media.tablet`
    margin-left: 2%;
  `} ${media.phone`
  margin-bottom: 3%;
  margin-left: 3%;
  `};
`

const Date = styled.p`
        text-align : center
        font-size : 1.3em
        color : white
        ${media.tablet`
        font-size : 1.3em
        `}
          ${media.phone`
          font-size : 0.7em
        `} 
        `

const Circle = styled(Box)`
        width : 97px
        height: 97px
        padding-top: 5% 
        margin-top: 7% 
        margin-right: 2% 
        border-radius: 70px 
         background : #022b69
        ${media.tablet`
        font-size : 1em
        width : 97px
        height: 85px
        `}
          ${media.phone`
          width : 60px
          height: 45px
          padding-top: 14px 
          border-radius: 70px 
                  `} 
        `

const Image = styled.p`
color :  #022b69
  font-size: 1.3em ${media.tablet`
        font-size : 1.3em
        `} ${media.phone`
          font-size : 0.5em
        `};
`

const ViewImage = styled.div`
  margin-right: 6%;
  margin-bottom: 4%;
  margin-left: 10%;
`

export default function update() {
  return (
    <Div>
      <Header> Upcoming Events </Header>
      <hr />

      <Contain>
        <Flex>
          <Circle>
            <Date> 21 , Oct </Date>
          </Circle>
          <Card>
            <Details>
              <Title> COLOUR DAY </Title> <hr />
              <Text>
                bla bla bla bla jmgrbkgjkdbsunkbhseefkseekfsebnhkeb
                cjrmdhbirnkubrgnhkr kljkhlmnlgbj
              </Text>
              <ViewImage>
                <Flex>
                  <Image>
                    {" "}
                    <a href=""> Previous Images </a>{" "}
                  </Image>
                  <Icon
                    name="arrow alternate circle right outline icon "
                    size="grey"
                    link
                    color="green"
                    style={{ marginLeft: "2%" }}
                  />
                </Flex>
              </ViewImage>
              <Flex justifyBetween>
                <Donate>Donate</Donate>
                <Donate>Calendar</Donate>
              </Flex>
            </Details>
          </Card>
        </Flex>
      </Contain>

      <br />

      <Contain>
        <Flex>
          <Circle>
            <Date> 21 , Oct </Date>
          </Circle>

          <Card>
            <Details>
              <Title> COLOUR DAY </Title> <hr />
              <Text>
                bla bla bla bla jmgrbkgjkdbsunkbhseefkseekfsebnhkeb
                cjrmdhbirnkubrgnhkr kljkhlmnlgbj
              </Text>
              <ViewImage>
                <Image>
                  {" "}
                  <a href=""> Previous Images > </a>{" "}
                </Image>
              </ViewImage>
              <Flex justifyBetween>
                <Donate>Donate</Donate>
                <Donate>Calendar</Donate>
              </Flex>
            </Details>
          </Card>
        </Flex>
      </Contain>

      <br />

      <Contain>
        <Flex>
          <Circle>
            <Date> 21 , Oct </Date>
          </Circle>

          <Card>
            <Details>
              <Title> COLOUR DAY </Title> <hr />
              <Text>
                bla bla bla bla jmgrbkgjkdbsunkbhseefkseekfsebnhkeb
                cjrmdhbirnkubrgnhkr kljkhlmnlgbj
              </Text>
              <ViewImage>
                <Image>
                  {" "}
                  <a href=""> Previous Images > </a>{" "}
                </Image>
              </ViewImage>
              <Flex justifyBetween>
                <Donate>Donate</Donate>
                <Donate>Calendar</Donate>
              </Flex>
            </Details>
          </Card>
        </Flex>
      </Contain>
      <br />
      <Button>
        <Github> See More </Github>{" "}
      </Button>
    </Div>
  )
}
