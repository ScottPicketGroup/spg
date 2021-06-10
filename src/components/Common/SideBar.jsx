import React from "react";

import { useTheme } from "styled-components";
import {
  LeftContainer,
  //  LogoImg
} from "../../components/global/GlobalStyles";

import MenuResusable from "./menuResusable";

const SideBar = ({ path }) => {
  const theme = useTheme();

  return theme ? (
    <LeftContainer theme={theme}>
      <MenuResusable theme={theme}>{/* <LogoImg src={logo}/> */}</MenuResusable>
    </LeftContainer>
  ) : (
    <div></div>
  );
};

export default SideBar;
