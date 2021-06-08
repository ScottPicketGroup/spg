import React from "react";
import { useTheme } from "styled-components";
import styled from "styled-components";
import { Link } from "gatsby";
import Estelle from "../../images/Group 4576.png";
import LM from "../../images/Group 4577.png";
import CL from "../../images/Path 10285.png";
import LON from "../../images/Group 4578.png";
import MAT from "../../images/Group 4579.png";
import PAS from "../../images/Group 4580.png";
import PIC from "../../images/Group 4581.png";
import SP from "../../images/Group 4582.png";
import LogoW from "../../images/Group 4583.png";
import LogoFooter from "../Footer/logo-footer/LogoFooter";



export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #f9f9f4;
`;

export const Footer = styled.div`
overflow: hidden;
  min-height: 50px;
  min-width: 100%;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.colors.text};
  padding-bottom: 9rem;
  position: relative;
  z-index: 2;
  padding-top: 56px;
  @media screen and (max-width: 450px) {
    padding-bottom: 6rem;
    padding-top: 56px;
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
  text-transform: capitalize;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansRegular};
  margin-bottom: 1rem;
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
  transition: background-color 1s, color 1s;
  &:hover {
    background-color: ${(props) => `${props.theme.colors.body}`};
    color: ${(props) => props.theme.colors.text};
  }
`;
const FooterComponent = () => {
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
                <MenuHeading theme={theme}>Scott Picket Group</MenuHeading>

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
                    to="/scott-picket"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Scott Picket
                  </Link>
                </MenuItem>

                <MenuItem theme={theme}>Book a table</MenuItem>

                <MenuItem theme={theme}>
                  <Link
                    to="/events"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Events
                  </Link>
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
                <MenuItem theme={theme}>Gift Vouchers</MenuItem>
                <MenuItem theme={theme}>Provider</MenuItem>
                <MenuItem theme={theme}>Shop</MenuItem>
                <MenuItem theme={theme}>
                  <Link
                    to="/careers"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Careers
                  </Link>
                </MenuItem>
                <MenuItem theme={theme}>Contact</MenuItem>
              </Menu>
            </Item>
            <Item theme={theme}>
              {" "}
              <Menu theme={theme}>
                <MenuHeading theme={theme}>Venues</MenuHeading>
                <MenuItem theme={theme}>Chancery Lane</MenuItem>
                <MenuItem theme={theme}>Estelle</MenuItem>
                <MenuItem theme={theme}>Longrain</MenuItem>
                <MenuItem theme={theme}>Pastore</MenuItem>
              </Menu>
            </Item>
            <Item theme={theme}>
              {" "}
              <Menu theme={theme}>
                <MenuHeading theme={theme}>Social Media</MenuHeading>
                <MenuItem theme={theme}>Instagram</MenuItem>
                <MenuItem theme={theme}>Facebook</MenuItem>
              </Menu>
            </Item>
            <Item theme={theme}>
              {" "}
              <Menu theme={theme}>
                <MenuHeading theme={theme}>Contact Details</MenuHeading>
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
                  Sign up to our newletter for news, stories and invitations to
                  the things we love to share and enjoy from Pickett & Co.{" "}
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
    </div>
  ) : (
    <div></div>
  );
};

export default FooterComponent;