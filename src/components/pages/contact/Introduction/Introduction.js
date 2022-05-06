import React from "react"
import IntroductionRenderer from "../../../Common/RichTextRenderers/IntroductionRenderer"
import { Header1 } from "../../../global/fontStyles"
import {
  InnerContainer,
  LeftContainer,
  SectionContainer,
  RightContainer,
} from "../../../global/GlobalStyles"

const Introduction = ({ theme, pageHeading, introduction }) => {
  return (
    <SectionContainer>
      <InnerContainer>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <Header1 theme={theme}>{pageHeading}</Header1>
          <IntroductionRenderer node={introduction} />
        </RightContainer>
      </InnerContainer>
    </SectionContainer>
  )
}

export default Introduction
