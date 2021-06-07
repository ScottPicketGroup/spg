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

import { Menu, MenuHeading, Menu2Item } from "../../global/fontStyles";

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

const BookATable = ({ path }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <Menu theme={theme} inModal={true}>
        <Menu2Item theme={theme}>
          <Link
            to="/events"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            SP Events(Catering)
          </Link>
        </Menu2Item>
        <Menu2Item theme={theme}>
          <Link
            to="/events"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            In-Venue Private Function
          </Link>
        </Menu2Item>
      </Menu>
    </div>
  ) : (
    <div></div>
  );
};

export default BookATable;
