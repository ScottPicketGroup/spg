import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BC1, Header1, Header2, Header3 } from "../../global/fontStyles"
import { IntroductionRendererContainer } from "./styled-components"
import { Link } from "gatsby"


const IntroductionRenderer = ({ node, landing, sp, textUnderGallery }) => {
  const options = {
    renderNode: {
      
      [BLOCKS.HEADING_1]: (node, children) => <Header1>{children}</Header1>,
      [BLOCKS.HEADING_2]: (node, children) => <Header2>{children}</Header2>,
      [BLOCKS.HEADING_3]: (node, children) => <Header3>{children}</Header3>,
      [BLOCKS.HYPERLINK]: (node, children) => (
        <Link to="/contact" style={{color: `black !important`, textDecoration: `underline`}}>boob{children} </Link>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <BC1 textUnderGallery>{children}
          </BC1>
      ),
    },
  }

  return <IntroductionRendererContainer 
  textUnderGallery={textUnderGallery}
  sp={sp}
  >{renderRichText(node, options)}</IntroductionRendererContainer>
}

export default IntroductionRenderer

