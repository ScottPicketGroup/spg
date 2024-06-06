import React from "react"

import Seo from "../components/seo"
import { useTheme } from "styled-components"

import Landing from "../components/pages/scott-picket/scottPickett"

const ScottPicket = props => {
  const theme = useTheme()

  return theme ? (
    <div theme={theme}>
      <Seo title="Scott-Pickett" />
      <Landing pageProps={props} />
    </div>
  ) : null
}

export default ScottPicket
