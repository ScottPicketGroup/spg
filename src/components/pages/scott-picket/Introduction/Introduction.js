import React from "react"
import IntroductionRenderer from "../../../Common/RichTextRenderers/IntroductionRenderer"
import {Header1 } from "../../../global/fontStyles"
import {
  InnerContainer,
  LeftContainer,
  SectionContainer,
} from "../../../global/GlobalStyles"
import ContentfulSliderFullPage from "../../../image-slider-full/ContentfulSlider"
import { useScottPickettPageData } from "../ScottPicketQuery"
import { RightContainer } from "../styled-components"
import Quote from "./Quote"

const Introduction = ({ theme, path }) => {
  const {
    pageHeading,
    introduction,
    introductionGallery,
    textUnderGallery,
  } = useScottPickettPageData()

  return (
    <>
      <SectionContainer style={{ marginBottom: `2.25rem 0 9rem` }}>
        <InnerContainer>
          <LeftContainer></LeftContainer>
          <RightContainer>
            <Header1 theme={theme}>{pageHeading}</Header1>
            <IntroductionRenderer node={introduction} sp={true} />
            <ContentfulSliderFullPage contentfulImages={introductionGallery} sectionGallery={true} path={path}/>
            <IntroductionRenderer
              node={textUnderGallery}
              textUnderGallery={true}
            />
          </RightContainer>
        </InnerContainer>
      </SectionContainer>
      <Quote />
    </>
  )
}

export default Introduction
