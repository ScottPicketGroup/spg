import React, { useState } from "react";

import { useTheme } from "styled-components";
import {
  SectionContainer,
  ImageContainer,
  ImageView,
  ImageDiv,
} from "../../global/GlobalStyles";

import { Link } from "gatsby";
import styled from "styled-components";
import { globalHistory } from "@reach/router";

import { Menu, MenuHeading, Menu3Item } from "../../global/fontStyles";
import fbIcon from "../../../images/fb.png";
import instaIcon from "../../../images/insta.png";

export const FooterLogo = styled.img`
  margin-top: 3rem;
  margin-right: 1rem;
`;
export const InnerContainer = styled.div`
  margin-top: ${(props) =>
    props.top === true
      ? "1rem"
      : props.theme.name === "Desktop"
      ? "9rem"
      : "6rem"};
  display: ${(props) => (props.displayBlock === true ? "block" : "flex")};

  width: 100%;
`;
export const LeftContainer = styled.div`
  display: inline;
  width: 42%;
`;
export const RightContainer = styled.div`
  display: ${(props) => (props.device === "Mobile" ? "flex" : "inline")};
  width: 58%;
  justify-content: ${(props) =>
    props.device === "Mobile" ? "flex-end" : "flex-start"};
`;
export const MenuBtn = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansMedium};
  cursor: ${(props) => (props.link ? "pointer" : "text")};

  &:hover {
    color: ${(props) =>
      props.link ? props.theme.colors.hoverText : props.theme.colors.text};
  }
`;
export const LogoImg = styled.img`
  display: inline;
  width: ${(props) => props.theme.name === "Mobile" && "100px"};
`;

export const CloseBtn = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.body};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansMedium};
`;
export const MenuHeader = styled.div`
  display: flex;
  width: 100%;
`;

const GiftVoucher = ({ hideModal }) => {
  const theme = useTheme();
  const handleRedirect = (path) => {
    hideModal();
    setTimeout(() => globalHistory.navigate(path), 200);
  };
  return theme ? (
    <div>
      <Menu theme={theme} inModal={true}>
      <Menu3Item  theme={theme}>
                 <a
                   href="https://apps.giverapp.net/pickettandco/"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                 >Scott Pickett Group</a>
        </Menu3Item>
        <Menu3Item  theme={theme}>
                 <a
                   href="https://apps.giverapp.net/chancerylane/product/digital-voucher/"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                 >Chancery Lane</a>
        </Menu3Item>
        <Menu3Item  theme={theme}>
                 <a
                   href=" https://theestelle.giverapp.net/"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                 >Estelle</a>
        </Menu3Item>

        <Menu3Item  theme={theme}>
                 <a
                   href="https://apps.giverapp.net/longrain/product/digital-voucher/"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                 >Longrain</a>
        </Menu3Item>

        <Menu3Item  theme={theme}>
                 <a
                   href="https://matilda159.giverapp.net/"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                 >Matilda</a>
        </Menu3Item>

        <Menu3Item  theme={theme}>
                 <a
                   href="https://pickettsdeli.giverapp.net/"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                 >Pickett's Deli</a>
        </Menu3Item>
        {/* <Menu3Item
          onClick={() => {
            handleRedirect("#");
          }}
          theme={theme}
        >
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            Longsong{" "}
          </Link>
        </Menu3Item>
        <Menu3Item
          onClick={() => {
            handleRedirect("#");
          }}
          theme={theme}
        >
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            Le Shoppe{" "}
          </Link>
        </Menu3Item> */}
      </Menu>
      
      {theme.name === "Mobile" && <FooterLogo src={instaIcon} />}{" "}
    </div>
  ) : (
    <div></div>
  );
};

export default GiftVoucher;
