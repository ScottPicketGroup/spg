import React, {useState} from "react";
import { useTheme } from "styled-components";
import styled from "styled-components";
import { Link } from "gatsby";
import LogoFooter from "../../Footer/logo-footer/LogoFooter";
import MenuBox from "../Menue";
import SubMenu from "../SubMenue";

import { globalHistory } from "@reach/router";

import {
  SectionContainer
} from "../../global/GlobalStyles";

import LogoWhite from "../../../images/logoWhite.svg";
import expandIcon from "../../../images/expandIcon.png";
import TableMenu from "../SubMenus/BookTableMenu";
import GiftVoucher from "../SubMenus/GiftVoucher";
import Provider from "../SubMenus/Provider";
import Events from "../SubMenus/Events";
import footerLogo from "../../../images/insta-white.png";
const FooterComponent = ({path}) => {

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
  const handleRedirect = (path) => {
    hideModal();
    setTimeout(() => globalHistory.navigate(path), 200);
  };
  const theme = useTheme();
  return theme ? (
    <div>
      <FooterContainer >
       
        <InnerContainer>
        
          <Footer theme={theme} style={{padding: `0`}}>
          <LogoFooter />
          </Footer>
        </InnerContainer>
      </FooterContainer>
      <FooterContainer style={{borderTop: `white solid 1px`}}>
        {" "}
        <Footer >
          <Grid cols={theme.name === "Desktop" ? 4 : 1} theme={theme}>
            <Item theme={theme}>
              <Menu theme={theme}>
                <MenuHeading theme={theme}>Scott Pickett Group</MenuHeading>

                <MenuItem theme={theme}>
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem theme={theme}>
                  <Link
                    to="/scott-pickett"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Scott Pickett
                  </Link>
                </MenuItem>

                <MenuItem theme={theme}
                onClick={() => {
                  setShow(true)
                  handleOpenSubMenu("bookATable")}}
                >Book a Table</MenuItem>

                <MenuItem theme={theme}
                onClick={() => {
                  
                  setShow(true)
                  handleOpenSubMenu("events")
                }}

                >
                  
                    
                  
                  
                    Events
                  
                </MenuItem>

                <MenuItem theme={theme}>
                  {" "}
                  <Link
                    to="/whatson"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    What's On
                  </Link>
                </MenuItem>
                <MenuItem theme={theme}
                >
                  <a href="https://apps.giverapp.net/pickettandco/" target="_blank"
                  style={{ color: "inherit", textDecoration: "none" }}
                  >
                  Gift Vouchers </a></MenuItem>
                <MenuItem theme={theme}
                onClick={() => {
                  setShow(true)
                  handleOpenSubMenu("provider")}}
                >Providoor</MenuItem>
                {/* <MenuItem theme={theme}>Shop</MenuItem> */}
                <MenuItem theme={theme}>
                  <Link
                    to="/careers"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Careers
                  </Link>
                </MenuItem>
                <MenuItem theme={theme}> <Link
                    to="/contact"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Contact

                  </Link></MenuItem>
              </Menu>
            </Item>
            <Item theme={theme}>
              {" "}
              <Menu theme={theme}>
                <MenuHeading theme={theme}>Venues</MenuHeading>
                <MenuItem theme={theme}>
                  <a href="http://www.chancerylane.com.au" target="_blank"
                  style={{textDecoration: `none`, color: `white`}}
                  >Chancery Lane </a></MenuItem>
<MenuItem theme={theme}>
                  <a href="http://www.leshoppe.com.au" target="_blank"
                  style={{textDecoration: `none`, color: `white`}}
                  >Le Shoppe </a></MenuItem>
<MenuItem theme={theme}>
                  <a href="https://matilda159.com/" target="_blank"
                  style={{textDecoration: `none`, color: `white`}}
                  >Matilda </a></MenuItem>

                <MenuItem theme={theme}>
                  <a href="https://www.theestelle.com.au/" target="_blank"
                  style={{textDecoration: `none`, color: `white`}}
                  >Estelle </a></MenuItem>
               
                <MenuItem theme={theme}>
                  <a href="https://longrainmelbourne.com/" target="_blank"
                  style={{textDecoration: `none`, color: `white`}}
                  >Longrain </a></MenuItem>
                
                <MenuItem theme={theme}>
                  <a href="https://longrainmelbourne.com/event/" target="_blank"
                  style={{textDecoration: `none`, color: `white`}}
                  >Longsong </a></MenuItem>
                <MenuItem theme={theme}>
                  <a href="http://www.pastorerestaurant.com.au" target="_blank"
                  style={{textDecoration: `none`, color: `white`}}
                  >Pastore </a></MenuItem>
                   <MenuItem theme={theme}>
                  <a href="http://www.pickettsdeli.com" target="_blank"
                  style={{textDecoration: `none`, color: `white`}}
                  >Pickett’s Deli & Rotisserie </a></MenuItem>
                   <MenuItem theme={theme}>
                  <a href="https://www.spevents.com.au" target="_blank"
                  style={{textDecoration: `none`, color: `white`}}
                  >SP Events </a></MenuItem>
               

              </Menu>
            </Item>
            <Item theme={theme}>
              {" "}
              <Menu theme={theme}>
                <MenuHeading theme={theme}>Social Media</MenuHeading>
                <MenuItem theme={theme}>
                  <a href="http://www.instagram.com/scottpickettchef"  target="_blank"
                  style={{textDecoration: `none`, color: `white`}}
                  >Instagram </a></MenuItem>
               
               <MenuItem theme={theme}>
                  <a href="https://www.linkedin.com/company/scottpickettgroup/about/"  target="_blank"
                  style={{textDecoration: `none`, color: `white`}}
                  >LinkedIn </a></MenuItem>
              </Menu>
            </Item>
            <Item theme={theme}>
              {" "}
              <Menu theme={theme}>
                <MenuHeading theme={theme}>HEAD OFFICE</MenuHeading>
                <MenuItem theme={theme}>
                11/205 JOHNSTON ST,  <br/>
FITZROY 3065<br/>
Australia

                </MenuItem>
              </Menu>
            </Item>
            <Item theme={theme}>
              {" "}
              <Menu theme={theme}>
                <MenuHeading theme={theme}>Subscribe</MenuHeading>
                <MenuItem theme={theme}>
                Sign up for updates from the Scott Pickett Group and to be the first to know about events, new venues, collaborations and more. 
                </MenuItem>
                <SubMenuHeading theme={theme}>EMAIL ADDRESS</SubMenuHeading>

                <Input
                  theme={theme}
                  placeholder={" Please enter your email address"}
                />

                <Button>Subscribe</Button>
              </Menu>
            </Item>
          </Grid>
        </Footer>
      </FooterContainer>
      {theme.name === "Desktop" ? (
 <MenuBox show={showSubMenu} handleClose={hideModalSubMenu}>
 <SubMenu
   hideModal={hideModalSubMenu}
   selectedMenu={selectedMenu}
   handleOpenSubMenu={handleOpenSubMenu}
 />
</MenuBox>
      ) : ( 
        <>
        <MenuBox
        show={show}
        handleClose={hideModal}
        // openPos={Pos.CM_TOP_CENTER}
      >
        <SectionContainer>
          <MenuHeader theme={theme}>
            <LeftContainer>
              <LogoImg
                src={LogoWhite}
                theme={theme}
                style={{ height: `60%` }}
              />
            </LeftContainer>
            <RightContainer device={theme.name}>
              <CloseBtn
                theme={theme}
                onClick={() => setShow(false)}
                style={{ display: `flex`, alignItems: `center` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.267"
                  height="14.267"
                  viewBox="0 0 14.267 14.267"
                  style={{ marginRight: `1rem` }}
                >
                  <g
                    id="Group_6099"
                    data-name="Group 6099"
                    transform="translate(-1684.668 -39.469)"
                  >
                    <path
                      id="Path_11769"
                      data-name="Path 11769"
                      d="M2807.2-13381l13.206,13.206"
                      transform="translate(-1122 13421)"
                      fill="none"
                      stroke="#fdf9ee"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_11770"
                      data-name="Path 11770"
                      d="M0,0,13.206,13.206"
                      transform="translate(1698.404 40) rotate(90)"
                      fill="none"
                      stroke="#fdf9ee"
                      stroke-width="1.5"
                    />
                  </g>
                </svg>
                Close
              </CloseBtn>
            </RightContainer>
          </MenuHeader>
        </SectionContainer>

        <Menu theme={theme}>
          <MenuItem
            theme={theme}
            // bold={path && path === "/"}
            onClick={() => {
              handleRedirect("/");
            }}
          >
            <Link style={{ color: "inherit", textDecoration: "none", fontSize: "24px" }}>
              Home
            </Link>
          </MenuItem>
          <MenuItem
            theme={theme}
            // bold={path && path.includes("/scott-pickett")}
            onClick={() => {
              handleRedirect("/scott-pickett");
            }}
          >
            <Link style={{ color: "inherit", textDecoration: "none", fontSize: "24px" }}>
              Scott Pickett
            </Link>
          </MenuItem>

          <MenuItem
            theme={theme}
            style={{ color: "#fffff", textDecoration: "none", fontSize: "24px" }}
            expandIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7.823"
                height="14.231"
                viewBox="0 0 7.823 14.231"
              >
                <path
                  id="Path_11818"
                  data-name="Path 11818"
                  d="M-1211.2,6896l6.762,6.762-6.762,6.762"
                  transform="translate(1211.552 -6895.646)"
                  fill="none"
                  stroke="#befbf2"
                  stroke-width="2"
                />
              </svg>
            }
            onClick={() => handleOpenSubMenu("bookATable")}
          >
            Book a table
          </MenuItem>

          <MenuItem
            theme={theme}
            // bold={path && path.includes("/events")}
            expandIcon={expandIcon}
            onClick={() => handleOpenSubMenu("events")}
            style={{ color: "#fffff", textDecoration: "none", fontSize: "24px" }}
          >
            Events
          </MenuItem>
          <MenuItem
            theme={theme}
            // bold={path && path.includes("/whatson")}
            onClick={() => {
              handleRedirect("/whatson");
            }}
            
          >
            {" "}
            <Link style={{ color: "inherit", textDecoration: "none", fontSize: "24px" }}>
              What's On
            </Link>
          </MenuItem>
          <MenuItem
            theme={theme}
            
          >
            <a href="https://apps.giverapp.net/pickettandco/" target="_blank"
             style={{ color: "inherit", textDecoration: "none", fontSize: "24px" }}
            >
            Gift Vouchers
            </a>
          </MenuItem>
          <MenuItem
            theme={theme}
            expandIcon={expandIcon}
            onClick={() => handleOpenSubMenu("provider")}
            style={{ color: "#fffff", textDecoration: "none", fontSize: "24px" }}
          >
            Providoor
          </MenuItem>
          {/* <MenuItem theme={theme}>Shop</MenuItem> */}
          <MenuItem
            theme={theme}
            // bold={path && path.includes("/careers")}
            onClick={() => {
              handleRedirect("/careers");
            }}
          >
            {" "}
            <Link style={{ color: "inherit", textDecoration: "none", fontSize: "24px" }}>
              Careers
            </Link>
          </MenuItem>
          <MenuItem 
          theme={theme}
          style={{ color: "#fffff", textDecoration: "none", fontSize: "24px" }}
          // bold={path && path.includes("/contact")}
          onClick={() => {
            handleRedirect("/contact");
          }}
          >Contact</MenuItem>
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
              <CloseBtn
                theme={theme}
                onClick={() => hideModal(false)}
                style={{ display: `flex`, alignItems: `center` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.267"
                  height="14.267"
                  viewBox="0 0 14.267 14.267"
                  style={{ marginRight: `1rem` }}
                >
                  <g
                    id="Group_6099"
                    data-name="Group 6099"
                    transform="translate(-1684.668 -39.469)"
                  >
                    <path
                      id="Path_11769"
                      data-name="Path 11769"
                      d="M2807.2-13381l13.206,13.206"
                      transform="translate(-1122 13421)"
                      fill="none"
                      stroke="#fdf9ee"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_11770"
                      data-name="Path 11770"
                      d="M0,0,13.206,13.206"
                      transform="translate(1698.404 40) rotate(90)"
                      fill="none"
                      stroke="#fdf9ee"
                      stroke-width="1.5"
                    />
                  </g>
                </svg>
                Close
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
              return <TableMenu hideModal={hideModal} />;
            case "giftVoucher":
              return <GiftVoucher hideModal={hideModal} />;
            case "provider":
              return <Provider hideModal={hideModal} />;
            case "events":
              return <Events hideModal={hideModal} />;
            default:
              return <div></div>;
          }
        })()}
      </MenuBox>
      </>
      )
      
      }
     
    </div>
  ) : (
    <div></div>
  );
};

