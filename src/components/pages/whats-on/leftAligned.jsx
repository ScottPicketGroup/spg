import React from "react"
import { useTheme } from "styled-components"
import { Button, Grid, Item } from "./styled-components"
import { Header2, Header3 } from "../../global/fontStyles"

import ContentContainer from "./ContentContainer"
import SliderFull from "./image-slider-full/Slider"

const LeftAligned = ({ data }) => {
  console.log(data)
  const theme = useTheme()
  const { Heading, subHeading, content, eventLink, linkLabel } = data
  return theme ? (
    <Grid cols="2">
      <Item>{data.images ? <SliderFull images={data.images} /> : null}</Item>
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
        {data.content && <ContentContainer content={content} />}
        {eventLink ? (
          <a href={eventLink} target="_blank"
          rel="noreferrer">
            <Button>{linkLabel}</Button>
          </a>
        ) : null}
      </Item>
    </Grid>
  ) : (
    <div></div>
  )
}

export default LeftAligned
