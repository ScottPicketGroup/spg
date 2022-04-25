import React, { useState } from "react"
import { useTheme } from "styled-components"
import { Container } from "../../global/GlobalStyles"

import Introduction from "./Introduction/Introduction"
import Footer from "../../Common/Footer/Footer"
import Home from "../../Common/DesktopHome"
import SignUpModal from "./SignUpModal"
import Venues from "./venues/venues"
import WhatsOnLanding from "./WhatsOn/WhatsOnLanding"
import { useLandingData } from "./LandingQuery"
import ContentfulSliderFullPage from "../../image-slider-full/ContentfulSlider"
import MobileHome from "../../Common/MobileHome"

const Landing = ({ pageProps }) => {
  const [signUp, setSignUp] = useState(false)
  const theme = useTheme()
  const contentfulImages = useLandingData().landingGallery
  const image = useLandingData().heroImage

  return theme ? (
    <div>
      <Container theme={theme}>
        {theme.name === "Desktop" ? (
          <Home HomeImage={image} path={pageProps.path} />
        ) : (
          <MobileHome HomeImage={image} path={pageProps.path} old={false}/>
        )}
        <Introduction />
      </Container>

      <ContentfulSliderFullPage contentfulImages={contentfulImages} />

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
