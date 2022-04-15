import React from "react"
import { useLandingData } from "../LandingQuery"

import {
  SectionContainer,
  InnerContainer,
  LeftContainer,
  RightContainer,
} from "../../../global/GlobalStyles"

import { Header1 } from "../styled-components"
import VenueItems from "./VenueItems"

const Venues = ({ theme }) => {
  const venuData = useLandingData().venuesSection

  return (
    <SectionContainer style={{ marginBottom: `2.25rem 0 9rem` }}>
      <InnerContainer>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <Header1 theme={theme}>{venuData.sectionHeading}</Header1>
          <VenueItems venues={venuData.venues} />
        </RightContainer>
      </InnerContainer>
    </SectionContainer>
  )
}

export default Venues
