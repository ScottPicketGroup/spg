import { Link } from 'gatsby'
import React from 'react'
import IntroductionRenderer from '../../../Common/RichTextRenderers/IntroductionRenderer'
import { BC1, Header1 } from '../../../global/fontStyles'
import { InnerContainer, LeftContainer, SectionContainer } from '../../../global/GlobalStyles'
import { useSpPantryData } from '../PantryQuery'
import { RightContainer } from '../styled-components'


const Introduction = ({theme}) => {

    const {introduction, introLinkLabel, title} = useSpPantryData()
  return (
    <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>{title}</Header1>
              <IntroductionRenderer node={introduction} />
              <Link to="/scott-picket" style={{ textDecoration: `none` }}>
                <Link to="/scott-pickett" style={{ textDecoration: `none` }}>
                  <BC1 link={true} them={theme} marginBottom="6rem">
                   {introLinkLabel}
                  </BC1>
                </Link>
              </Link>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
  )
}

export default Introduction