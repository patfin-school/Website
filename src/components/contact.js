import React from "react"
import "semantic-ui-css/semantic.min.css"
import { Container, Grid } from "semantic-ui-react"
import styled from "styled-components"
import { media } from "../media_style"

const Div = styled.div`
  ${media.tablet`
height : 75vh
`}
  ${media.phone`
  height: 77vh
`}
height : 80vh
`

const Contact = () => (
  <Div>
    <Container style={{ paddingTop: "20px" }}>
      <Grid style={{ padding: "20px" }} centered columns={1}>
        <Grid.Column
          style={{
            border: "1px solid #e6ecf8",
            borderRadius: "10px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <h4 style={{ textAlign: "center", color: "#8c43ff" }}>Feedback</h4>
          <form
            name="Contact Form"
            data-netlify="true"
            action="/success"
            method="POST"
            data-netlify-honeypot="bot-field"
            style={{ fontSize: "1.25rem", marginTop: "20px" }}
          >
            <input type="hidden" name="form-name" value="Contact Form" />
            <p>
              <label>Your Name</label>
            </p>
            <p>
              <input
                style={{
                  border: "1px solid #e6ecf8",
                  borderRadius: "5px",
                  width: "100%",
                  height: "50px",
                }}
                type="text"
                name="name"
              />
            </p>
            <p>
              <label>Your Email</label>
            </p>
            <p>
              <input
                style={{
                  border: "1px solid #e6ecf8",
                  borderRadius: "5px",
                  width: "100%",
                  height: "50px",
                }}
                type="email"
                name="email"
              />
            </p>
            <p>
              <label>Message</label>
            </p>
            <p>
              <textarea
                style={{
                  border: "1px solid #e6ecf8",
                  borderRadius: "5px",
                  width: "100%",
                  maxWidth: "100%",
                  minHeight: "100px",
                }}
                type="text"
                name="message"
              />
            </p>
            <div data-netlify-recaptcha="true" />
            <p style={{ textAlign: "center" }}>
              <button
                style={{
                  border: "1px solid #8c43ff",
                  color: "#8c43ff",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  padding: "10px 20px",
                }}
                type="submit"
              >
                Send
              </button>
            </p>
          </form>
        </Grid.Column>
      </Grid>
    </Container>
  </Div>
)

export default Contact
