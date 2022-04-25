import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BC1, BC3, Header1, Header2, Header3 } from "../../global/fontStyles"
import { IntroductionRendererContainer } from "./styled-components"


const PublicationsRenderer = ({ node}) => {
  const options = {
    renderNode: {
      
      [BLOCKS.HEADING_1]: (node, children) => <Header1>{children}</Header1>,
      [BLOCKS.HEADING_2]: (node, children) => <Header2>{children}</Header2>,
      [BLOCKS.HEADING_3]: (node, children) => <Header3>{children}</Header3>,
      [BLOCKS.HYPERLINK]: (node, children) => (
        <BC1 marginBottom="sm" style={{color: `red !important`}}>{children}</BC1>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
      
           <BC3 light>
          {children}
         </BC3>
      ),
    },
  }

  return <IntroductionRendererContainer 

  >{renderRichText(node, options)}</IntroductionRendererContainer>
}

export default PublicationsRenderer