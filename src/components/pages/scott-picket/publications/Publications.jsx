import React from "react"
import { useTheme } from "styled-components"
import { SectionContainer, InnerContainer } from "../../../global/GlobalStyles"

import {
  RightContainer,
  LeftContainer,
  PublicationsHeader,
} from "./styled-components"

import LeftAligned from "./leftAligned"
import RightAligned from "./rightAligned"
import { useScottPickettPageData } from "../ScottPicketQuery"
const Publications = () => {
  const theme = useTheme()
  const { publicationsHeading, publicationsSection } = useScottPickettPageData()

  return theme ? (
    <>
      <SectionContainer marginTop="9rem" theme={theme}>
        <LeftContainer theme={theme} />
        <RightContainer theme={theme}>
          <PublicationsHeader theme={theme}>
            {publicationsHeading}
          </PublicationsHeader>
          {publicationsSection.map((publication, i) => (
            <>
              {i % 2 == 0 ? (
                <SectionContainer key={i}>
                  <InnerContainer>
                    <LeftAligned publication={publication} />
                  </InnerContainer>
                </SectionContainer>
              ) : (
                <>
                  <SectionContainer key={i}>
                    <InnerContainer>
                      <RightAligned publication={publication} />
                    </InnerContainer>
                  </SectionContainer>
                </>
              )}
            </>
          ))}
        </RightContainer>
      </SectionContainer>
    </>
  ) : null
}

export default Publications
