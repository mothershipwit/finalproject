const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const portfolioTemplate = path.resolve(`src/templates/portfolio.js`)

  return graphql(`
    {
      allContentfulPortfolio {
        nodes {
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
    }
  `)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      result.data.allContentfulPortfolio.nodes.forEach(node => {
        createPage({
          path: node.name,
          component: portfolioTemplate,
          context: {
            slug: node.name,
          }, // additional data can be passed via context
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
