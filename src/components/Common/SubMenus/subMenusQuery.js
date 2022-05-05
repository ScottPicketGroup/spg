import { useStaticQuery, graphql } from "gatsby"

export const useSubMenuData = () => {
 
    const data = useStaticQuery(
        graphql`
        query SubMenuQuery {
          contentfulBookATableLinksInMenu(
            id: {eq: "2eb0369e-3b56-5d2a-88a0-0c99adf67823"}
          ) {
            bookATableLInk {
              linkLabel
              linkUrl
            }
          }
          contentfulGiftVoucherLinksInMenu(
            id: {eq: "2ee3f23c-b412-5a70-9eb5-1a17cd955c74"}
          ) {
            giftVoucherLink
          }
          contentfulProvidorLinksInMenuContent(
            id: {eq: "2cc5e8e4-cd54-5225-b1a5-e0a95444821a"}
          ) {
            restaurant {
              providoorLink
            }
          }
        }
        `);

    return data 
}

