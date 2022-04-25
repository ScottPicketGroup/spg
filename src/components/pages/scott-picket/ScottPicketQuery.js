import { useStaticQuery, graphql } from "gatsby"

export const useScottPickettPageData = () => {
  const data = useStaticQuery(
    graphql`
      query ScottPicketPageData {
        contentfulScottPickettPageContent(
          id: { eq: "e5a22ac1-4668-5a77-bb24-70e067db92b9" }
        ) {
          id
          heroImage {
            gatsbyImageData(placeholder: BLURRED)
            title
          }
          introduction {
            raw
          }
          introductionGallery {
            gatsbyImageData(placeholder: BLURRED)
            title
          }
          pageHeading
          textUnderGallery {
            raw
          }
          timelineHeading
          timelineIntro {
            raw
          }
          timelineElements {
            description {
              raw
            }
            subheading
            year
          }
          accoladesHeading
          accoladeSectionsByRestaurant {
            restaurant
            accoladesSection {
              accolade
              hats
            }
          }
          publicationsHeading
          publicationsSection {
              bookImage {
                  gatsbyImageData(placeholder: BLURRED)
              }
            description {
              raw
            }
            heading
            subHeading
          }
        }
      }
    `
  )

  return data.contentfulScottPickettPageContent
}
