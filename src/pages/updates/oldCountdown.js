import React, { Component } from "react"
import Flex, { FlexItem } from "styled-flex-component"
import styled from "styled-components"
import { media } from "../../media_style"

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline)
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }
  leading0(num) {
    return num < 10 ? "0" + num : num
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date())
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    } else {
      const seconds = Math.floor((time / 1000) % 60)
      const minutes = Math.floor((time / 1000 / 60) % 60)
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
      const days = Math.floor(time / (1000 * 60 * 60 * 24))
      this.setState({ days, hours, minutes, seconds })
    }
  }
  render() {
    const Date = styled.p`
        margin-right : 30px
        font-size : 1.3em
        ${media.tablet`
        margin-right : 25px
        font-size : 1em
        `}
          ${media.phone`
          margin-right : 10px
          font-size : 0.9em
        `} 
        `

    return (
      <Flex>
        <Date>{this.leading0(this.state.days)} Days</Date>

        <Date>{this.leading0(this.state.hours)} Hours</Date>

        <Date>{this.leading0(this.state.minutes)} Minutes</Date>

        <Date>{this.leading0(this.state.seconds)} Seconds</Date>
      </Flex>
    )
  }
}

export default Clock
