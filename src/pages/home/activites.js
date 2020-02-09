import React from "react"
import Flex from "styled-flex-component"

import Features from "../../assets/svg/features.svg"

import {
  ActivitiesItems,
  Text,
  Button,
  StyledCard,
  Title,
  Contain,
} from "../../styles/style"

const Data = [
  {
    id: 1,
    name: "Colour Day",
    summary:
      "  Colour are essential for life. Come join us join us join us join us join us join us join us join us",
    date: "12-02-2020",
  },
  {
    id: 2,
    name: "Career Day",
    summary:
      "  Colour are essential for life. Come join us join us join us join us join us join us join us join us",
    date: "12-02-2020",
  },
  {
    id: 3,
    name: "World Book Day",
    summary:
      "  Colour are essential for life. Come join us join us join us join us join us join us join us join us",
    date: "12-02-2020",
  },
]

const Activities = () => {
  return (
    <Contain>
      <br />

      <Title black>Upcoming Events </Title>
      <hr />

      <ActivitiesItems>
        {Data.map(({ id, name, date, summary }) => {
          return (
            <StyledCard key={id}>
              <br />
              <Flex>
                <div style={{ width: "19em" }}>
                  <Flex column>
                    <Flex justifyCenter>
                      <img
                        src={Features}
                        alt="illustrattion"
                        style={{ maxWidth: "5em" }}
                      />
                    </Flex>
                    <h6> {date} </h6>
                  </Flex>
                </div>
                <div>
                  <Title small black>
                    {name}
                  </Title>
                  <Text small> {summary} </Text>
                </div>
              </Flex>
            </StyledCard>
          )
        })}
      </ActivitiesItems>
      <br />

      <Flex justifyCenter>
        <Button> Get Notified </Button>
      </Flex>
    </Contain>
  )
}

export default Activities
