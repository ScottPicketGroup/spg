
import React from 'react'
import EventsUnderSliderSectionRenderer from '../../../Common/RichTextRenderers/EventsUnderSliderSectionRenderer'

import { Header1 } from '../../../global/fontStyles'
import { InnerContainer, LeftContainer, RightContainer, SectionContainer } from '../../../global/GlobalStyles'
import { useEventsPageQuery } from '../eventPageQuery'


const TextUnderSlider = ({theme}) => {
  const {spacesHeading,
    spacesIntro} = useEventsPageQuery()

  return (
    <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>{spacesHeading}</Header1>
              <EventsUnderSliderSectionRenderer node={spacesIntro} />
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
  )
}

export default TextUnderSlider