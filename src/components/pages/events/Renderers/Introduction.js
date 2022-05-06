
import React from 'react'
import IntroductionRenderer from '../../../Common/RichTextRenderers/IntroductionRenderer'
import { Header1 } from '../../../global/fontStyles'
import { InnerContainer, LeftContainer, RightContainer, SectionContainer } from '../../../global/GlobalStyles'
import { useEventsPageQuery } from '../eventPageQuery'



const Introduction = ({theme}) => {
  const {pageHeading,
    introduction} = useEventsPageQuery()

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