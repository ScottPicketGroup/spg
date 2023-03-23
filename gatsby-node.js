const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const products = await graphql(`
    query productsQuery {
      allContentfulPantryProduct {
        edges {
          node {
            heroImage {
              gatsbyImageData
            }
            introduction {
              raw
            }
            productDetails {
              label
              text
              details {
                raw
              }
            }
            productName
            restaurantSource
            restaurantVerticalImage {
              gatsbyImageData
            }
            restaurantAddress
            restaurantDescription {
              raw
            }
            buttonLabel
            buttonUrl
          }
        }
      }
    }
  `).then(products => {
    if (products.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    // Create pages for each markdown file.
    const PantryProductTemplate = path.resolve(
      `src/components/Templates/Product.js`
    )

 
        products.data.allContentfulPantryProduct.edges.forEach(({ node }) => {
          console.log('node.productName.toLowerCase(', node.productName.toLowerCase())
            const pathToUse =  node.productName.replace(/\s/g, '+')
            const path = `/${pathToUse}`
            createPage({
              path,
              component: PantryProductTemplate,
              context: {
                pagePath: path,
                productData: node,
              },
            })
          })
    })

}
