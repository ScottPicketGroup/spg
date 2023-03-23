import React from "react"
import Seo from "../components/seo"
import { useTheme } from "styled-components"
import Landing from "../components/pages/sp-pantry/landing"

const Pantry = props => {
  const theme = useTheme()

  return theme ? (
    <div theme={theme}>
      <Seo title="Scott Pickett Pantry" />
      <Landing pageProps={props} />
    </div>
  ) : (
    <div></div>
  )
}

export default Pantry
