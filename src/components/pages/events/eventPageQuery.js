import { useStaticQuery, graphql } from "gatsby"

export const useEventsPageQuery = () => {
  const data = useStaticQuery(
    graphql`
      query EventsPageQuery {
        contentfulEventsPrivateDiningAtOurRestaurantsPage(
          id: { eq: "3de002ba-bb42-56fb-a680-49ea15a6620a" }
        ) {
          heroImage {
            gatsbyImageData(placeholder: BLURRED)
            title
          }
          pageHeading
          introduction {
            raw
          }
          imageSliderImages {
            gatsbyImageData(placeholder: BLURRED)
            title
          }

          spacesHeading
          spacesIntro {
            raw
          }
          restaurants {
            venueName
            shortAddress
            venueImage {
              gatsbyImageData(placeholder: BLURRED)
              title
            }
            venueWebsite
          }
        }
      }
    `
  )

  return data.contentfulEventsPrivateDiningAtOurRestaurantsPage
}
