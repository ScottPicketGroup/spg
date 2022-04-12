import { useStaticQuery, graphql } from "gatsby"

export const useVenueItems = () => {
 
  const data = useStaticQuery(
    graphql`
    query venuesList {
        allContentfulLandingPageVenuesSection {
          edges {
            node {
              id
              sectionHeading
              venues {          
                venueName
                venueWebsite
                venueAddress
                venueDescription {
                  raw
                }
                venueImage {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
      
    
    `);
 
  return data.allContentfulLandingPageVenuesSection.edges[0].node.venues
}

