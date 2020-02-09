import styled from "styled-components"
import media from "styled-media-query"

const Text = styled.p`
  font-size: 1.4em;
  text-align: center;
`

const Body = styled.div`
  padding-left: ${props => (props.banner ? "12em" : "8em")};
  padding-right: ${props => (props.banner ? "12em" : "8em")};
  background: ${props => (props.banner ? "transparent" : null)};
  color: ${props => (props.banner ? "#401364" : null)};
  ${media.lessThan("large")`
  padding-left: 4em;
  padding-right: 4em;
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
  background: "#401364";
  text-align: right;
  border-radius: 5px;
  height: 50px;
  border: 1px solid #0e2f5a;
  color: #fff;
  margin: 0 1em;
  padding: 0.5em 2em;
  font-size: 1.2em;
  &:hover {
    color: #401364;
    background: transparent;
    border: 1px solid #ff21c1;
  }
  ${media.lessThan("medium")`
      margin: 0 0.25em;
      padding: 0.25em 1.2em;
      height: 30px;
  `};
`

const Motto = styled.h1`
  font-size: 3em;
`

const BannerBody = styled.div`
  padding: 2em;
  text-align: center;
  background: #f2f5ff;
  color: #0e2f5a;
`

const HeaderBody = styled.nav`
  padding: 0.7em 1em;
  background-color: #f2f5ff;
  box-shadow: 0px 3px 4px grey;
  h2 {
    font-size: 1.8em;
    color: #0e2f5a;
    font-weight: bold;
    margin-left: 20px;
  }
  a {
    margin: 0.3em;
    font-size: 1.2em;
  }
`

export { Text, Body, Motto, BannerBody, Button, HeaderBody }
