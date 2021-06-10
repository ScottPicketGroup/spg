import React, { useState, useLayoutEffect, useEffect } from "react";
import { useLocation } from "@reach/router";
import { useTheme } from "styled-components";
import { Link } from "gatsby";
import LogoW from "../../images/logoWhite.svg";

import {
  MenuDropDownContainer,
  Menu,
  MenuHeading,
  MenuItem,
  BottomLogoContainer,
  BottomLogo,
} from "./styled-components";

import MenuBox from "../Common/Menue";
import SubMenu from "./SubMenue";

const MenuResusable = () => {
  const location = useLocation();
  const theme = useTheme();
  const [offset, setOffset] = useState(0);
  const [open, setOpen] = useState(true);

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

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 50) setOpen(false);
    };
  });

  console.log(open);

  return (
    <div>
      <Menu theme={theme} onMouseLeave={() => setOpen(false)}>
        <MenuHeading theme={theme} onMouseOver={() => setOpen(true)}>
          Menu
        </MenuHeading>
        <MenuDropDownContainer open={open}>
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
          <MenuItem theme={theme} onClick={() => handleOpenSubMenu("Providor")}>
            Providor
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
        </MenuDropDownContainer>
      </Menu>

      <MenuBox show={showSubMenu} handleClose={hideModalSubMenu}>
        <SubMenu
          hideModal={hideModalSubMenu}
          selectedMenu={selectedMenu}
          handleOpenSubMenu={handleOpenSubMenu}
        />
        <BottomLogoContainer>
          <BottomLogo src={LogoW}></BottomLogo>
        </BottomLogoContainer>
      </MenuBox>
    </div>
  );
};

export default MenuResusable;
