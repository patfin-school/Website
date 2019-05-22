import React from "react"
import Link from "gatsby"
import styled from "styled-components"

const Button = styled.button`
  background: transparent;
  border-radius: 7px;
  border: 1.5px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 17px;
`

const Div = styled.div`
background:  #022b69;
  padding-top: 10px;
  color:   white;
`

const Li = styled.li`
display: flex;
padding: 10px 
`
const Nav = () => (
  <Div>
    <nav>
      <ul>
        <div>
          <Li>
            <a>Patfin</a>
          </Li>
        </div>

        <div>
          <a>FAQ</a>

          <Button href="#">Login</Button>
        </div>
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
         
        a {
          color: #123abc;
          text-decoration: none;
          font-size: 17px;
        }
      `}</style>
    </nav>
  </Div>
)

export default Nav
