import React from "react"
import styled from "styled-components"
import Img from "react-image"
import { media } from "../media_style"
import { Grid } from "semantic-ui-react"
import posed from "react-pose"
import SplitText from "react-pose-text"

class banner extends React.Component {
  render() {
    const Banner = styled(Img)`
      width: 70vw;
      height: 60vh;
      object-fit: "cover";
      @media (max-width: 800px min-width: 500px) {
        padding-right: 20%;
      }
      ${media.phone`
			height: 30vh;
			margin-left: 25%;
			text-align : center 
    `}
      ${media.tablet`
    height: 42vh;
    width: 100%;
    margin-left: 25%;
    text-align : center 
  `}
    `

    // testing media queries with this div ..... PHONE_SIZE NOT WORKING YET !!!!!!
    const Container = styled.div`
			margin-left: 5%;
			padding-top: 10%;
			margin-right: 15%;
			color: #323a56;
			${media.desktop`
				margin-left: 4%;
				padding-top: 2%;
				margin-right: 10%;
			`}
			${media.tablet`
				margin-left: 5%;
				margin-right: 15%;
			`}
			${media.phone`
		 
			text-align : center 
		`}
		`

    const Title = styled.h3`
			width: 75%;
			font-weight: bold; 
			${media.desktop`
			width: 77%;
			font-weight: bold; 
			font-size: 2.5em; 
			`}
			${media.tablet`
			width: 90%
		`}
		${media.phone`
		font-size: 1.7em; 
		width: 100%;
	`}
		`

    const Description = styled.p`
			color: #0e2f5a;	
			${media.desktop`
			font-size: 1.2em; 
			`}
			${media.tablet`
			font-size: 1.1em; 
		`}
		${media.phone`
		font-size: 0.8em; 
	`}
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
    })

    const Sidebar = posed.div({
      enter: {
        x: "0%",
        beforeChildren: true,
        staggerChildren: 50,
      },
    })

    const charPoses = {
      exit: { opacity: 0 },
      enter: { opacity: 1 },
    }

    const Button = styled(Box)`
			background: #0748a8;
			text-align: center;
			border-radius: 5px;
			height: 64px;
			width: 42%;
			border: 0.5px solid palevioletred;
			color: white;
			margin: 0 1em;
			padding: 0.25em 1em;
			font-size: 0.95em;
			${media.phone`
			width: 35%;
			margin-top: 10%; 
			height: 55px;
			width: 37%;
			`}
			${media.desktop`
			margin-top: 3%;
    `}
    ${media.tablet`
    width: 60%;
    font-size : 1.2em
    margin-top: 4%;
    `}
		`

    const Btns = styled.div`
      ${media.phone`
		padding-left: 5%;
    `}
    ${media.tablet`
      margin-left : 15%    
    `
    }
    `

    const StrtButton = styled(Box)`
      background: #0078ff;
      text-align: center;
      border-radius: 5px;
      height: 64px;
      width: 42%;
      border: 1px solid palevioletred;
      color: white;
      margin: 0 1em;
      padding: 0.25em 1em;
      font-size: 0.87em;
      ${media.phone`
			width: 45%;
			margin-top: 1%;
      `}
      ${media.tablet`
      width: 60%;
      font-size : 1.2em
			margin-top: 1%;
			`}
    `

    const Div = styled.div`
      width: 100%;
      padding-top: 7%;
      height: 70vh;
      background: #f0f0d0;
      max-width: 100%;
      @media (max-width: 770px) {
        height: 110vh;
      }

      @media (max-width: 450px) {
        height: 100vh;
      }
    `

    return (
      <Div>
        <Grid stackable celled="internally" columns="equal">
          <Grid.Column>
            <Container>
              <Sidebar initialPose="exit" pose="enter">
                <Title>
                  <SplitText charPoses={charPoses}>
                    Raising future ambassadors .
                  </SplitText>{" "}
                </Title>
              </Sidebar>
              <Description>
                We are aimed at transforming our young ones into future great
                leaders.
              </Description>
              <Btns>
                <StrtButton> Learn More </StrtButton>
                <Button> Gallery </Button>
              </Btns>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <div style={{ marginRight: "25%" }}>
              <Banner
                unloader={<p> loading ... </p>}
                loader={<p> not loading ... </p>}
                src={[
                  "https://res.cloudinary.com/dkfptto8m/image/upload/v1558522007/Patfin/banner.png",
                ]}
              />
            </div>
          </Grid.Column>
        </Grid>
      </Div>
    )
  }
}

export default banner
