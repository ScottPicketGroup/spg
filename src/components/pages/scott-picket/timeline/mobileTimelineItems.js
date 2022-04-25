import React from "react"
import { useTheme } from "styled-components"
import { SectionContainer } from "../../../global/GlobalStyles"
import { BC2, Header2, Header3 } from "../../../global/fontStyles"
import {
  TimeLineContainer,
} from "../styled-components"
import timeline from "./timeline.json"
import Intro from "./mobileIntro"

const MobileTimelineItems = () => {

  
  const theme = useTheme()

  return theme ? (
    <div>
      <Intro
        style={{
          marginBottom: `2.25rem`,
        }}
      />
      {timeline.map((item, i) => (
        <SectionContainer key={i}>
          <TimeLineContainer theme={theme}>
            <Header2 marginBottom="1rem">{item.year}</Header2>
            <Header3 marginBottom="1.5rem">{item.phase}</Header3>
            <BC2>{item.qoute}</BC2>
          </TimeLineContainer>
        </SectionContainer>
      ))}
    </div>
  ) : (
    <div></div>
  )
}

export default MobileTimelineItems
