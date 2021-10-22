import React from "react"
import { useTheme } from "styled-components"
import { Container, SectionContainer } from "../../global/GlobalStyles"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

import {
  InnerContainer,
  RightContainer,
  LeftContainer,
} from "./styled-components"
import { BC1, Header1 } from "../../global/fontStyles"

import Footer from "../../Common/Footer/Footer"
import Home from "../../Common/DesktopHome"

import RightAligned from "./rightAligned"
import LeftAligned from "./leftAligned"

const Landing = ({ pageProps }) => {
  const theme = useTheme()
  const data = useStaticQuery(graphql`
    {
      allContentfulWhatsOnPageContent {
        edges {
          node {
            whatsOnEvents {
              Heading
              eventLink
              content {
                raw
              }
              images {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                title
              }
              subHeading
              linkLabel
            }
          }
        }
      }

      file(name: { in: "whats-on-hero" }) {
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
  `)

  const events = data.allContentfulWhatsOnPageContent.edges[0].node.whatsOnEvents
  const image = getImage(data.file)
console.log(events)
  return theme ? (
    <div>
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <Home HomeImage={image} path={pageProps.path} />
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>What's On</Header1>
              <BC1 theme={theme}>
                Five restaurants, three bars, two delis, one events company and
                more in the pipeline gives us plenty of things to keep us busy
                and you entertained. Read on to hear what’s coming up at our
                Scott Pickett Group venues.
              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        {events &&
          events.map((item, index) => {
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
      </Container>

      <Footer />
    </div>
  ) : (
    <div></div>
  )
}

export default Landing
