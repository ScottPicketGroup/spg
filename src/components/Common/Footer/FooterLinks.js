import React from "react"
import { useTheme } from "styled-components"
import { MenuItem } from "./Footer"
import { useFooterData } from "./useFooterQuery"

const FooterLinks = () => {
  const links = useFooterData().edges[0].node.restaurants
  console.log("links", links)
  const theme = useTheme()
  return theme ? (
    <>
      {links &&
        links.map((restaurant, i) => (
          <MenuItem theme={theme} key={i}>
            <a
              href={restaurant.url}
              target="_blank"
              style={{ textDecoration: `none`, color: `white` }}
            >
              {restaurant.label}
            </a>
          </MenuItem>
        ))}
    </>
  ) : (
    <></>
  )
}

export default FooterLinks