export default FooterComponent;
export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #f9f9f4;
`;

export const Footer = styled.div`
overflow: hidden;
  min-height: 50px;
  min-width: 100%;
  padding: 0 3.84rem 9rem 3.84rem ;
  background-color: ${(props) => props.theme.colors.text};
  padding-bottom: 9rem;
  position: relative;
  z-index: 2;
  padding-top: 56px;
  @media screen and (max-width: 450px) {
    padding: 3.5rem 1rem 6rem 1rem ;
    
}
`;


export const InnerContainer = styled.div`
  margin-top: 1rem;
  display: ${(props) => (props.displayBlock === true ? "block" : "flex")};

  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.theme.name === "Desktop"
      ? `repeat(${props.cols}, 1fr) 20rem`
      : `repeat(${props.cols}, 1fr)`};
  grid-gap: ${(props) => (props.theme.name === "Desktop" ? "6rem 0rem" : "2.25rem 0")};
`;

export const Item = styled.div`
  padding: 0 0.5rem;
  display: block;
  color: ${(props) => props.theme.colors.body};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansRegular};
  font-size: 16px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.device === "Desktop" ? " 0 2.25" : "0")};
  color: ${(props) => props.theme.colors.body};
`;
export const MenuHeading = styled.div`
  width: 100%;
  margin: 0  0 1.5rem ;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansRegular};
  text-transform: uppercase;
