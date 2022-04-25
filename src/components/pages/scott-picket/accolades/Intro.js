import React from "react"
import { useTheme } from "styled-components"
import { SectionContainer } from "../../../global/GlobalStyles"
import {
  InnerContainer,
  TimeLineContainer,
  RightContainer,
  LeftContainer,
} from "../styled-components"

import { BC1, Header1 } from "../../../global/fontStyles"
import { useScottPickettPageData } from "../ScottPicketQuery"
const Intro = () => {
  const theme = useTheme()
  const { accoladesHeading } = useScottPickettPageData()

  return theme ? (
    <div>
      <SectionContainer>
        <TimeLineContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme} marginBottom=".25rem">
                {accoladesHeading}
              </Header1>
            </RightContainer>
          </InnerContainer>
        </TimeLineContainer>
      </SectionContainer>
    </div>
  ) : null
}

export default Intro
