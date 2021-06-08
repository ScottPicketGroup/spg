import React, { useState } from "react";

import { useTheme } from "styled-components";
import {
  SectionContainer,
  ImageContainer,
  ImageView,
  ImageDiv,
} from "../global/GlobalStyles";

import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "../../images/logo.svg";
import LogoWhite from "../../images/logoWhite.svg";
import expandIcon from "../../images/expandIcon.png";

import MenuBox from "../Common/Menue";
import { Menu, MenuHeading, MenuItem } from "../global/fontStyles";
import TableMenu from "./SubMenus/BookTableMenu";
import GiftVoucher from "./SubMenus/GiftVoucher";
import Provider from "./SubMenus/Provider";
import Events from "./SubMenus/Events";
import footerLogo from "../../images/Group 6228.png";

export const FooterLogo = styled.img`
  margin-top: 3rem;
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
  cursor: pointer;
  color: ${(props) => props.theme.colors.body};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansMedium};
  opacity: ${(props) => props.opacity && props.opacity};
`;
export const MenuHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 1rem;
  margin-bottom: 2.25rem;
`;

const MobileHome = ({ HomeImage, path }) => {
  const theme = useTheme();

  const [show, setShow] = useState(false);

  const hideModal = (arg) => {
    setShow(false);
    hideModalSubMenu();
  };

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const hideModalSubMenu = (arg) => {
    setShowSubMenu(false);
    setSelectedMenu(null);
  };
  const handleOpenSubMenu = (key) => {
    setShowSubMenu(true);
    setSelectedMenu(key);
  };

  return theme ? (
    <div style={{padding: `0 1rem`}}>
      <SectionContainer style={{height: `58px`}}>
        <InnerContainer theme={theme} top={true}>
          <LeftContainer>
           <LogoImg src={Logo}/>
          </LeftContainer>
          <RightContainer device={theme.name}>
            <MenuBtn theme={theme} onClick={() => setShow(true)}>
              Menu
            </MenuBtn>
          </RightContainer>
        </InnerContainer>
      </SectionContainer>
      <SectionContainer>
        <ImageContainer theme={theme} device={theme.name}>
          <ImageView>
            <ImageDiv
              theme={theme}
              src={HomeImage}
              device={theme.name}
            ></ImageDiv>
          </ImageView>
        </ImageContainer>
      </SectionContainer>
      <MenuBox
   
        show={show}
        handleClose={hideModal}
        // openPos={Pos.CM_TOP_CENTER}
      >
        <SectionContainer    style={{marginTop: `-1.84rem`, height: `58px`}}>
          <MenuHeader theme={theme}>
            <LeftContainer>
              <LogoImg src={LogoWhite} theme={theme} style={{height: `60%`}}/>
            </LeftContainer>
            <RightContainer device={theme.name}>
              <CloseBtn theme={theme} onClick={() => setShow(false)} style={{display: `flex`, alignItems: `center`}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.267" height="14.267" viewBox="0 0 14.267 14.267" style={{marginRight: `1rem`}} >
  <g id="Group_6099" data-name="Group 6099" transform="translate(-1684.668 -39.469)">
    <path id="Path_11769" data-name="Path 11769" d="M2807.2-13381l13.206,13.206" transform="translate(-1122 13421)" fill="none" stroke="#fdf9ee" stroke-width="1.5"/>
    <path id="Path_11770" data-name="Path 11770" d="M0,0,13.206,13.206" transform="translate(1698.404 40) rotate(90)" fill="none" stroke="#fdf9ee" stroke-width="1.5"/>
  </g>
</svg>

                  Close
              </CloseBtn>
            </RightContainer>
          </MenuHeader>
        </SectionContainer>

        <Menu theme={theme}>
          

          <MenuItem theme={theme} bold={path && path === "/"}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
          </MenuItem>
          <MenuItem theme={theme} bold={path && path.includes("/scott-picket")}>
            <Link
              to="/scott-picket"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Scott Picket
            </Link>
          </MenuItem>

          <MenuItem
            theme={theme}
            expandIcon={expandIcon}
            onClick={() => handleOpenSubMenu("bookATable")}
          >
            Book a table
          </MenuItem>

          <MenuItem
            theme={theme}
            bold={path && path.includes("/events")}
            expandIcon={expandIcon}
            onClick={() => handleOpenSubMenu("events")}
          >
            Events
          </MenuItem>
          <MenuItem theme={theme} bold={path && path.includes("/whatson")}>
            {" "}
            <Link
              to="/whatson"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              What's On
            </Link>
          </MenuItem>
          <MenuItem
            theme={theme}
            expandIcon={expandIcon}
            onClick={() => handleOpenSubMenu("giftVouchers")}
          >
            Gift Vouchers
          </MenuItem>
          <MenuItem
            theme={theme}
            expandIcon={expandIcon}
            onClick={() => handleOpenSubMenu("provider")}
          >
            Provider
          </MenuItem>
          <MenuItem theme={theme}>Shop</MenuItem>
          <MenuItem theme={theme} bold={path && path.includes("/careers")}>
            {" "}
            <Link
              to="/careers"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Careers
            </Link>
          </MenuItem>
          <MenuItem theme={theme}>Contact</MenuItem>
        </Menu>
        <FooterLogo src={footerLogo} />
      </MenuBox>

      <MenuBox show={showSubMenu} handleClose={hideModalSubMenu}>
        <SectionContainer>
          <MenuHeader theme={theme}>
            <LeftContainer>
              <LogoImg src={LogoWhite} theme={theme} />
            </LeftContainer>
            <RightContainer device={theme.name}>
              <CloseBtn theme={theme} onClick={() => hideModal()}>
                X Close
              </CloseBtn>
            </RightContainer>
          </MenuHeader>
        </SectionContainer>
        <CloseBtn theme={theme} onClick={hideModalSubMenu} opacity="0.5">
          Back
        </CloseBtn>
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
      </MenuBox>
    </div>
  ) : (
    <div></div>
  );
};

export default MobileHome;
