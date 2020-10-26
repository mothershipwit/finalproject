import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Carousel } from "react-bootstrap"
import Card from "react-bootstrap/Card"



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
                  <img src={node.file.url} alt="contentful"></img>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <p>
       <Card>
          <Card.Header>&copy;Witni Whittle 2020</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
                {' '} <h6>GET IN TOUCH</h6>
                <div>
<h7> Do you want to know more about me or my work?

Or do you have a cool project that you want to talk about?

Send me an email or DM on one of these platforms</h7> {' '}
      </div>
      </p>
      
      <footer>
            <a href="javascript:history.back()">BACK</a>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
      </p>
  
     
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
