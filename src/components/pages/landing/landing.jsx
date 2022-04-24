import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { getImage, StaticImage } from "gatsby-plugin-image"
import { useTheme } from "styled-components"
import {
  Container,
} from "../../global/GlobalStyles"

import Introduction from "./Introduction/Introduction"
import Footer from "../../Common/Footer/Footer"
import Home from "../../Common/DesktopHome"
import SliderFull from "../../image-slider-full/Slider"
import SignUpModal from "./SignUpModal"
import Venues from "./venues/venues"
import WhatsOnLanding from './WhatsOn/WhatsOnLanding'
import { useLandingData } from "./LandingQuery"
import ContentfulSliderFullPage from "../../image-slider-full/ContentfulSlider"
import MobileHome from "../../Common/MobileHome"
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
  const image = useLandingData().heroImage

  return theme ? (
    <div>
      <Container theme={theme}>
       {
       theme.name === "Desktop" ?
       <Home HomeImage={image} path={pageProps.path} />
      :
      <MobileHome HomeImage={image} path={pageProps.path} />
      }
       
        <Introduction />
      </Container>
      
      <ContentfulSliderFullPage contentfulImages={contentfulImages} captions={captions} />

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
