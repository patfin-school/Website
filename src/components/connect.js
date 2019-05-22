import React from "react"
import styled from "styled-components"
import { Icon } from "semantic-ui-react"
import Flex from "styled-flex-component"
import Link from "gatsby"

const Div = styled.div`
  margin-top: 5%
  margin-left: 15%
  margin-bottom: 5%
  text-align: center
`

const Text = styled.p`
margin-top: 5%
text-align: center
font-size: 1.4em
`

export default function connect() {
  return (
    <>
      <Text> Connect with us </Text> <hr />
      <Div>
        <Flex>
  
            <Icon name="instagram" size="huge" link color="green"  /> 
            
            <Icon name="facebook" size="huge"  link  color="blue"   />
            
            <Icon name="google plus square" link  size="huge" color="red"  /> 
            
            <Icon name="twitter" size="huge"  link color="blue"   />
        </Flex>
      </Div>
    </>
  )
}
