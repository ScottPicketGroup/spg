import React, { useState, useLayoutEffect, useEffect } from "react";
import { useLocation } from "@reach/router";
import { useTheme } from "styled-components";
import { Link } from "gatsby";
import logo from '../../images/logo.svg'
import {
  MenuDropDownContainer,
  Menu,
  MenuHeading,
  MenuItem,
  LogoImg
} from "./styled-components";

import MenuBox from "../Common/Menue";
import SubMenu from "./SubMenue";

const MenuResusable = () => {
  const theme = useTheme();
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
   
         
            <MenuItem theme={theme}>
              <Link
                to="/scott-pickett"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  
                }}
                activeStyle={{ fontFamily: `UntitledSansMedium` }}
              >
                Scott Pickett
              </Link>
            </MenuItem>


          <MenuItem
            theme={theme}
            onClick={() => handleOpenSubMenu("bookATable")}
          >
            Book a Table
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
           
          >
            <a href="https://apps.giverapp.net/pickettandco/" target="_blank"
            style={{textDecoration: `none`, color: `#333333`}}
            >
            Gift Vouchers
            </a>
          </MenuItem>
         
          <MenuItem theme={theme}>
            {" "}
            <Link
              to="/pantry"
              style={{ color: "inherit", textDecoration: "none" }}
              partiallyActive={true}
              activeStyle={{ fontFamily: `UntitledSansMedium` }}
            >
              SP Pantry
            </Link>
          </MenuItem>

          {/* <MenuItem theme={theme} onClick={() => handleOpenSubMenu("provider")}>
            Providoor
          </MenuItem> */}
         
          {/* <MenuItem theme={theme}>Shop</MenuItem> */}
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
          <MenuItem theme={theme}><Link
              to="/contact"
              style={{ color: "inherit", textDecoration: "none" }}
              partiallyActive={true}
              activeStyle={{ fontFamily: `UntitledSansMedium` }}
            >
              Contact
            </Link></MenuItem>
        </MenuDropDownContainer>
      </Menu>
      <LogoImg src={logo} />
      <MenuBox show={showSubMenu} handleClose={hideModalSubMenu}>
        <SubMenu
          hideModal={hideModalSubMenu}
          selectedMenu={selectedMenu}
          handleOpenSubMenu={handleOpenSubMenu}
        />
      </MenuBox>
    </div>
  );
};

export default MenuResusable;
