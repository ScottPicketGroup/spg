import React from "react";
import styled, { useTheme } from "styled-components";


import { Link } from "gatsby";
import { globalHistory } from "@reach/router";
import InstaIcon from "../../../images/social-icons/InstaLogo";

import { Menu,Menu3Item } from "../../global/fontStyles";

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

const BookATable = ({ hideModal }) => {
  const theme = useTheme();
  const handleRedirect = (path) => {
    hideModal();
    setTimeout(() => globalHistory.navigate(path), 200);
  };
  return theme ? (
    <div>
      <Menu theme={theme} inModal={true}>
        <Menu3Item onClick={() => handleRedirect("/sp-events")} theme={theme}>
          <a 
          href="https://www.spevents.com.au"
          target="_blank"
          style={{ color: "inherit", textDecoration: "none", textTransform: "none" }}>
          SP Events – Offsite events and catering
          </a>
        </Menu3Item>
        <Menu3Item onClick={() => handleRedirect("/events")} theme={theme}>
          <Link 
          to="/events"
          style={{ color: "inherit", textDecoration: "none", textTransform: "none" }}>
          Private dining at our restaurants
          </Link>
        </Menu3Item>
      </Menu>
      
      {theme.name === "Mobile" && <InstaIcon />}
    </div>
  ) : (
    <div></div>
  );
};

export default BookATable;
