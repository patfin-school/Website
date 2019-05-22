import React, { Component } from "react"
import styled from "styled-components"
import { media } from "../../media_style"
import { Carousel, Card } from "react-bootstrap"
import Flex from 'styled-flex-component'

const Header = styled.h3`
  text-align: center;
  font-weight: bold;
  color: white;
  padding-top: 10px;
`

const Div = styled.div`
  background-color: #2c3e50;
  width: 100%;
  height: 155vh;
  ${media.tablet`
    height : 120vh
  `}
  ${media.phone`
    height : 115vh
  `}
`

const Text = styled.p`
  ${media.tablet`
font-size : 1.2em
`}
  ${media.phone`
font-size : 1em
`}
font-size : 1.5em
text-align: center;
  color: white;
`

const Title = styled.h5`
  text-align: center;
  font-weight: bold;
`

const Github = styled.button`
${media.tablet`
  border-radius: 7px;
  font-size : 1.1em
  height : 40px
`}
  ${media.phone`
  border-radius: 7px;
  font-size : 0.9em
  height : 50px
`}
  background: transparent;
  border-radius: 7px;
  border: 1.5px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size : 1em
  width : 40%
  height : 70px
`

const Buttons = styled.div`
  text-align: center;
`

const Project = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1.5px solid palevioletred;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size : 0.9em
  width : 50% 
  height : 60px
  margin-left : 22%
  margin-top : 5%
  ${media.tablet`
    border-radius: 3px;
    font-size : 1.1em
    height : 55px
  `}
    ${media.phone`
    border-radius: 3px;
    font-size : 1em
    height : 45px
  `}
`

const Description = styled.p`
  font-size : 1.1em
  color: #212529;
  ${media.tablet`
  font-size : 1em
`}
  ${media.phone`
  font-size : 0.9em
`}
`

const Date = styled.p`
  font-size : 1.3em
  margin-top : 15px
  margin-bottom :15px
  color: #212529;
  text-align: right
  ${media.tablet`
  font-size : 1.2em
`}
  ${media.phone`
  font-size : 1em
`}
`

const Slider = styled.div`
width : 90%
height : 270px
margin-top : 5%
margin-right : 5%
margin-left : 10%
${media.tablet`
padding-top : 3%
padding-right : 20px 
`}
${media.phone`
margin-top : 5%
margin-left : 7%
`}
`

const StyledCard = styled(Card)`
  width:  100%  
  height: 115vh  
  padding-right : 20%
  background-color:  white;
  border-radius:  20px;
  ${media.tablet`
  width:  100%  
  height: 92vh  
  background-color:  white;
  border-radius:  20px;
`}
  ${media.phone`
  width:  100%  
  height: 78vh  
  background-color:  white;
  border-radius:  15px;
`}
`

export default class projects extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleSelect = this.handleSelect.bind(this)

    this.state = {
      index: 0,
      direction: null,
    }
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    })
  }

  render() {
    return (
      <div>
        <Div>
          <Header> RECENT STORIES </Header> <hr />
          <Text>
            {" "}
            All school events and activities pened down for your viewing.{" "}
          </Text>
          <Buttons>
            {" "}
            <Github> VIEW BLOG</Github>{" "}
          </Buttons>
          <Slider>
            <Carousel>
              <Carousel.Item>
                <StyledCard>
                  <Card.Img
                    variant="top"
                    src={
                      "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
                    }
                  />
                  <Title> Our Trip to AIT </Title>
                  <Card.Body>
                    <Description>
                      Details on Excursion Details on Excursion Details on
                      Excursion Details on Excursion Details on Excursion
                      Details on Excursion Details on Excursion Details on
                      Excursion Details on Excursion Details on Excursion
                    </Description>
                    <Date>
                      <b> Date: </b> 01/01/01
                    </Date>
                    <Project> Read More </Project>
                  </Card.Body>
                </StyledCard>
                ;
              </Carousel.Item>

              <Carousel.Item>
                <StyledCard>
                  <Card.Img
                    variant="top"
                    src={
                      "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
                    }
                  />
                  <Title> Our Trip to AIT </Title>
                  <Card.Body>
                    <Description>
                      Details on Excursion Details on Excursion Details on
                      Excursion Details on Excursion Details on Excursion
                      Details on Excursion Details on Excursion Details on
                      Excursion Details on Excursion Details on Excursion
                    </Description>
                    <Date>
                      <b> Date: </b> 01/01/01
                    </Date>
                    <Project> Read More </Project>
                  </Card.Body>
                </StyledCard>
              </Carousel.Item>

              <Carousel.Item>
                <StyledCard>
                  <Card.Img
                    variant="top"
                    src={
                      "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
                    }
                  />
                  <Title> Our Trip to AIT </Title>
                  <Card.Body>
                    <Description>
                      Details on Excursion Details on Excursion Details on
                      Excursion Details on Excursion Details on Excursion
                      Details on Excursion Details on Excursion Details on
                      Excursion Details on Excursion Details on Excursion
                    </Description>
                    <Date>
                      <b> Date: </b> 01/01/01
                    </Date>
                    <Project> Read More </Project>
                  </Card.Body>
                </StyledCard>
              </Carousel.Item>

              <Carousel.Item>
                <StyledCard>
                  <Card.Img
                    variant="top"
                    src={
                      "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
                    }
                  />
                  <Title> Our Trip to AIT </Title>
                  <Card.Body>
                    <Description>
                      Details on Excursion Details on Excursion Details on
                      Excursion Details on Excursion Details on Excursion
                      Details on Excursion Details on Excursion Details on
                      Excursion Details on Excursion Details on Excursion
                    </Description>
                    <Date>
                      <b> Date: </b> 01/01/01
                    </Date>
                    <Project> Read More </Project>
                  </Card.Body>
                </StyledCard>
              </Carousel.Item>
            </Carousel>
          </Slider>
        </Div>
      </div>
    )
  }
}
