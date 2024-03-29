import React from "react"
import { useTheme } from "styled-components"
import { Container } from "../../global/GlobalStyles"

import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Footer from "../../Common/Footer/Footer"
import Home from "../../Common/DesktopHome"
import ContactFormSproutSend from "./ContactForm/ContactFormSproutSend"
import { useContactData } from "./ContactQuery"
import MobileHome from "../../Common/MobileHome"
import Introduction from "./Introduction/Introduction"

const Landing = ({ pageProps }) => {
  const { pageHeading, heroImage, introduction } = useContactData()

  const image = getImage(heroImage)
  const theme = useTheme()

  return theme ? (
    <div>
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        {theme.name === "Desktop" ? (
          <Home HomeImage={image} path={pageProps.path} />
        ) : (
          <MobileHome HomeImage={image} path={pageProps.path} old={false} />
        )}
        <Introduction pageHeading={pageHeading} introduction={introduction} />
        <ContactFormSproutSend />
      </Container>
      <Footer />
    </div>
  ) : (
    <div></div>
  )
}

export default Landing
