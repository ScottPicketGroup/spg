import { useStaticQuery, graphql } from "gatsby"

export const useWhatsOnPageData = () => {
 
  const data = useStaticQuery(
    graphql`
    query WhatsOnPageQuery {
        contentfulSpgWhatsOnPageContent(id: {eq: "f3a7a0a6-51f5-5f93-9c97-d318839ddf2d"}) {
          
          heroImage {
            gatsbyImageData(placeholder: BLURRED)
            title
          }
          pageHeading
          introduction {
            raw
          }
          whatsOnEvents {
            Heading
            eventLink
            content {
              raw
            }
            images {
              gatsbyImageData(placeholder: BLURRED)
              title
            }
            subHeading
            linkLabel
          }
        }
      }
      
    `);

  return data.contentfulSpgWhatsOnPageContent
}

