import React from "react"
import { useTheme } from "styled-components"

import { Grid, Item } from "./styled-components"
import { Header2, Header3 } from "../../../global/fontStyles"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import PublicationsRenderer from "../../../Common/RichTextRenderers/PublicationsRenderer"
const LeftAligned = ({ publication }) => {
  const theme = useTheme()

  return theme ? (
    <Grid cols="2">
    
      <Item>
        <Header2 marginBottom="1rem" marginTop="-5rem" theme={theme}>
          {publication.heading}
        </Header2>
        {publication.subHeading && (
          <Header3 marginBottom="1rem" theme={theme}>
            {publication.subHeading}
          </Header3>
        )}
        <PublicationsRenderer node={publication.description} />
      </Item>
      <Item>
        <GatsbyImage image={getImage(publication.bookImage)} />
      </Item>
    </Grid>
  ) : (
    <div></div>
  )
}

export default LeftAligned

