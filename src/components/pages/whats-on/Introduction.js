import React from "react"

import { useTheme } from "styled-components"
import { Header1 } from "../../global/fontStyles"
import {
  SectionContainer,
  InnerContainer,
  LeftContainer,
  RightContainer,
} from "../../global/GlobalStyles"
import IntroductionRenderer from "../../Common/RichTextRenderers/IntroductionRenderer"
const Introduction = ({ pageHeading, introduction }) => {
  const theme = useTheme()
  return (
    <SectionContainer>
      <InnerContainer>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <Header1 theme={theme}>{pageHeading} </Header1>
          <IntroductionRenderer node={introduction} />
        </RightContainer>
      </InnerContainer>
    </SectionContainer>
  )
}

export default Introduction
