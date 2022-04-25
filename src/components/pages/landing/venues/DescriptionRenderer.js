import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {
  Header1,
  Header2,
  Header3,
  BC3,
} from "../../../global/fontStyles"

const Renderer = ({ node }) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <Header1 color="black">{children}</Header1>,
      [BLOCKS.HEADING_2]: (node, children) => <Header2 color="black">{children}</Header2>,
      [BLOCKS.HEADING_3]: (node, children) => <Header3 color="black">{children}</Header3>,
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <BC3 marginBottom="sm" color="black">{children}</BC3>
      ),
    },
  }

  return <>{renderRichText(node, options)}</>
}

export default Renderer
