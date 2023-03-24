import React, {useState} from "react"
import { useTheme } from "styled-components"
import { globalHistory } from "@reach/router"
import { Link } from "gatsby"
import { Menu, MenuItem } from "../../global/fontStyles"
import TableMenu from "./../SubMenus/BookTableMenu"
import GiftVoucher from "./../SubMenus/GiftVoucher"
import Provider from "./../SubMenus/Provider"
import Events from "./../SubMenus/Events"
import InstaIcon from "../../../images/social-icons/InstaLogo"

import LogoWhite from "../../../images/logoWhite.svg"
import expandIcon from "../../../images/expandIcon.png"

import MenuBox from "../../Common/Menue"
import { SectionContainer } from "../../global/GlobalStyles"
import { CloseBtn, LeftContainer, LogoImg, MenuHeader, RightContainer } from "../MobileHeader/styled-components"

const MobileMenu = ({
  show,
  setShow,
  path,
}) => {
  const theme = useTheme()
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState(null)

  const hideModal = arg => {
    setShow(false)
    hideModalSubMenu()
  }
  const hideModalSubMenu = arg => {
    setShowSubMenu(false)
    setSelectedMenu(null)
  }
  const handleOpenSubMenu = key => {
    setShowSubMenu(true)
    setSelectedMenu(key)
  }
  const handleRedirect = path => {
    hideModal()
    setTimeout(() => globalHistory.navigate(path), 200)
  }

  return (
    <>
   <MenuBox
        show={show}
        handleClose={hideModal}
        // openPos={Pos.CM_TOP_CENTER}
      >
        <SectionContainer >
          <MenuHeader theme={theme}>
            <LeftContainer>
              <LogoImg
                src={LogoWhite}
                theme={theme}
                style={{ height: `60%` }}
              />
            </LeftContainer>
            <RightContainer device={theme.name}>
              <CloseBtn
                theme={theme}
                onClick={() => setShow(false)}
                style={{ display: `flex`, alignItems: `center` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.267"
                  height="14.267"
                  viewBox="0 0 14.267 14.267"
                  style={{ marginRight: `1rem` }}
                >
                  <g
                    id="Group_6099"
                    data-name="Group 6099"
                    transform="translate(-1684.668 -39.469)"
                  >
                    <path
                      id="Path_11769"
                      data-name="Path 11769"
                      d="M2807.2-13381l13.206,13.206"
                      transform="translate(-1122 13421)"
                      fill="none"
                      stroke="#fdf9ee"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Path_11770"
                      data-name="Path 11770"
                      d="M0,0,13.206,13.206"
                      transform="translate(1698.404 40) rotate(90)"
                      fill="none"
                      stroke="#fdf9ee"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
                Close
              </CloseBtn>
            </RightContainer>
          </MenuHeader>
        </SectionContainer>

        <Menu theme={theme}>
          <MenuItem
            theme={theme}
            bold={path && path === "/"}
            onClick={() => {
              handleRedirect("/")
            }}
          >
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
          </MenuItem>
          <MenuItem
            theme={theme}
            bold={path && path.includes("/scott-pickett")}
            onClick={() => {
              handleRedirect("/scott-pickett")
            }}
          >
            <Link
              to="/scott-pickett"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Scott Pickett
            </Link>
          </MenuItem>

          <MenuItem
            theme={theme}
            expandIcon={expandIcon}
            onClick={() => handleOpenSubMenu("bookATable")}
          >
            Book a Table
          </MenuItem>

          <MenuItem
            theme={theme}
            bold={path && path.includes("/events")}
            expandIcon={expandIcon}
            onClick={() => handleOpenSubMenu("events")}
          >
            Events
          </MenuItem>
          <MenuItem
            theme={theme}
            bold={path && path.includes("/whatson")}
            onClick={() => {
              handleRedirect("/whatson")
            }}
          >
            {" "}
            <Link
              to="/whatson"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              What's On
            </Link>
          </MenuItem>
          <MenuItem theme={theme} style={{ color: "white !important" }}>
            <a
              href="https://apps.giverapp.net/pickettandco/"
              target="_blank"
              style={{ textDecoration: `none`, color: `inherit` }}
            >
              Gift Vouchers
            </a>
          </MenuItem>
          {/* <MenuItem
            theme={theme}
            expandIcon={expandIcon}
            onClick={() => handleOpenSubMenu("provider")}
          >
            Providoor
          </MenuItem> */}
          {/* <MenuItem theme={theme}>Shop</MenuItem> */}
          <MenuItem
            theme={theme}
            bold={path && path.includes("/pantry")}
            onClick={() => {
              handleRedirect("/pantry")
            }}
          >
            {" "}
            <Link
              to="/pantry"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              SP Pantry
            </Link>
          </MenuItem>
          <MenuItem
            theme={theme}
            bold={path && path.includes("/careers")}
            onClick={() => {
              handleRedirect("/careers")
            }}
          >
            {" "}
            <Link
              to="/careers"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Careers
            </Link>
          </MenuItem>
          <MenuItem
            theme={theme}
            bold={path && path.includes("/contact")}
            onClick={() => {
              handleRedirect("/contact")
            }}
          >
            Contact
          </MenuItem>
        </Menu>

        <InstaIcon />
      </MenuBox>
      <MenuBox show={showSubMenu} handleClose={hideModalSubMenu}>
        <SectionContainer>
          <MenuHeader theme={theme}>
            <LeftContainer>
              <LogoImg src={LogoWhite} theme={theme} />
            </LeftContainer>
            <RightContainer device={theme.name}>
              <CloseBtn
                theme={theme}
                onClick={() => hideModal(false)}
                style={{ display: `flex`, alignItems: `center` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.267"
                  height="14.267"
                  viewBox="0 0 14.267 14.267"
                  style={{ marginRight: `1rem` }}
                >
                  <g
                    id="Group_6099"
                    data-name="Group 6099"
                    transform="translate(-1684.668 -39.469)"
                  >
                    <path
                      id="Path_11769"
                      data-name="Path 11769"
                      d="M2807.2-13381l13.206,13.206"
                      transform="translate(-1122 13421)"
                      fill="none"
                      stroke="#fdf9ee"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Path_11770"
                      data-name="Path 11770"
                      d="M0,0,13.206,13.206"
                      transform="translate(1698.404 40) rotate(90)"
                      fill="none"
                      stroke="#fdf9ee"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
                Close
              </CloseBtn>
            </RightContainer>
          </MenuHeader>
        </SectionContainer>
        <CloseBtn theme={theme} onClick={hideModalSubMenu} opacity="0.5">
          Back
        </CloseBtn>
        {(() => {
          switch (selectedMenu) {
            case "bookATable":
              return <TableMenu hideModal={hideModal} />
            case "giftVoucher":
              return <GiftVoucher hideModal={hideModal} />
            case "provider":
              return <Provider hideModal={hideModal} />
            case "events":
              return <Events hideModal={hideModal} />
            default:
              return <div></div>
          }
        })()}
      </MenuBox>
    </>
  )
}

export default MobileMenu
