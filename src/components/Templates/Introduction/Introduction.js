import { Link } from 'gatsby'
import React from 'react'

import { BC1, Header1 } from '../../global/fontStyles'
import { InnerContainer, LeftContainer, SectionContainer } from '../../global/GlobalStyles'
import IntroductionRenderer from '../../Common/RichTextRenderers/IntroductionRenderer'

import { RightContainer } from '../styled-components'


const Introduction = ({theme, introduction, productName, restaurantSource}) => {

    
  return (
    <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>{productName}</Header1>
              <BC1>From {restaurantSource.toUpperCase()}</BC1>
              <IntroductionRenderer node={introduction} />
              {/* <Link to="/scott-picket" style={{ textDecoration: `none` }}>
                <Link to="/scott-pickett" style={{ textDecoration: `none` }}>
                  <BC1 link={true} them={theme} marginBottom="6rem">
                   {introLinkLabel}
                  </BC1>
                </Link>
              </Link> */}
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
  )
}

export default Introduction