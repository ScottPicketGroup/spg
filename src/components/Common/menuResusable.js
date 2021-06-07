import React, { useState, useLayoutEffect, useEffect } from "react"
import { useLocation } from "@reach/router"
import styled, { useTheme } from "styled-components"
import { Link } from "gatsby"

import {
  Menu,
  MenuHeading,
  MenuItem,
  MenuDropDownContainer,
} from "./styled-components"

const MenuResusable = () => {
  const location = useLocation()
  const theme = useTheme()
  const [offset, setOffset] = useState(0)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 50) setOpen(false)
    }
  })

  console.log(open)

  return (
    <Menu theme={theme} onMouseLeave={() => setOpen(false)}>
      <MenuHeading theme={theme} onMouseOver={() => setOpen(true)}>
        Menu
      </MenuHeading>
      <MenuDropDownContainer open={open}>
        <MenuItem theme={theme}>
          <Link
            to="/"
            style={{ color: "inherit", textDecoration: "none" }}
            activeStyle={{ fontFamily: `UntitledSansMedium` }}
          >
            Home
          </Link>
        </MenuItem>
        {location.pathname === "/" || location.pathname === "/scott-picket" ? (
          <MenuItem theme={theme}>
            <Link
              to="/scott-picket"
              style={{
                color: "inherit",
                textDecoration: "none",
                paddingLeft: ".75rem",
              }}
              activeStyle={{ fontFamily: `UntitledSansMedium` }}
            >
              Scott Picket
            </Link>
          </MenuItem>
        ) : null}

        <MenuItem theme={theme}>Book a table</MenuItem>

        <MenuItem theme={theme}>
          <Link
            to="/events"
            style={{ color: "inherit", textDecoration: "none" }}
            activeStyle={{ fontFamily: `UntitledSansMedium` }}
          >
            Events
          </Link>
        </MenuItem>

        <MenuItem theme={theme}>What's On</MenuItem>
        <MenuItem theme={theme}>Gift Vouchers</MenuItem>
        <MenuItem theme={theme}>Provider</MenuItem>
        <MenuItem theme={theme}>Shop</MenuItem>
        <MenuItem theme={theme}>
          {" "}
          <Link
            to="/careers"
            style={{ color: "inherit", textDecoration: "none" }}
            partiallyActive={true}
            activeStyle={{ fontFamily: `UntitledSansMedium` }}
          >
            Careers
          </Link>
        </MenuItem>
        <MenuItem theme={theme}>Contact</MenuItem>
      </MenuDropDownContainer>
    </Menu>
  )
}

export default MenuResusable
