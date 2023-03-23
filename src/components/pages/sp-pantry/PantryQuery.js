import { useStaticQuery, graphql } from "gatsby"

export const useSpPantryData = () => {
 
  const data = useStaticQuery(
    graphql`
    query spPantryQuery {
        contentfulSpPantryPageContent {
          id
          heroImage {
            gatsbyImageData
            description
          }
          title
          introduction {
            raw
          }
          introLinkLabel
          fullWidthImage {
            gatsbyImageData
          }
          productsTitle
          productsIntroduction {
            raw
          }
          products {
            restaurantSource
          }
        }
      }
    `);

  return data.contentfulLandingPageContent
}

