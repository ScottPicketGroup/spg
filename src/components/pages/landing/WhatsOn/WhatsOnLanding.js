import { Link } from "gatsby"
import React from "react"
import { SectionContainer,
  
  
  InnerContainer,
  LeftContainer,
  RightContainer, } from "../../../global/GlobalStyles"

import { useLandingData } from "../LandingQuery"
import IntroductionRenderer from "../../../Common/RichTextRenderers/IntroductionRenderer"
import { BC1, Header1 } from "../../../global/fontStyles"
const WhatsOnLanding = ({ theme }) => {
  const {
    whatsOnHeading,
    whatsOnDescription,
    whatsOnLinkLabel,
  } = useLandingData()
  return (
    <SectionContainer style={{ paddingBottom: `9rem` }}>
      <InnerContainer>
        <LeftContainer></LeftContainer>
        <RightContainer>
        <Header1 theme={theme}>{whatsOnHeading}</Header1>
        <IntroductionRenderer node={whatsOnDescription} />
          <Link to="/whatson" style={{ textDecoration: `none` }}>
            <BC1 link={true} theme={theme}>
              {whatsOnLinkLabel}
            </BC1>
          </Link>
        </RightContainer>
      </InnerContainer>
    </SectionContainer>
  )
}

export default WhatsOnLanding
