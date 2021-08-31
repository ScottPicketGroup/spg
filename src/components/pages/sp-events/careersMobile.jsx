import React from "react"
import { useTheme } from "styled-components"
import { Container, SectionContainer } from "../../global/GlobalStyles"

import { InnerContainer } from "./styled-components"
import { BC1, Header1 } from "../../global/fontStyles"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Footer from "../../Common/Footer/Footer"
import Home from "../../Common/MobileHome"
import ContactUsForm from "./contact-us/ContactUsForm"

import image from "../../../images/heros/sp-events-hero.jpg"

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
  const image1 = getImage(data.allFile.edges[0].node)
  const theme = useTheme()

  return theme ? (
    <div>
      <Home HomeImage={image} path={pageProps.path} />
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <SectionContainer>
          <InnerContainer>
            <Header1 theme={theme}>SP Events </Header1>
            <BC1 theme={theme}>
              The Scott Pickett Group is excited to launch our off-site catering
              offer, ‘SP Events’. Debuting with our Longrain pop-up at Sutton
              Grange Winery in March 2021, SP Events brings Scott Pickett’s food
              to you, whatever your event may be. We offer Estelle, Matilda,
              Longrain, Le Shoppe and ‘Scott’s Greatest Hits’ menus offsite for
              weddings, parties, corporate events or large-scale public events.
            </BC1>

            <BC1 theme={theme}>
              Stay up to date with news from the Scott Pickett group to be the
              first to know when our full offer is live.
            </BC1>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <ContactUsForm />
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
