import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Button from "react-bootstrap/Button"
import Carousel from "react-bootstrap/Carousel"

export default function Home({ data }) {
  return (
    <>
      <Layout>
        <Helmet>
          <title>Witni's Resume Portfolio</title>
          <meta
            name="description"
            content="Custom Art, design, Photography and Web Development."
          ></meta>
        </Helmet>
        <div>
          <h1 class="animate__animated animate__bounce">Welcome</h1>
        </div>
        <div>My name is Witni and I love all things Art</div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/cpt.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/DSC_0202.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/cpt.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
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

          <i class="fa fa-github" aria-hidden="true"></i>
          <Button variant="danger">About Me</Button>
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
