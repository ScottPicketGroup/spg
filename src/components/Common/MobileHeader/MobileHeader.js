import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { InnerContainer, SectionContainer,  } from '../../global/GlobalStyles'

import Logo from "../../../images/logo.svg";
import { useTheme } from "styled-components";
import { LeftContainer, LogoImg, MenuBtn, RightContainer } from './styled-components'
const MobileHeader = ({setShow}) => {
    const theme = useTheme();
  return (
    <SectionContainer
    style={{ marginBottom: `.75rem`, display: 'block'}}
  >
    <InnerContainer theme={theme} top={true}>
          <LeftContainer>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <LogoImg src={Logo} />
            </Link>
          </LeftContainer>
          <RightContainer device={theme.name}>
            <MenuBtn theme={theme} onClick={() => setShow(true)}>
              Menu
            </MenuBtn>
          </RightContainer>
        </InnerContainer>
        </SectionContainer>
  )
}

export default MobileHeader
