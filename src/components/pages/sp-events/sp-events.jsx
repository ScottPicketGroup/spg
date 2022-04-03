import React from "react"
import { useTheme } from "styled-components"
import { Container, SectionContainer } from "../../global/GlobalStyles"
import {
  InnerContainer,
  RightContainer,
  LeftContainer,
} from "./styled-components"
import { BC1, Header1} from "../../global/fontStyles"
import {graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Footer from "../../Common/Footer/Footer"
import Home from "../../Common/DesktopHome"
import ContactUsForm from "./contact-us/ContactUsForm"
import ContactFormSproutSend from "./contact-us/ContactFormSproutSend"
const Landing = ({ pageProps }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: {}
          absolutePath: {}
          name: { in: "sp-events-hero" }
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
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>SP Events </Header1>
              <BC1 theme={theme}>
                The Scott Pickett Group is excited to launch our off-site
                catering offer, ‘SP Events’. Debuting with our Longrain pop-up
                at Sutton Grange Winery in March 2021, SP Events brings Scott
                Pickett’s food to you, whatever your event may be. We offer
                Estelle, Matilda, Longrain, Le Shoppe and ‘Scott’s Greatest
                Hits’ menus offsite for weddings, parties, corporate events or
                large-scale public events.
              </BC1>

              <BC1 theme={theme}>
                Stay up to date with news from the Scott Pickett group to be the
                first to know when our full offer is live.
              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
             <ContactFormSproutSend />
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
