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

const Input = styled.input`
  padding: 1em 5em;
  width: 40em;
  border-radius: 5px;
  background: #f2f5ff;
  height: auto;
  padding-left: 15px;
  font-size: 1.1em;
  border: 1px solid #0e2f5a;
`

const Title = styled.h2`
  text-align: center;
  font-weight:${props => (props.small ? "lighter" : "bold")};
  padding-top: 1%;
  font-size: ${props => (props.small ? "1.5em" : null)}
  color: ${props => (props.black ? "#0e2f5a" : "white")};
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

export {
  Title,
  Items,
  Text,
  Body,
  Input,
  Motto,
  BannerBody,
  Button,
  HeaderBody,
}
