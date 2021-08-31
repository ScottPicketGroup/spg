import React from "react"
import { useTheme } from "styled-components"
import { Button, Grid, Item } from "./styled-components"
import { BC3, BC2, Header2, Header3 } from "../../global/fontStyles"

import SliderFull from "./image-slider-full/Slider"
import ContentContainer from "./ContentContainer"

const RightAligned = ({ data }) => {
  const theme = useTheme()

  const { Heading, subHeading, content, eventLink, linkLabel } = data.node
  return theme ? (
    <Grid cols="2">
      <Item>
        <Header2 marginBottom="1rem" marginTop="-5rem" theme={theme}>
          {Heading}
        </Header2>
        <Header3
          marginBottom={theme.name === "Mobile" ? "1.5rem" : "1rem"}
          theme={theme}
        >
          {subHeading}
        </Header3>

        <ContentContainer content={content} />

        {eventLink ? (
          <a href={eventLink} target="_blank">
            <Button>{linkLabel}</Button>
          </a>
        ) : null}
      </Item>
      <Item>{data.node ? <SliderFull images={data.node.images} /> : null}</Item>
    </Grid>
  ) : (
    <div></div>
  )
}

export default RightAligned
