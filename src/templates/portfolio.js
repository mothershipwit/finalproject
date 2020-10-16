import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Carousel } from "react-bootstrap"

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
      <div className="row">
        <Carousel>
          {portfolio.gallery.map((node, index) => (
            <Carousel.Item>
              <img src={node.file.url}></img>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
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
