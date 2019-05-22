import { Link } from 'gatsby'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { Container, Button } from 'semantic-ui-react'
import styled from 'styled-components'


const Header = () => (
  <div
    style={{
      background: `#172A3B`,
    }}
  >
    <Container
      style={{
        padding: `1.65rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <span role="img" aria-label="peace">
             
          </span>{' '}
          Patfin
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/blog/">
          <Button
            style={{
              float: 'right',
              fontSize: '1.25rem',
              borderRadius: '1rem',
            }}
            
            inverted
          >
            Blog
          </Button>
        </Link>
      </h1>
    </Container>
  </div>
)
 
export default Header
