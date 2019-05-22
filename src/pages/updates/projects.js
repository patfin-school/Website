import React, { Component } from "react"
import styled from "styled-components"
import { media } from "../../media_style"
import Flex, { FlexItem } from "styled-flex-component"
import { Carousel, Card } from "react-bootstrap"

const Header = styled.h3`
  text-align: center;
  font-weight: bold;
  color: white;
  padding-top: 30px;
`

const Div = styled.div`
  background-color: #2c3e50;
  width: 100%;
  height: 120vh;
  ${media.tablet`
    height : 120vh
  `}
  ${media.phone`
    height : 92vh
  `}
`

const Text = styled.p`
  ${media.tablet`
font-size : 1.3em
`}
  ${media.phone`
font-size : 1.1em
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
border-radius: 3px;
  font-size : 1.1em
  height : 55px
`}
  ${media.phone`
  border-radius: 3px;
  font-size : 0.9em
  height : 65px
`}
  background: transparent;
  border-radius: 3px;
  border: 1.5px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size : 1em
  width : 75%
  height : 70px
  margin-left : 10%
  margin-top : 12%
`

const Project = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1.5px solid palevioletred;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size : 0.9em
  width : 60% 
  height : 60px
  margin-left : 20%
  margin-top : 5%
  ${media.tablet`
    border-radius: 3px;
    font-size : 1.1em
    height : 55px
  `}
    ${media.phone`
    border-radius: 3px;
    font-size : 1em
    height : 55px
  `}
`

const Contain = styled.div`
  width: 50%;
  padding-top: 25%;
  margin-left: 2%;
  margin-right: 2%;
  ${media.tablet`
  padding-top: 25%;
`}
  ${media.phone`
padding-top: 30%;
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
  margin-top : 40px
  margin-bottom :40px
  color: #212529;
  text-align: right
  ${media.tablet`
  font-size : 1.3em
`}
  ${media.phone`
  font-size : 1.3em
`}
`

const Slider = styled.div`
width : 100%
height : 350px
padding-left : 5px
padding-top : 1%
padding-right : 30px 
${media.tablet`
padding-top : 3%
padding-right : 20px 
`}
${media.phone`
padding-top : 2%
padding-right : 10px 
`}
`

const Note = styled.p`
  color : white
  padding-left : 30px
  font-size : 0.8em
`

const StyledCard = styled(Card)`
  width:  100%  
  height: 100vh  
  background-color:  white;
  border-radius:  20px;
  ${media.tablet`
  width:  100%  
  height: 80vh  
  background-color:  white;
  border-radius:  20px;
`}
  ${media.phone`
  width:  100%  
  height: 75vh  
  background-color:  white;
  border-radius:  20px;
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
    const { index, direction } = this.state
    return (
      <div>
        <Div>
          <Header> RECENT STORIES </Header> <hr />
          <Note />
          <Flex>
            <Contain>
              <Text>
                {" "}
                All school events and activities pened down for your viewing.{" "}
              </Text>
              <Github> VIEW BLOG</Github>
            </Contain>
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
                      <Date >
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
          </Flex>
        </Div>
      </div>
    )
  }
}
