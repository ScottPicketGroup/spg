import React from "react"

import { useTheme } from "styled-components"
import { globalHistory } from "@reach/router"


import styled from "styled-components"

import { Menu, Menu3Item } from "../../global/fontStyles"

import InstaIcon from "../../../images/social-icons/InstaLogo"

export const FooterLogo = styled.img`
  margin-top: 3rem;
  margin-right: 1rem;
`

export const CloseBtn = styled.div`
  font-size: 16px;
  padding-top: 0.75rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.body};
  font-family: ${props => props.theme.fontFamily.UntitledSansMedium};
`

const BookATable = ({ hideModal }) => {
  const theme = useTheme()
  const handleRedirect = path => {
    hideModal()
    setTimeout(() => globalHistory.navigate(path), 200)
  }
  return theme ? (
    <div>
      <Menu theme={theme} inModal={true}>
        <Menu3Item
          onClick={() => {
            handleRedirect("#")
          }}
          theme={theme}
        >
          <a
            href="https://www.sevenrooms.com/landing/chancerylane?_ga=2.116185679.893556211.1624336511-2029271887.1616714684&_gac=1.158798408.1621900158.Cj0KCQjwna2FBhDPARIsACAEc_XbWEp1kOKJC9B0Fh535zSxeXI2gepv3_hGx6XJPBGLDtY2-0TEBg8aAvvyEALw_wcB
"
            target="_blank"
            style={{ textDecoration: `none`, color: `inherit` }}
          >
            Chancery Lane
          </a>
        </Menu3Item>
        <Menu3Item
          onClick={() => {
            handleRedirect("#")
          }}
          theme={theme}
        >
          <a
            href="https://www.sevenrooms.com/landing/estelle"
            target="_blank"
            style={{ textDecoration: `none`, color: `inherit` }}
          >
            Estelle
          </a>
        </Menu3Item>
        <Menu3Item
          theme={theme}
        >
          <a
            href="https://www.sevenrooms.com/landing/longrainmelbourne?_ga=2.139077232.2103104190.1624431956-564500719.1605505484"
            target="_blank"
            style={{ textDecoration: `none`, color: `inherit` }}
          >Longrain</a>
        </Menu3Item>
        <Menu3Item
               theme={theme}
               >
                 <a
                   href="https://www.sevenrooms.com/landing/matilda"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                 >Matilda</a>
        </Menu3Item>
        <Menu3Item
               theme={theme}
               >
                 <a
                   href=" https://www.thefork.com.au/make-booking/pastore-restaurant?mode=Widget&referrerUrl=http://https://www.accorhotels.com/gb/hotel-B2U8-hotel-chadstone-melbourne-opening-november-2019/index.shtml"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                 >Pastore</a>
        </Menu3Item>
        {/* <Menu3Item
          onClick={() => {
            handleRedirect("#")
          }}
          theme={theme}
        >
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            Pastore{" "}
          </Link>
        </Menu3Item> */}
      </Menu>
    
      {theme.name === "Mobile" && <InstaIcon />}
    </div>
  ) : (
    <div></div>
  )
}

export default BookATable
