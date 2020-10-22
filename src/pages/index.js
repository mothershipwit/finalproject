import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Carousel from "react-bootstrap/Carousel"
import { graphql } from "gatsby"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function Home({ data }) {
  return (
    <>
      <Layout>
        <Helmet>
          <title>Witni's Resume Portfolio</title>
          <meta
            name="description"
            content="Custom Art, design, Photography and Web Development, as well as some yummy food."
          ></meta>
        </Helmet>
        <div className="container2">
          <Card>
            <Card.Header as="h5">Hello</Card.Header>
            <Card.Body>
              <Card.Title>
                {" "}
                <h1 class="animate__animated animate__bounce">
                  I'm Witni Whittle
                </h1>
              </Card.Title>
              <Card.Text>I'm</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <br></br>

        <div className="container3">
          <h5>My name is Witni and I love all things Art and Food related.</h5>
        </div>

        <br></br>
        <div className="container">
          <div class="row">
            <div class="col-14">
              <div>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/img/paintings.jpg"
                      alt="First slide"
                    />

                    <div className="container4">
                      <div class="col-20">
                        <h3>Custom Painted Art</h3>
                        <p2>
                          I create custom, hand painted art designs from your
                          ideas or pictures!
                        </p2>
                      </div>
                    </div>
                    <br></br>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/img/bowie3.jpg"
                      alt="Third slide"
                    />
                    <div className="container4">
                      <div class="col-20"></div>
                      <h3>Photography</h3>

                      <div container>
                        <p2>
                          Capture your sweetest moments with heart felt
                          photography
                        </p2>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/img/hair.jpg"
                      alt="Third slide"
                    />
                    <div className="container4">
                      <div class="col-20"></div>
                      <h3>Hair Design</h3>
                      <p2>
                        I have been a licensed, professional Cosemtologist
                        specializing in Color for over 12 years.
                      </p2>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>

          <br></br>

          <div container>
            <div className="row">
              {data.allContentfulPortfolio.nodes.map((node, index) => (
                <div className="col-md-4">
                  <div className="card mb-4 box-shadow">
                    <img
                      className="card-img-top"
                      src={node.image.file.url}
                      alt={node.name}
                      data-holder-rendered="true"
                    />
                    <div className="card-body">
                      <p className="card-text">{node.name}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <a
                            href={node.name}
                            className="btn btn-sm btn-outline-primary"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <i class="fa fa-github" aria-hidden="true"></i>
        </div>
      </Layout>
    </>
  )
}
export const query = graphql`
  query MyQuery2 {
    allContentfulPortfolio {
      nodes {
        name
        description {
          description
        }
        image {
          file {
            url
          }
        }
      }
    }
  }
`
