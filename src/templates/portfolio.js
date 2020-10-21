import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Carousel } from "react-bootstrap"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function Portfolio({ data }) {
  const portfolio = data.contentfulPortfolio

  return (
    <Layout>
      <h2>{portfolio.name}</h2>

      <img
        src={portfolio.image.file.url}
        alt={portfolio.name}
        class="img-thumbnail"
      />
      <p>{portfolio.description.description}</p>
      <div className="container">
        <div class="row">
          <div class="col-16">
            <Carousel>
              {portfolio.gallery.map((node, index) => (
                <Carousel.Item>
                  <img src={node.file.url}></img>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <p>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Copyright. 2020 Witni Whittle.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Click me, too!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Click the Back button to see more of my Portfolio!
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </p>
      <a href="javascript:history.back()">BACK</a>
    </Layout>
  )
}
export const query = graphql`
  query portfolioQuery($slug: String!) {
    contentfulPortfolio(name: { eq: $slug }) {
      name
      description {
        description
      }
      gallery {
        file {
          url
        }
      }
      image {
        file {
          url
        }
      }
    }
  }
`
