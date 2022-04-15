import { useStaticQuery, graphql } from "gatsby"

export const useLandingData = () => {
 
  const data = useStaticQuery(
    graphql`
    query LandingData {
      contentfulLandingPageContent {
        id
        introHeading
        introLinkLabel
        introduction {
          raw
        }
        landingGallery {
          gatsbyImageData(placeholder: BLURRED)
          title
        }
        venuesSection {
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
        whatsOnHeading
        whatsOnDescription {
          raw
        }
        whatsOnLinkLabel
        heroImage {
          gatsbyImageData
        }
      }
    }
    `);

  return data.contentfulLandingPageContent
}

