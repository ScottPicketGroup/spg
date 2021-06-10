import React from "react";
import { useLocation } from "@reach/router";
import { useTheme } from "styled-components";
import { SectionContainer } from "../global/GlobalStyles";

import { Link, navigate } from "gatsby";
import styled from "styled-components";

import { Menu, MenuHeading, MenuItem } from "../global/fontStyles";
import TableMenu from "./SubMenus/BookTableMenu";
import GiftVoucher from "./SubMenus/GiftVoucher";
import Provider from "./SubMenus/Provider";
import Events from "./SubMenus/Events";

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 33%;
`;
const RightContainer = styled.div`
  display: flex;
  width: 67%;
  justify-content: ${(props) => (props.justifyEnd ? "flex-end" : "flex-start")};
`;

const CloseX = styled.div`
  position: absolute;
  right: 3.94rem;
  cursor: url(hand.cur), pointer;
`;

const SubMenu = ({ hideModal, selectedMenu, handleOpenSubMenu }) => {
  const theme = useTheme();
  const location = useLocation();

  const handleRedirect = (path) => {
    hideModal();

    setTimeout(() => navigate(path), 200);
  };
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
        <Menu theme={theme} inModal={true}>
          <MenuHeading theme={theme} onClick={() => hideModal()}>
            Close
          </MenuHeading>

          <MenuItem
            theme={theme}
            onClick={() => {
              handleRedirect("/");
            }}
          >
            <Link
              // to="/"
              style={{ color: "inherit", textDecoration: "none" }}
              activeStyle={{ fontFamily: `UntitledSansMedium` }}
            >
              Home
            </Link>
          </MenuItem>

          <MenuItem
            theme={theme}
            onClick={() => {
              handleRedirect("/adapted");
            }}
          >
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              activeStyle={{ fontFamily: `UntitledSansMedium` }}
            >
              AdaptedREM
            </Link>
          </MenuItem>
          {location.pathname === "/" ||
          location.pathname === "/scott-picket" ? (
            <MenuItem
              theme={theme}
              onClick={() => {
                handleRedirect("/scott-picket");
              }}
            >
              <Link
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
            bold={selectedMenu && selectedMenu.includes("bookATable")}
            onClick={() => handleOpenSubMenu("bookATable")}
          >
            Book a table
          </MenuItem>

          <MenuItem
            theme={theme}
            bold={selectedMenu && selectedMenu.includes("events")}
            onClick={() => handleOpenSubMenu("events")}
          >
            Events
          </MenuItem>

          <MenuItem
            theme={theme}
            onClick={() => {
              handleRedirect("/whatson");
            }}
          >
            <Link
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
            bold={selectedMenu && selectedMenu.includes("giftVoucher")}
          >
            Gift Vouchers
          </MenuItem>

          <MenuItem
            theme={theme}
            onClick={() => handleOpenSubMenu("Providor")}
            bold={selectedMenu && selectedMenu.includes("Providor")}
          >
            Providor
          </MenuItem>

          <MenuItem theme={theme}>Shop</MenuItem>
          <MenuItem
            theme={theme}
            onClick={() => {
              handleRedirect("/careers");
            }}
          >
            {" "}
            <Link
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
              return <TableMenu hideModal={hideModal} />;
            case "giftVoucher":
              return <GiftVoucher hideModal={hideModal} />;
            case "Providor":
              return <Provider hideModal={hideModal} />;
            case "events":
              return <Events hideModal={hideModal} />;
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
