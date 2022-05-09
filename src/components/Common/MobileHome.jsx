import React, { useState } from "react"

import { useTheme } from "styled-components"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import MobileHeader from "./MobileHeader/MobileHeader"
import MobileMenu from "./MobileMenu/MobileMenu"

const MobileHome = ({ HomeImage, path, old }) => {
  const theme = useTheme()

  const [show, setShow] = useState(false)

 
  return theme ? (
    <div>
      <MobileHeader setShow={setShow} old={old} />
      {old ? (
        <GatsbyImage
          image={getImage(HomeImage)}
          alt="test"
          style={{ width: `100vw`, marginLeft: `0` }}
        />
      ) : (
        <GatsbyImage
          image={getImage(HomeImage)}
          alt="test"
          style={{ width: `100vw`, marginLeft: `-5.24vw`, aspectRatio: `4/3` }}
        />
      )}

      <MobileMenu show={show} setShow={setShow} />
    </div>
  ) : null
}

export default MobileHome
