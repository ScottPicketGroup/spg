import React from 'react'
import styled from 'styled-components'

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BC3 } from '../../global/fontStyles'
const ContentContainer = ({content}) => {

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <BC3 light>{children}</BC3>,
        },
      };

      const output = renderRichText(content, options)
    

    return (
        <div>
            {output}
        </div>
    )
}

export default ContentContainer