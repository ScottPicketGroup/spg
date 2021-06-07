import React, { useState } from "react";

import { useTheme } from "styled-components";
import { TextContainer } from "../../components/global/GlobalStyles";
import { Link } from "gatsby";

import { Menu, MenuHeading, MenuItem } from "../global/fontStyles";
import MenuBox from "../Common/Menue";
import SubMenu from "./SubMenue";

const SideBar = ({ path }) => {
  const theme = useTheme();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const hideModal = () => {
    setShowSubMenu(false);
    setSelectedMenu(null);
  };

  const handleOpenSubMenu = (key) => {
    setShowSubMenu(true);
    setSelectedMenu(key);
  };
  return theme ? (
    <TextContainer theme={theme}>
      <Menu theme={theme}>
        <MenuHeading theme={theme}>Menu</MenuHeading>

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

        <MenuItem theme={theme} onClick={() => handleOpenSubMenu("bookATable")}>
          Book a table
        </MenuItem>

        <MenuItem
          onClick={() => handleOpenSubMenu("events")}
          theme={theme}
          bold={path && path.includes("/events")}
        >
          Events
        </MenuItem>

        <MenuItem theme={theme} bold={path && path.includes("/whatson")}>
          <Link
            to="/whatson"
            style={{ color: "inherit", textDecoration: "none" }}
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
        <MenuItem theme={theme} bold={path && path.includes("/careers")}>
          <Link
            to="/careers"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Careers
          </Link>
        </MenuItem>
        <MenuItem theme={theme}>Contact</MenuItem>
      </Menu>

      <MenuBox
        show={showSubMenu}
        handleClose={hideModal}
        // openPos={Pos.CM_TOP_CENTER}
      >
        <SubMenu
          hideModal={hideModal}
          path={path}
          selectedMenu={selectedMenu}
          handleOpenSubMenu={handleOpenSubMenu}
        />
      </MenuBox>
    </TextContainer>
  ) : (
    <div></div>
  );
};

export default SideBar;
