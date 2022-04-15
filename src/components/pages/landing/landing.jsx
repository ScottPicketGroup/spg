import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { getImage, StaticImage } from "gatsby-plugin-image"
import { useTheme } from "styled-components"
import {
  Container,
  RightContainer,
  LeftContainer,
  SectionContainer,
} from "../../global/GlobalStyles"

import { InnerContainer } from "./styled-components"
import { BC1, Header1, BC3, Header2 } from "../../global/fontStyles"

import Introduction from "./Introduction/Introduction"
import Footer from "../../Common/Footer/Footer"
import Home from "../../Common/DesktopHome"
import SliderFull from "../../image-slider-full/Slider"
import SignUpModal from "./SignUpModal"
import Venues from "./venues/venues"
import WhatsOnLanding from './WhatsOn/WhatsOnLanding'
import { useLandingData } from "./LandingQuery"
import ContentfulSliderFullPage from "../../image-slider-full/ContentfulSlider"
const captions = [
  "Matilda 159 Domain",
  "Longrain Melbourne",
  "Chancery Lane Bistro",
  "Estelle",
]
const Landing = ({ pageProps }) => {
  const [signUp, setSignUp] = useState(false)
  const theme = useTheme()
  const contentfulImages = useLandingData().landingGallery
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: {}
          absolutePath: { regex: "/images/landing-carousel/" }
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
      file(name: { in: "home-hero" }) {
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
  const image = getImage(data.file)

  return theme ? (
    <div>
      <Container theme={theme}>
        <Home HomeImage={image} path={pageProps.path} />
        <Introduction />
      </Container>
      
      <ContentfulSliderFullPage images={data} contentfulImages={contentfulImages} captions={captions} />

      <Container theme={theme}>
        <Venues />
        <WhatsOnLanding />
      </Container>
      <Footer />
      <SignUpModal signUp={signUp} setSignUp={setSignUp} />
    </div>
  ) : (
    <div></div>
  )
}

export default Landing
