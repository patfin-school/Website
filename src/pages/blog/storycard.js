import React from "react"
import { Card } from "react-bootstrap"
import Flex from "styled-flex-component"
import { FiArrowRight, FiClock, FiEye } from "react-icons/fi"
import { Link } from "gatsby"

import { Title, Contain, Text, Hover, StyledCard } from "../../styles/style"

const StoryCard = props => {
  return (
    <StyledCard unpadded key={props.id}>
      <Card.Img fluid variant="top" src={props.imgUri} />
      <Title small black>
        {props.title}
      </Title>
      <Text center small>
        {props.summary}
      </Text>

      <Contain>
        <Flex justifyBetween>
          <Flex>
            <Hover style={{ paddingRight: "7px" }}>
              <FiClock style={{ fontSize: "1.7em", color: "grey" }} />
            </Hover>
            <Text>{props.date}</Text>
          </Flex>

          <Flex>
            <Hover style={{ paddingRight: "7px" }}>
              <FiEye style={{ fontSize: "1.7em", color: "grey" }} />
            </Hover>
            <Text>11</Text>
          </Flex>
        </Flex>

        <Flex justifyCenter>
          <Link to="/">
            <Flex>
              <h5> Read More</h5>

              <FiArrowRight style={{ fontSize: "1.7em" }} />
            </Flex>
          </Link>
        </Flex>
      </Contain>
    </StyledCard>
  )
}

export default StoryCard
