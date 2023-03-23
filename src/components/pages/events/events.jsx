import React from "react"
import { useTheme } from "styled-components"
import { Container } from "../../global/GlobalStyles"

import Footer from "../../Common/Footer/Footer"
import Home from "../../Common/DesktopHome"
import ContentfulSliderFullPage from "../../image-slider-full/ContentfulSlider"
import MobileHome from "../../Common/MobileHome"
import { useEventsPageQuery } from "./eventPageQuery"
import Introduction from "./Renderers/Introduction"
import TextUnderSlider from "./Renderers/TextUnderSlider"
import Venues from "./Venues"

const Events = ({ pageProps }) => {
  const theme = useTheme()

  const contentfulImages = useEventsPageQuery().imageSliderImages
  const image = useEventsPageQuery().heroImage

  return theme ? (
    <div>
      <Container theme={theme}>
        {theme.name === "Desktop" ? (
          <Home HomeImage={image} path={pageProps.path} />
        ) : (
          <MobileHome HomeImage={image} path={pageProps.path} old={false} />
        )}
        <Introduction />
      </Container>
      <ContentfulSliderFullPage contentfulImages={contentfulImages} path={pageProps.path}/>
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <TextUnderSlider />
        <Venues />
      </Container>
      <Footer />
    </div>
  ) : null
}

export default Events
