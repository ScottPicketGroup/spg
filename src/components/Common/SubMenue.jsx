import React, { useRef, useEffect } from "react";
import { useLocation } from "@reach/router";
import { useTheme } from "styled-components";
import { SectionContainer } from "../global/GlobalStyles";

import { Link } from "gatsby";
import styled from "styled-components";
import LogoWhite from "../../images/logoWhite.svg";

import fbIcon from "../../images/fb.png";
import instaIcon from "../../images/insta.png";

import { Menu, MenuHeading, MenuItem } from "../global/fontStyles";
import TableMenu from "./SubMenus/BookTableMenu";
import GiftVoucher from "./SubMenus/GiftVoucher";
import Provider from "./SubMenus/Provider";
import Events from "./SubMenus/Events";

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
  display: flex;
  justify-content: flex-start;
  width: 33%;
`;
export const RightContainer = styled.div`
  display: flex;
  width: 67%;
  justify-content: ${(props) => (props.justifyEnd ? "flex-end" : "flex-start")};
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
  cursor: pointer;
  color: ${(props) => props.theme.colors.body};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansMedium};
`;
export const MenuHeader = styled.div`
  display: flex;
  width: 100%;
`;

export const FooterLogo = styled.img`
  margin-top: 3rem;
  margin-right: 1rem;
`;
export const CloseX = styled.div`
  position: absolute;
  right: 3.94rem;
  cursor: url(hand.cur), pointer;
`;

const SubMenu = ({ hideModal, selectedMenu, handleOpenSubMenu }) => {
  const theme = useTheme();
  const location = useLocation();
  return theme ? (
    <SectionContainer>
      <CloseX onClick={() => hideModal()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.914"
          height="20.914"
          viewBox="0 0 39.914 39.914"
        >
          <path
            id="LaTrobe_Icon_Library-20"
            data-name="LaTrobe Icon Library-20"
            d="M39.914,1.414,38.5,0,19.957,18.543,1.414,0,0,1.414,18.543,19.957,0,38.5l1.414,1.414L19.957,21.371,38.5,39.914,39.914,38.5,21.371,19.957Z"
            fill="#f0eee7"
          />
        </svg>
      </CloseX>
      <LeftContainer>
        <Menu theme={theme} inModal={true} inModal={true}>
          <MenuHeading theme={theme} onClick={() => hideModal()}>
            Close
          </MenuHeading>

          <MenuItem theme={theme}>
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
              activeStyle={{ fontFamily: `UntitledSansMedium` }}
            >
              Home
            </Link>
          </MenuItem>
          {location.pathname === "/" ||
          location.pathname === "/scott-picket" ? (
            <MenuItem theme={theme}>
              <Link
                to="/scott-picket"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  paddingLeft: ".75rem",
                }}
                activeStyle={{ fontFamily: `UntitledSansMedium` }}
              >
                Scott Picket
              </Link>
            </MenuItem>
          ) : null}
          <MenuItem
            theme={theme}
            onClick={() => handleOpenSubMenu("bookATable")}
          >
            Book a table
          </MenuItem>

          <MenuItem theme={theme} onClick={() => handleOpenSubMenu("events")}>
            Events
          </MenuItem>

          <MenuItem theme={theme}>
            <Link
              to="/whatson"
              onClick={() => handleOpenSubMenu("bookATable")}
              style={{ color: "inherit", textDecoration: "none" }}
              partiallyActive={true}
              activeStyle={{ fontFamily: `UntitledSansMedium` }}
            >
              What's On
            </Link>
          </MenuItem>
          <MenuItem
            theme={theme}
            onClick={() => handleOpenSubMenu("giftVoucher")}
          >
            Gift Vouchers
          </MenuItem>
          <MenuItem theme={theme} onClick={() => handleOpenSubMenu("provider")}>
            Provider
          </MenuItem>
          <MenuItem theme={theme}>Shop</MenuItem>
          <MenuItem theme={theme}>
            {" "}
            <Link
              to="/careers"
              style={{ color: "inherit", textDecoration: "none" }}
              partiallyActive={true}
              activeStyle={{ fontFamily: `UntitledSansMedium` }}
            >
              Careers
            </Link>
          </MenuItem>
          <MenuItem theme={theme} onClick={() => handleOpenSubMenu("provider")}>
            Provider
          </MenuItem>
          <MenuItem theme={theme}>Shop</MenuItem>
          <MenuItem theme={theme}>
            {" "}
            <Link
              to="/careers"
              style={{ color: "inherit", textDecoration: "none" }}
              partiallyActive={true}
              activeStyle={{ fontFamily: `UntitledSansMedium` }}
            >
              Careers
            </Link>
          </MenuItem>
          <MenuItem theme={theme}>Contact</MenuItem>
        </Menu>
      </LeftContainer>
      <RightContainer style={{ marginTop: `54px` }}>
        {(() => {
          switch (selectedMenu) {
            case "bookATable":
              return <TableMenu />;
            case "giftVoucher":
              return <GiftVoucher />;
            case "provider":
              return <Provider />;
            case "events":
              return <Events />;
            default:
              return <div></div>;
          }
        })()}
      </RightContainer>
    </SectionContainer>
  ) : (
    <div></div>
  );
};

export default SubMenu;
