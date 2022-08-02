import React from "react"
import { useTheme } from "styled-components"
import { getImage } from "gatsby-plugin-image"

import { Container, SectionContainer } from "../../global/GlobalStyles"
import {
  InnerContainer,
  RightContainer,
  LeftContainer,
  Button,
  PostContainer,
} from "../../global/GlobalStyles"
import { BC3, Header2, Header4 } from "../../global/fontStyles"

import Footer from "../../Common/Footer/Footer"
import Home from "../../Common/DesktopHome"
import { useCareerPageQuery } from "./CareersQuery"
import MobileHome from "../../Common/MobileHome"
import Introduction from "./Introduction/Introduction"

const Landing = ({ pageProps }) => {
  const {
    pageHeading,
    introduction,
    heroImage,
    jobPosts,
  } = useCareerPageQuery()
  const image = getImage(heroImage)
  const theme = useTheme()

  return theme ? (
    <div>
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        {theme.name === "Desktop" ? (
          <Home HomeImage={image} path={pageProps.path} />
        ) : (
          <MobileHome HomeImage={image} path={pageProps.path} old={false} />
        )}
        <Introduction pageHeading={pageHeading} introduction={introduction} />

        {jobPosts &&
          jobPosts.map((career, i) => (
            <SectionContainer key={i}>
              <InnerContainer>
                <LeftContainer></LeftContainer>
                <RightContainer>
                  <PostContainer>
                    <Header2 theme={theme} marginBottom=".75rem">
                      {career.title}
                    </Header2>
                    <Header4 theme={theme} marginBottom="1.25rem">
                      {career.restaurantName}
                    </Header4>
                    <BC3 theme={theme} marginBottom=".5rem" light>
                      {career.jobDescription.jobDescription}
                    </BC3>
                  </PostContainer>
                  <Button>
                    <a
                      href={`${career.jobPostingLink}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: `none` }}
                    >
                      Apply
                    </a>
                  </Button>
                </RightContainer>
              </InnerContainer>
            </SectionContainer>
          ))}
      </Container>

      <Footer />
    </div>
  ) : (
    <div></div>
  )
}

export default Landing
