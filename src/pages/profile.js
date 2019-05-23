import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Carousel, Card } from "react-bootstrap"
import { media } from "../media_style"

const Div = styled.div`
  ${media.tablet`
height : 77vh
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
height : 53vh
max-width : 80%
margin-left : 10%
`}
  ${media.phone`
height : 37vh 
max-width : 100%
margin-left : 0%
`}
background-size : cover
width : 100%
max-width : 77%
margin-left : 10%
padding-top : 5%
height : 75vh
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

const StyledCard = styled(Card)`
background: linear-gradient(to bottom,#b2eeb4,#1f86b3);
`
 
const IndexPage = () => (
  <Div>
    <StyledCard>
       
          <Image
            variant="top"
            src={
              "https://res.cloudinary.com/dkfptto8m/image/upload/v1558522007/Patfin/banner.png"
            }
          />
 
      <Link to="/">
        <Button>
          <Github> Gallery </Github>{" "}
        </Button>
      </Link>
    </StyledCard> 
    
  </Div>
)

export default IndexPage