`;
export const MenuItem = styled.div`
  width: 100%;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansRegular};
  margin-bottom: 1rem;
  cursor: pointer;
`;
export const SubMenuHeading = styled.div`
  width: 100%;
  margin-top: 1rem;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansRegular};
`;

const Input = styled.input`
  color: ${(props) => props.theme.colors.body};
  background: ${(props) => props.theme.colors.text};
  border-bottom: ${(props) => `1px solid ${props.theme.colors.body}`};
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0.5rem 0;
  ::placeholder {
    color: ${(props) => props.theme.colors.body};
  }
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.body};
  margin: 1.5rem 0;
  padding: 0.5em 1em;
  background-color: ${(props) => props.theme.colors.text};
  border: ${(props) => `1px solid ${props.theme.colors.body}`};
  text-transform: uppercase;
  width: 50%;
  font-size: .71rem;
  transition: background-color .3s, color 1s;
  &:hover {
    background-color: ${(props) => `${props.theme.colors.body}`};
    color: ${(props) => props.theme.colors.text};
  }
`;


export const FooterLogo = styled.img`
  margin-top: 3rem;
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
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  margin-bottom: 1.5rem;
  padding-top: 0.75rem;
  opacity: ${(props) => props.opacity && props.opacity};
`;
export const MenuHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 1rem;
  margin-bottom: 2.25rem;
`;
