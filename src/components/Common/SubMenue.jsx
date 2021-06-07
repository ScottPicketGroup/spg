import React from "react";

import { useTheme } from "styled-components";
import { SectionContainer } from "../global/GlobalStyles";

import { Link } from "gatsby";
import styled from "styled-components";
import LogoWhite from "../../images/logoWhite.svg";

import fbIcon from "../../images/fb.png";
import instaIcon from "../../images/insta.png";

import { Menu, MenuItem } from "../global/fontStyles";
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
  width: 42%;
`;
export const RightContainer = styled.div`
  display: flex;
  width: 58%;
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

const SubMenu = ({ hideModal, selectedMenu, handleOpenSubMenu }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <SectionContainer>
        <MenuHeader theme={theme}>
          <LeftContainer>
            <LogoImg src={LogoWhite} theme={theme} inModal={true} />
          </LeftContainer>
          <RightContainer device={theme.name} justifyEnd={true}>
            <CloseBtn theme={theme} inModal={true} onClick={() => hideModal()}>
              X Close
            </CloseBtn>
          </RightContainer>
        </MenuHeader>
      </SectionContainer>

      <SectionContainer>
        <LeftContainer>
          <Menu theme={theme} inModal={true} inModal={true}>
            <MenuItem
              theme={theme}
              inModal={true}
              bold={selectedMenu && selectedMenu === "home"}
            >
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                Home
              </Link>
            </MenuItem>
            <MenuItem
              theme={theme}
              inModal={true}
              bold={selectedMenu && selectedMenu === "scott-picket"}
            >
              <Link
                to="/scott-picket"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Scott Picket
              </Link>
            </MenuItem>

            <MenuItem
              theme={theme}
              inModal={true}
              onClick={() => handleOpenSubMenu("bookATable")}
              bold={selectedMenu && selectedMenu === "bookATable"}
            >
              Book a table
            </MenuItem>

            <MenuItem
              theme={theme}
              inModal={true}
              bold={selectedMenu && selectedMenu === "events"}
              onClick={() => handleOpenSubMenu("events")}
            >
              Events
            </MenuItem>
            <MenuItem
              theme={theme}
              inModal={true}
              bold={selectedMenu && selectedMenu === "whatson"}
            >
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
              inModal={true}
              onClick={() => handleOpenSubMenu("giftVoucher")}
            >
              Gift Vouchers
            </MenuItem>
            <MenuItem
              theme={theme}
              inModal={true}
              onClick={() => handleOpenSubMenu("provider")}
            >
              Provider
            </MenuItem>
            <MenuItem theme={theme} inModal={true}>
              Shop
            </MenuItem>
            <MenuItem
              theme={theme}
              inModal={true}
              bold={selectedMenu && selectedMenu === "careers"}
            >
              {" "}
              <Link
                to="/careers"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Careers
              </Link>
            </MenuItem>
            <MenuItem theme={theme} inModal={true}>
              Contact
            </MenuItem>
          </Menu>
        </LeftContainer>
        <RightContainer>
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

      <FooterLogo src={fbIcon} />
      <FooterLogo src={instaIcon} />
    </div>
  ) : (
    <div></div>
  );
};

export default SubMenu;
