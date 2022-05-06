import { useStaticQuery, graphql } from "gatsby"

export const useContactData = () => {
 
  const data = useStaticQuery(
    graphql`
    query ContactUsPagePageContentQuery {
        contentfulContactUsPagePageContent(
          id: {eq: "bfa82d57-0800-5ac1-8c6f-db750103cf45"}
        ) {
          id
          pageHeading
          introduction {
            raw
          }
          heroImage {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      
    `);

    return data.contentfulContactUsPagePageContent
  }