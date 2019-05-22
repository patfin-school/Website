import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Carousel, Card } from "react-bootstrap"
import { media } from "../media_style"

const Div = styled.div`
  ${media.tablet`
height : 73vh
`}
  ${media.phone`
height : 52vh
`}
width : 100%
height : 90vh
`

const Image = styled.img`
  ${media.tablet`
height : 65vh
`}
  ${media.phone`
height : 45vh
`}
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
  width : 40%
  height : 60px
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
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
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

        <Carousel.Item>
          <Image
            variant="top"
            src={
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
            }
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            variant="top"
            src={
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
            }
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            variant="top"
            src={
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1557942816/Mongodb%20hackathon%20project/2017-chevrolet-bolt-ev.jpg"
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
    <br />
  </Div>
)

export default IndexPage
