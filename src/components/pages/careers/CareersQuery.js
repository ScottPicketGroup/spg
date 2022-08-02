import { useStaticQuery, graphql } from "gatsby"

export const useCareerPageQuery = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        contentfulJobsPostingPageContent(
          id: { eq: "b44e6304-a6e5-56e1-9669-b207dfba069c" }
        ) {
          id
          pageHeading
          introduction {
            raw
          }
          heroImage {
            gatsbyImageData(placeholder: BLURRED)
          title
        }
          jobPosts {
            title
            restaurantName
            jobPostingLink
            jobDescription {
              jobDescription
            }
          }
        }
      }
    `
  )

  return data.contentfulJobsPostingPageContent
}
