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
  height: 100vh;
`

const Text = styled.h5`
  text-align: center;
  color: white;
`

const Intro = styled.p`
padding-left : 20px 
color: white;
`

const Title = styled.h5`
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
  font-size : 1em
  width : 75%
  height : 70px
  margin-left : 10%
  margin-top : 2%
  font-weight : bold
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
  margin-left : 23%
  font-weight : bold
`

const Contain = styled.div`
  width: 50%;
  padding-top: 30%;
  margin-left: 3%;
  margin-right: 3%;
`

const Description = styled.p`
  font-size : 0.85em
  text-align: center;
  color: #212529;
`

const Slider = styled.div`
width : 100%
height : 350px
padding-left : 10px
padding-top : 5%
padding-right : 10px
`

const Note = styled.p`
  color : white
  padding-left : 30px
  font-size : 0.8em
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
          <Note>
        </Note>
          <Flex>
            <Contain>
              <Text> All school events and activities pened down for your viewing. </Text>
              <Github> VIEW BLOG</Github>
            </Contain>
            <Slider>
              <Carousel>
                <Carousel.Item>
                  <Card style={{ width: "100%",  minWidth: ' 70% ',    height: "75vh" }}>
                    <Card.Img
                      variant="top"
                      src={
                        "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
                      }
                    />
                    <Title> Our Trip to AIT  </Title>
                    <Card.Body>
                      <Description>
                        Mobile Restaurant App for Students to search and rate
                        meals within restaurants and also for restaurants owners
                        to create searchable digital Restaurants
                      </Description>
                      <Description>
                        <b> Date: </b> 01/01/01
                      </Description>
                      <Project> VIEW STORY </Project>
                    </Card.Body>
                  </Card>
                  ;
                </Carousel.Item>

                <Carousel.Item>
                <Card style={{ width: " 100%", height: "75vh" }}>
                <Card.Img
                  variant="top"
                  src={
                    "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
                  }
                />
                <Title> Our Trip to AIT  </Title>
                <Card.Body>
                  <Description>
                    Mobile Restaurant App for Students to search and rate
                    meals within restaurants and also for restaurants owners
                    to create searchable digital Restaurants
                  </Description>
                  <Description>
                    <b> Date: </b> 01/01/01
                  </Description>
                  <Project> VIEW STORY </Project>
                </Card.Body>
              </Card>
                </Carousel.Item>

                <Carousel.Item>
                <Card style={{ width: " 100%", height: "75vh" }}>
                <Card.Img
                  variant="top"
                  src={
                    "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
                  }
                />
                <Title> Our Trip to AIT  </Title>
                <Card.Body>
                  <Description>
                    Mobile Restaurant App for Students to search and rate
                    meals within restaurants and also for restaurants owners
                    to create searchable digital Restaurants
                  </Description>
                  <Description>
                    <b> Date: </b> 01/01/01
                  </Description>
                  <Project> VIEW STORY </Project>
                </Card.Body>
              </Card>
                </Carousel.Item>

                <Carousel.Item>
                <Card style={{ width: " 100%", height: "75vh" }}>
                <Card.Img
                  variant="top"
                  src={
                    "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
                  }
                />
                <Title> Our Trip to AIT  </Title>
                <Card.Body>
                  <Description>
                    Mobile Restaurant App for Students to search and rate
                    meals within restaurants and also for restaurants owners
                    to create searchable digital Restaurants
                  </Description>
                  <Description>
                    <b> Date: </b> 01/01/01
                  </Description>
                  <Project> VIEW STORY </Project>
                </Card.Body>
              </Card>
                </Carousel.Item>
              </Carousel>
            </Slider>
          </Flex>
        </Div>
     
      </div>
    )
  }
}
