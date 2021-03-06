import React from "react"
import { useTheme } from "styled-components"
import { Container, SectionContainer } from "../../global/GlobalStyles"

import {
  InnerContainer,
  RightContainer,
  LeftContainer,
} from "./styled-components"
import { BC1, Header1} from "../../global/fontStyles"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Footer from "../../Common/Footer/Footer"
import Home from "../../Common/DesktopHome"
import ContactFormSproutSend from "./ContactForm/ContactFormSproutSend"

const Landing = ({ pageProps }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: {}
          absolutePath: {}
          name: { in: "contact-hero" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                aspectRatio: 1.5
              )
            }
          }
        }
      }
    }
  `)
  const image = getImage(data.allFile.edges[0].node)
  const theme = useTheme()

  return theme ? (
    <div>
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <Home HomeImage={image} path={pageProps.path} />

        <SectionContainer>
          <InnerContainer marginTop="3.5rem">
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Contact </Header1>
              <BC1 theme={theme}>
              Please fill out the form below for all Scott Pickett Group enquiries, we’d love to hear from you.
              </BC1>

              <BC1 theme={theme}>
              If your enquiry relates to a specific Scott Pickett Group venue, please see the venue's website for details.
              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer marginTop="3.5rem">
            <LeftContainer></LeftContainer>
            <RightContainer>
             <ContactFormSproutSend/>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
      </Container>

      <Footer />
    </div>
  ) : (
    <div></div>
  )
}

export default Landing
