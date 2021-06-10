import React, { useState } from "react";

import { useTheme } from "styled-components";
import { globalHistory } from "@reach/router";
import {
  SectionContainer,
  ImageContainer,
  ImageView,
  ImageDiv,
} from "../../global/GlobalStyles";

import { Link } from "gatsby";
import styled from "styled-components";

import { Menu, MenuHeading, Menu3Item } from "../../global/fontStyles";
import fbIcon from "../../../images/fb.png";
import instaIcon from "../../../images/insta.png";

export const FooterLogo = styled.img`
  margin-top: 3rem;
  margin-right: 1rem;
`;





export const CloseBtn = styled.div`
  font-size: 16px;
  padding-top: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.body};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansMedium};
`;


const BookATable = ({ hideModal }) => {
  const theme = useTheme();
  const handleRedirect = (path) => {
    hideModal();
    setTimeout(() => globalHistory.navigate(path), 200);
  };
  return theme ? (
    <div>
      <Menu theme={theme} inModal={true}>
        <Menu3Item
          onClick={() => {
            handleRedirect("#");
          }}
          theme={theme}
        >
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            Chancery Lane
          </Link>
        </Menu3Item>
        <Menu3Item
          onClick={() => {
            handleRedirect("#");
          }}
          theme={theme}
        >
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            Estelle{" "}
          </Link>
        </Menu3Item>
        <Menu3Item
          onClick={() => {
            handleRedirect("#");
          }}
          theme={theme}
        >
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            Longrain{" "}
          </Link>
        </Menu3Item>
        <Menu3Item
          onClick={() => {
            handleRedirect("#");
          }}
          theme={theme}
        >
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            Matilda{" "}
          </Link>
        </Menu3Item>
        <Menu3Item
          onClick={() => {
            handleRedirect("#");
          }}
          theme={theme}
        >
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            Pastore{" "}
          </Link>
        </Menu3Item>
      </Menu>
      {theme.name === "Mobile" && <FooterLogo src={fbIcon} />}
      {theme.name === "Mobile" && <FooterLogo src={instaIcon} />}
    </div>
  ) : (
    <div></div>
  );
};

export default BookATable;
