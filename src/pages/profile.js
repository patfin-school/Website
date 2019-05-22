import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Carousel, Card } from "react-bootstrap"
import { media } from "../media_style"

const Div = styled.div`
  ${media.tablet`
height : 73vh
color : #4682b4

`}
  ${media.phone`
height : 52vh
`}
width : 100%
height : 90vh
color : #4682b4
`

const Image = styled.img`
  ${media.tablet`
height : 65vh
`}
  ${media.phone`
height : 40vh
`}
background-size : cover
width : 100%
height : 85vh
`


const Button = styled.div`
  text-align: center;
  padding-bottom: 10px;
`

const Github = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 1px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size : 0.9em
  width : 30%
  height : 42px
  font-weight : bold
`

const IndexPage = () => (
  <Div>
    <Card>
      <Carousel>
        <Carousel.Item>
          <Image
            variant="top"
            src={
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1558522007/Patfin/banner.png"
            }
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            variant="top"
            src={
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1558519546/Patfin/IMG_20180221_095629.jpg"
            }
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            variant="top"
            src={
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1558519675/Patfin/IMG_20180305_080947.jpg"
            }
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            variant="top"
            src={
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1558519514/Patfin/IMG_20180221_090011.jpg"
            }
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            variant="top"
            src={
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1558468750/Patfin/IMG_20180607_092307.jpg"
            }
          />
        </Carousel.Item>
      </Carousel>{" "}
      <Link to="/">
        <Button>
          <Github> View Gallery </Github>{" "}
        </Button>
      </Link>
    </Card>{" "}
    
  </Div>
)

export default IndexPage
