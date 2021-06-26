import React, { useState } from "react"
import { useTheme } from "styled-components"
import { SectionContainer } from "../../../global/GlobalStyles"
import { BC2, Header2 } from "../../../global/fontStyles"
import {
  TimeLineContainer,
  TimeLineGrid,
  RightGrid,
  LeftGrid,
  RightContainer,
  LeftContainer,
} from "../styled-components"
import timeline from "./timeline.json"
import Intro from './mobileIntro'
import HoverImage from "./hoverImage"
const MobileTimelineItems = () => {
  const [image1, setImage1] = React.useState(
   false
  )
  const [lastImage, setLastImage] = React.useState(false)
  console.log(`timeline`, timeline)
  const theme = useTheme()

  return theme ? (
    <div>
       <Intro
       style={{
         marginBottom: `2.25rem`
       }}
       />
      {timeline.map((item, i) => (
  
       
        <SectionContainer>
          <TimeLineContainer 
         >
      
           
         
          
                  <Header2>{item.year}</Header2>
                  <BC2 style={{marginBottom: `1.5rem`}}>{item.phase}</BC2>
                
             
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
