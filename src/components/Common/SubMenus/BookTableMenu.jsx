import React from "react"

import { useTheme } from "styled-components"
import { globalHistory } from "@reach/router"


import styled from "styled-components"

import { Menu, Menu3Item } from "../../global/fontStyles"

import InstaIcon from "../../../images/social-icons/InstaLogo"
import {useSubMenuData} from './subMenusQuery'


const BookATable = ({ hideModal }) => {
  const theme = useTheme()
  const handleRedirect = path => {
    hideModal()
    setTimeout(() => globalHistory.navigate(path), 200)
   
  }
  const links = useSubMenuData().contentfulBookATableLinksInMenu.bookATableLInk

  
  return theme ? (
    <div>
      <Menu theme={theme} inModal={true}>
       {
         links.map((link, i) => (
          <Menu3Item
          onClick={() => {
            handleRedirect("#")
          }}
          theme={theme}
        >
          <a
            href={link.linkUrl}
            target="_blank"
            style={{ textDecoration: `none`, color: `inherit` }}
          >
            {link.linkLabel}
          </a>
        </Menu3Item>
         ))
       }
       
      
 
      </Menu>
    
      {theme.name === "Mobile" && <InstaIcon />}
    </div>
  ) : (
    <div></div>
  )
}

export default BookATable
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