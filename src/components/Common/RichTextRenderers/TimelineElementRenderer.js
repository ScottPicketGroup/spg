import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BC1, BC2, Header1, Header2, Header3 } from "../../global/fontStyles"
import { IntroductionRendererContainer } from "./styled-components"


const TimelineElementRenderer = ({ node, landing, sp, textUnderGallery }) => {
  const options = {
    renderNode: {
      
   
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <BC2 >{children}
          </BC2>
      ),
    },
  }

  return <IntroductionRendererContainer 
  textUnderGallery={textUnderGallery}
  sp={sp}
  >{renderRichText(node, options)}</IntroductionRendererContainer>
}

export default TimelineElementRenderer