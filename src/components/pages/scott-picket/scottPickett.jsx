import React from "react"
import { useTheme } from "styled-components"
import { Container } from "../../global/GlobalStyles"
import Footer from "../../Common/Footer/Footer"
import Home from "../../Common/DesktopHome"
import Timeline from "./timeline/timeline"
import Publications from "./publications/Publications"
import { useScottPickettPageData } from "./ScottPicketQuery"
import MobileHome from "../../Common/MobileHome"
import Introduction from "./Introduction/Introduction"
import ContentfulSliderFullPage from "../../image-slider-full/ContentfulSlider"
import Accolades from "./accolades/Accolades"

const Landing = ({ pageProps }) => {
  const image = useScottPickettPageData().heroImage
  const contentfulImages = useScottPickettPageData().introductionGallery
  const theme = useTheme()

  return theme ? (
    <div>
      <Container theme={theme}>
        {theme.name === "Desktop" ? (
          <Home HomeImage={image} path={pageProps.path} />
        ) : (
          <MobileHome HomeImage={image} path={pageProps.path} />
        )}
        <Introduction />
      </Container>
      <ContentfulSliderFullPage contentfulImages={contentfulImages} />
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <Timeline />
        <Accolades />
        <Publications />
      </Container>
      <Footer />
    </div>
  ) : null
}

export default Landing
