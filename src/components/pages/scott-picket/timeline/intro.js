import React from "react"
import { useTheme } from "styled-components"
import { SectionContainer } from "../../../global/GlobalStyles"
import {
  InnerContainer,
  TimeLineContainer,
  RightContainer,
  LeftContainer,
} from "../styled-components"

import { Header1 } from "../../../global/fontStyles"
import { useScottPickettPageData } from "../ScottPicketQuery"
import IntroductionRenderer from "../../../Common/RichTextRenderers/IntroductionRenderer"
const Intro = () => {
  const theme = useTheme()
  const { timelineHeading } = useScottPickettPageData()

  return theme ? (
    <div>
      <SectionContainer>
        <TimeLineContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme} marginBottom=".25rem">
                {timelineHeading}
              </Header1>
            </RightContainer>
          </InnerContainer>
        </TimeLineContainer>
      </SectionContainer>
    </div>
  ) : (
    <div></div>
  )
}

export default Intro
