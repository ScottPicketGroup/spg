import React from "react";

import { useTheme } from "styled-components";
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

const Provider = ({ path }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <Menu theme={theme} inModal={true}>
        <Menu3Item theme={theme}>
          <Link to="#" style={{ color: "inherit", textDecoration: "none" }}>
            Matilda{" "}
          </Link>
        </Menu3Item>
        <Menu3Item theme={theme}>
          <Link to="#" style={{ color: "inherit", textDecoration: "none" }}>
            Estelle{" "}
          </Link>
        </Menu3Item>
        <Menu3Item theme={theme}>
          <Link to="#" style={{ color: "inherit", textDecoration: "none" }}>
            Longrain{" "}
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

export default Provider;
