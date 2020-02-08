import React from "react"
import "semantic-ui-css/semantic.min.css"
import { Container, Reveal, Grid, Image, Button } from "semantic-ui-react"

const Images = () => {
  return (
    <div>
      <Container style={{ paddingTop: "20px", fontSize: "1rem" }}>
        <div
          style={{
            paddingTop: "100px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.7rem", fontWeight: "bold" }}>
            {" "}
            Our little Gallery
          </h2>
          <h4 style={{ color: "black" }}>
            {" "}
            Here is a preview of some the images from recently concluded
            academic events .
          </h4>{" "}
          <hr />
        </div>
        <Grid stackable style={{ marginTop: "3px" }} divided="vertically">
          <Grid.Row columns={3}>
            <Grid.Column>
              <Reveal
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#022b69",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                animated="move up"
              >
                <Reveal.Content visible>
                  <Image
                    style={{ margin: "0" }}
                    src={
                      "https://res.cloudinary.com/dkfptto8m/image/upload/v1558519516/Patfin/IMG_20180221_090656.jpg"
                    }
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <div
                    style={{
                      height: "200px",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        padding: "10px",
                        paddingTop: "50%",
                        color: "white",
                        fontSize: "2.2rem",
                      }}
                    >
                      Sports Day
                    </p>
                    <Button
                      style={{
                        fontSize: "1.25rem",
                        borderRadius: "1rem",
                      }}
                      inverted
                      target="_blank"
                      rel="noopener noreferrer"
                      href=""
                    >
                      View More
                    </Button>
                  </div>
                </Reveal.Content>
              </Reveal>
            </Grid.Column>{" "}
            <Grid.Column>
              <Reveal
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#022b69",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                animated="move up"
              >
                <Reveal.Content visible>
                  <Image
                    style={{ margin: "0" }}
                    src={
                      "https://res.cloudinary.com/dkfptto8m/image/upload/v1558519546/Patfin/IMG_20180221_095629.jpg"
                    }
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <div
                    style={{
                      height: "200px",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        padding: "10px",
                        paddingTop: "25%",
                        color: "white",
                        fontSize: "2.2rem",
                      }}
                    >
                      Colour Day
                    </p>
                    <Button
                      style={{
                        fontSize: "1.25rem",
                        borderRadius: "1rem",
                      }}
                      inverted
                      target="_blank"
                      rel="noopener noreferrer"
                      href=""
                    >
                      View More
                    </Button>
                  </div>
                </Reveal.Content>
              </Reveal>
            </Grid.Column>{" "}
            <Grid.Column>
              <Reveal
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#022b69",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                animated="move up"
              >
                <Reveal.Content visible>
                  <Image
                    style={{ margin: "0" }}
                    src={
                      "https://res.cloudinary.com/dkfptto8m/image/upload/v1558519515/Patfin/IMG_20180221_090435.jpg"
                    }
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <div
                    style={{
                      height: "200px",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        padding: "10px",
                        paddingTop: "50%",
                        color: "white",
                        fontSize: "2.2rem",
                      }}
                    >
                      Sports Day
                    </p>
                    <Button
                      style={{
                        fontSize: "1.25rem",
                        borderRadius: "1rem",
                      }}
                      inverted
                      target="_blank"
                      rel="noopener noreferrer"
                      href=""
                    >
                      View More
                    </Button>
                  </div>
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tsettle44"
            inverted
            color="violet"
            style={{ fontSize: "1.25rem", borderRadius: "10px" }}
          >
            View Gallery
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Images
