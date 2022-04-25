import React from "react"
import { useTheme } from "styled-components"
import ContentfulSliderFullPage from "../../../image-slider-full/ContentfulSlider"
import { useScottPickettPageData } from "../ScottPicketQuery"
import {
  SectionContainer,
  InnerContainer,
  LeftContainer,
  RightContainer,
} from "../../../global/GlobalStyles"


const IntroSlider = () => {
  const theme = useTheme()
  const images = useScottPickettPageData().introductionGallery

  return (
    <SectionContainer>
      <InnerContainer theme={theme}>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <ContentfulSliderFullPage contentfulImages={images} />
        </RightContainer>
      </InnerContainer>
    </SectionContainer>
  )
}

export default IntroSlider
