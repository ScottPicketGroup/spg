import { useStaticQuery, graphql } from "gatsby"

export const useSPEventsPageData = () => {
 
  const data = useStaticQuery(
    graphql`
    query SPEventsData {
        contentfulSpEventsPageContent(id: {eq: "424cb1b3-d54d-55d0-94b5-f42d4f26be41"}) {
            heroImage {
              gatsbyImageData(placeholder: BLURRED)
              title
            }
            
            pageHeading
            introduction {
              raw
            }
          }
    }
    `);

  return data.contentfulSpEventsPageContent
}

