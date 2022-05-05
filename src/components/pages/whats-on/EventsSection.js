import React from 'react'
import { InnerContainer, LeftContainer, RightContainer, SectionContainer } from '../../global/GlobalStyles'
import LeftAligned from './leftAligned'
import RightAligned from './rightAligned'

const EventsSection = ({whatsOnEvents}) => {
  return (
    <>
    {whatsOnEvents &&
          whatsOnEvents.map((item, index) => {
            return (
              <SectionContainer key={index}>
                <InnerContainer>
                  <LeftContainer></LeftContainer>
                  <RightContainer>
                    {index % 2 === 0 ? (
                      <RightAligned data={item} />
                    ) : (
                      <LeftAligned data={item} />
                    )}
                  </RightContainer>
                </InnerContainer>
              </SectionContainer>
            )
          })}
    </>
  )
}

export default EventsSection