import React, { useState, useRef } from "react"
import { useTheme } from "styled-components"
import { SectionContainer } from "../../../global/GlobalStyles"
import { BC3, Header2 } from "../../../global/fontStyles"
import {
  TimeLineContainer,
  TimeLineGrid,
  RightGrid,
  LeftGrid,
  RightContainer,
  LeftContainer,
} from "../styled-components"
import { useScottPickettPageData } from "../ScottPicketQuery"
import TimelineElementRenderer from "../../../Common/RichTextRenderers/TimelineElementRenderer"
const TimelineItems = () => {
  const theme = useTheme()
  const [display, setDisplay] = useState(0)
  const fadeOut = () => {
    setDisplay(0)
  }
const {timelineElements} = useScottPickettPageData()
  return theme ? (
  
  <div>
      {timelineElements.map((item, i) => (
        <SectionContainer onMouseLeave={fadeOut} key={i}>
          <TimeLineContainer>
            <LeftContainer>
             
            </LeftContainer>
            <RightContainer>
              <TimeLineGrid>
                <LeftGrid>
                  <Header2>{item.year}</Header2>
                  <BC3  timeLine>{item.subheading}</BC3>
                </LeftGrid>
                <RightGrid>
                <TimelineElementRenderer node={item.description} />
                </RightGrid>
              </TimeLineGrid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>
      ))}

     
    </div>
  ) : null
}

export default TimelineItems
