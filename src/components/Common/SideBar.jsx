import React, { useState } from "react";

import { useTheme } from "styled-components";
import { LeftContainer, LogoImg } from "../../components/global/GlobalStyles";
import { Link } from "gatsby";
import styled from 'styled-components'
import logo from '../../images/logo.svg'
import MenuResusable from './menuResusable'

export const Menu = styled.div`
  position: fixed;
  top: 4.84rem;
  left: 4.25rem;
  display: flex;
  flex-direction: column;
  color: ${(props) =>
    props.theme.name === "Desktop"
      ? props.theme.colors.text
      : props.theme.colors.body};
`;
export const MenuHeading = styled.div`
  width: 100%;
  position: relative;
  margin: 1.15rem 0;
  font-size: ${(props) => (props.theme.name === "Desktop" ? "28px" : "24px")};
  line-height: ${(props) =>
    props.theme.name === "Desktop" ? "1.3rem" : "1.2rem"};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansMedium};
  text-transform: uppercase;
`;
export const MenuItem = styled.div`
  width: 100%;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: ${(props) => (props.theme.name === "Desktop" ? "28px" : "20px")};
  line-height: ${(props) =>
    props.theme.name === "Desktop" ? "1.3rem" : "1.2rem"};
  text-transform: capitalize;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
`;

const SideBar = ({ path }) => {
  const theme = useTheme();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const hideModal = () => {
    setShowSubMenu(false);
    setSelectedMenu(null);
  };

  const handleOpenSubMenu = (key) => {
    setShowSubMenu(true);
    setSelectedMenu(key);
  };
  return theme ? (
    <LeftContainer theme={theme}>
      <MenuResusable theme={theme}/>
     
      <LogoImg src={logo}/>
    </LeftContainer>
  ) : (
    <div></div>
  );
};

export default SideBar;
