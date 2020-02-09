import styled from "styled-components"
import media from "styled-media-query"

const Text = styled.p`
  font-size: ${props => (props.small ? " 1.15em" : "1.4em")};
  text-align: ${props => (props.center ? "center" : null)};
  color: ${props => (props.white ? "#fff" : null)};
  ${media.lessThan("medium")`
  font-size: ${props => (props.small ? " 1.15em" : "1.3em")};
  `};
  ${media.lessThan("small")`
  font-size: ${props => (props.small ? " 1.15em" : "1.2em")};
  `};
`

const Body = styled.div`
  padding-left: ${props => (props.banner ? "12em" : "8em")};
  padding-right: ${props => (props.banner ? "12em" : "8em")};
  background: ${props => (props.banner ? "transparent" : null)};
  color: ${props => (props.banner ? "#401364" : null)};
  ${media.lessThan("large")`
  padding-left: 3em;
  padding-right: 3em;
  `};
  ${media.lessThan("medium")`
  padding-left: 1.5em;
  padding-right: 1.5em;
  `};
  ${media.lessThan("small")`
  padding-left: 0.4em;
  padding-right: 0.4em;
  `};
`

const Button = styled.button`
  background: #401364;
  text-align: right;
  border-radius: 5px;
  height: 50px;
  color: #fff;
  border: 0px;
  outline: 0px;
  margin: 0 1em;
  padding: 0.5em 3em;
  font-size: 1.2em;
  &:hover {
    color: #401364;
    background: transparent;
    border: 1px solid #ff21c1;
  }
  ${media.lessThan("medium")`
      margin: 0 0.25em;
      padding: 0.50em 2em;
      height: 45px;
      font-size: 1.1em;
  `};
`

const Motto = styled.h1`
  font-size: 3em;
  font-weight: bold;
  ${media.lessThan("medium")`
  font-size: 2.3em;
  `};
  ${media.lessThan("small")`
  font-size:1.8em;
  `};
`

const BannerBody = styled.div`
  padding: 2em;
  text-align: center;
  background: #f2f5ff;
  color: #0e2f5a;
  ${media.lessThan("medium")`
  padding: 1.5em;
  `};
  ${media.lessThan("small")`
  padding: 1em;
  `};
`

const HeaderBody = styled.nav`
  padding: 0.7em 1em;
  background-color: #f2f5ff;
  box-shadow: 0px 3px 4px grey;
  h2 {
    font-size: 1.8em;
    font-weight: bold;
    margin-left: 20px;
    color: #0e2f5a;
  }
  h3 {
    color: #0e2f5a;
    font-size: 1.5em;
    font-weight: bold;
    margin-left: 10px;
  }
  a {
    margin: 0.3em;
    font-size: 1.2em;
  }
`

const Input = styled.input`
  padding: 1em 5em;
  width: 40em;
  border-radius: 5px;
  background: #f2f5ff;
  height: auto;
  padding-left: 15px;
  font-size: 1.1em;
  border: 1px solid #0e2f5a;
  ${media.lessThan("medium")`
  font-size: 1.1em;
  padding: 0.7em 4em;
  width : 28em;
  `};
  ${media.lessThan("small")`
  font-size: 1em;
  width : 27em;
  `};
`

const Title = styled.h2`
  text-align: center;
  font-weight: ${props => (props.small ? "lighter" : "bold")};
  padding-top: 1%;
  font-size: ${props => (props.small ? "1.8em" : null)};
  color: ${props => (props.black ? "#0e2f5a" : "white")};
  ${media.lessThan("medium")`
  font-size: ${props => (props.small ? "1.5em" : null)};
  `};
  ${media.lessThan("small")`
  font-size: ${props => (props.small ? "1.4em" : null)};
  `};
`

const autoGrid = (minColumnWidth = 200, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
})

const Items = styled.div({
  ...autoGrid(200, 20),
  padding: "1em",
  marginLeft: "0.5em",
})

const BlogItems = styled.div({
  ...autoGrid(250, 70),
  padding: "1em",
  marginLeft: "0.5em",
})

const SummaryBody = styled.div`
  padding: 1em;
  background: #f2f5ff;
`

const StyledCard = styled.div`
  width: 100%;
  box-shadow: 0px 4px 5px grey;
  padding-bottom: 10px;
  background-color: white;
  border-radius: 10px;
  padding: ${props => (props.unpadded ? null : "1.3em")};
  h6 {
    font-size: 1.2em;
    font-weight: bold;
    color: #0e2f5a;
  }
`

const Contain = styled.div`
  padding-top: 15px;
  padding: 1em;
  h5 {
    font-weight: bold;
    color: #0e2f5a;
    margin-right: 10px;
  }
`

const FooterBody = styled.footer`
  background-color: #5919ab;
  width: 100%;
`

const FooterSection = styled.div`
  margin-top: 1em;
  padding-top: 0.5em;
  text-align: center;
  padding: 0.7%;
  background-color: #361f94;
  font-size: 0.8em;
  color: #fff;
`

const Hover = styled.div``

const ActivitiesItems = styled.div({
  ...autoGrid(250, 70),
  padding: "0.5em",
  marginLeft: "0.5em",
})

const Links = styled.p``

export {
  ActivitiesItems,
  Links,
  FooterSection,
  Hover,
  FooterBody,
  Contain,
  BlogItems,
  Title,
  StyledCard,
  Items,
  Text,
  Body,
  Input,
  Motto,
  BannerBody,
  SummaryBody,
  Button,
  HeaderBody,
}