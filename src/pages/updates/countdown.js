import React, { Component } from "react"
import Flex, { FlexItem } from "styled-flex-component"
import styled from "styled-components"
import { media } from "../../media_style"

class Clock extends Component {
  render() {
    const Date = styled.p`
        text-align : center
        font-size : 1.3em
        font-weight : bold
        color : white
        ${media.tablet`
        font-size : 1.3em
        `}
          ${media.phone`
          font-size : 1.1em
        `} 
        `

    const Div = styled.div`
        width : 97px
        height: 97px
        padding-top: 5% 
        margin-left: 70% 
        border-radius: 70px 
         background : #4682b4
        ${media.tablet`
        font-size : 1em
        `}
          ${media.phone`
          width : 70px
          height: 70px
          padding-top: 8% 
          margin-left: 67% 
          border-radius: 70px 
        `} 
        `

    return (
      <Div>
        <Date> {this.props.date} </Date>
      </Div>
    )
  }
}

export default Clock
