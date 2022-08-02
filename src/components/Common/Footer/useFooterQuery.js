import { useStaticQuery, graphql } from "gatsby"

export const useFooterData = () => {
 
  const data = useStaticQuery(
    graphql`
    query FooterLinksQuery {
        allContentfulFooterInfo(
          filter: {id: {eq: "64cdf876-ee13-5f54-985b-428d571ee53d"}}
        ) {
          edges {
            node {
              id
              restaurants {
                label
                url
              }
            }
          }
        }
      }
      
    `);

    return data.allContentfulFooterInfo
  }