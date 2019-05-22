import React, { Component } from "react"
import styled from "styled-components"
import { media } from "../media_style"

const Div = styled.div`
    padding-top : 10px 
    padding-bottom : 10px 
`

const Text = styled.p`
  font-size: 1.1em;
  color: #212529;
  ${media.tablet`
  font-size: 1em;
  `}
  ${media.phone`
    font-size: 0.75em;
  `}
`

const EndP = styled.p`
  font-size: 0.9em;
  color: grey;
`
 
const Title = styled.h4`
  text-align: center;
  font-weight: bold;
`

const Github = styled.button`
background: transparent;
border-radius: 3px;
border: 1.5px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
font-size : 0.9em
width : 40%
height : 60px
margin-left : 30%
font-weight : bold
`

export default class about extends Component {
  state = {
    read: false,
  }

  render() {
    const Press = () => {
      this.setState({ read: true })
    }

    // ============
    if (this.state.read === false) {
      return (
        <Div> 
          <br /> <br />
          <Text>
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            </Text>
          <br /> <br />
        </Div>
      )
    } else {
      return (
        <Div>
          <Title> ABOUT </Title> <hr />
          <Text>
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School DescriptionPatfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description
          </Text>
          <Text>
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School DescriptionPatfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description
          </Text>
          <Text>
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School DescriptionPatfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description Patfin School Description Patfin School
            Description Patfin School Description Patfin School Description
            Patfin School Description
          </Text>
          <br />
          <br />
        </Div>
      )
    }
  }
}
