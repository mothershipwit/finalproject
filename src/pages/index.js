import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Carousel from "react-bootstrap/Carousel"

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
        <div>
          <h1 class="animate__animated animate__bounce">Meet Witni Whittle</h1>
        </div>
        <div>
          <h5>My name is Witni and I love all things Art and Food related.</h5>
        </div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/paintings.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Custom Painted Art</h3>
                <p>
                  I create custom, hand painted art designs from your ideas or
                  pictures!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/bowie3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Photography</h3>
                <p>Capture your sweetest moments with heart felt photography</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/hair.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Hair Design</h3>
                <p>
                  I have been a licensed, professional Cosemtologist
                  specializing in Color for over 12 years.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
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
