import React from "react"
import { useTheme } from "styled-components"
import { Container } from "../../global/GlobalStyles"
import { getImage } from "gatsby-plugin-image"


import Footer from "../../Common/Footer/Footer"
import Home from "../../Common/DesktopHome"

import { useWhatsOnPageData } from "./WhatsOnPageQuery"
import Introduction from "./Introduction"
import EventsSection from "./EventsSection"
import MobileHome from "../../Common/MobileHome"

const Landing = ({ pageProps }) => {
  const theme = useTheme()
  const {
    heroImage, pageHeading, introduction, whatsOnEvents
  } = useWhatsOnPageData()

 
  const image = getImage(heroImage)

  return theme ? (
    <div>
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
      {theme.name === "Desktop" ? (
          <Home HomeImage={image} path={pageProps.path} />
        ) : (
          <MobileHome HomeImage={image} path={pageProps.path} old={false}/>
        )}
        <Introduction introduction={introduction}/>
        <EventsSection whatsOnEvents={whatsOnEvents} path={pageProps.path}/>
      </Container>

      <Footer />
    </div>
  ) : (
    <div></div>
  )
}

export default Landing
