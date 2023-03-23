import React, { useState, useRef } from "react"
import { useTheme } from "styled-components"
import { Container } from "../../global/GlobalStyles"

import Introduction from "./Introduction/Introduction"
import Footer from "../../Common/Footer/Footer"
import SignUpModal from "./SignUpModal"
import { useSpPantryData } from "./PantryQuery"

// import WhatsOnLanding from "./WhatsOn/WhatsOnLanding"
import ContentfulSliderFullPage from "../../image-slider-full/ContentfulSlider"

import Home from "../../Common/DesktopHome"
import MobileHome from "../../Common/MobileHome"
import ProductsIntroduction from "./ProductsIntroduction/ProductsIntroduction"
import ProductsGrid from "./ProductsGrid/ProductsGrid"

const Pantry = ({ pageProps }) => {
  const [signUp, setSignUp] = useState(false)
  const theme = useTheme()
  // const contentfulImages = useLandingData().landingGallery
  // const image = useLandingData().heroImage
  const { heroImage, fullWidthImage } = useSpPantryData()
  const contentfulImages = [fullWidthImage]
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ block: 'start',  behavior: 'smooth' }) 
  return theme ? (
    <div>
      <Container theme={theme}>
        {theme.name === "Desktop" ? (
          <Home HomeImage={heroImage} path={pageProps.path} />
        ) : (
          <MobileHome HomeImage={heroImage} path={pageProps.path} old={false} />
        )}
        <Introduction executeScroll={executeScroll}/>
      </Container>
      <ContentfulSliderFullPage
        contentfulImages={contentfulImages}
        path={pageProps.path}
      />
      <Container theme={theme} ref={myRef}>
        <ProductsIntroduction />
        <ProductsGrid />
      </Container>
      <Footer />
      <SignUpModal signUp={signUp} setSignUp={setSignUp} />
    </div>
  ) : (
    <div></div>
  )
}

export default Pantry
