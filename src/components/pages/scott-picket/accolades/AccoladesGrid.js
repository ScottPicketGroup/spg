import React from 'react'
import { SectionContainer } from "../../../global/GlobalStyles"

import hat from "./chef-hat.png"
import {
  TimeLineContainer,
  TimeLineGrid,
  RightGrid,
  LeftGrid,
  RightContainer,
  LeftContainer,
  Hat,
} from "../styled-components"

import { Header2,  BC2 } from "../../../global/fontStyles"
import { useScottPickettPageData } from '../ScottPicketQuery'

const AccoladesGrid = () => {
    const {accoladeSectionsByRestaurant} = useScottPickettPageData()
    console.log('accoaldesSectionByRestaurant', accoladeSectionsByRestaurant)
  return (
      <>
      {accoladeSectionsByRestaurant.map((restaurant, i) => (
        <SectionContainer key={i}>
    <TimeLineContainer>
      <LeftContainer></LeftContainer>
      <RightContainer>
        <TimeLineGrid
        
        >
          <LeftGrid>
            <Header2>{restaurant.restaurant}</Header2>
          </LeftGrid>
          <RightGrid>
            
          
              {restaurant.accoladesSection.map((accolade, i) => (
                <BC2 key={i}>{accolade.accolade} 
                {accolade.hats === 1 ? (
                  <> - 
                    <Hat src={hat} alt="chef hat" /></>
                ) : accolade.hats == 2 ? (
                    <> - 
                    <Hat src={hat} alt="chef hat" />
                    <Hat src={hat} alt="chef hat" />
                    </>
                ) : accolade.hats === 3 ? (
                    <> <Hat src={hat} alt="chef hat" />
                    <Hat src={hat} alt="chef hat" />
                    <Hat src={hat} alt="chef hat" /></>
                   
                ) : null
                
                }</BC2>
              ))} 
            
          </RightGrid>
        </TimeLineGrid>
      </RightContainer>
    </TimeLineContainer>
  </SectionContainer>
      ))}
      </>
    
  )
}

export default AccoladesGrid