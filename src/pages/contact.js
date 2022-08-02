import React from "react"
import Seo from "../components/seo"
import { useTheme } from "styled-components"

import Landing from "../components/pages/contact/contact"

const WhatsOn = props => {
  const theme = useTheme()

  return theme ? (
    <div theme={theme}>
      <Seo title="Contact" />
      <Landing pageProps={props} />
    </div>
  ) : null
}

export default WhatsOn
