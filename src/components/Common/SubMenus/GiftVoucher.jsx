import React from "react";

import styled, { useTheme } from "styled-components";



import { Menu,Menu3Item } from "../../global/fontStyles";
import InstaIcon from "../../../images/social-icons/InstaLogo";

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
  color: ${(props) => props.theme.colors.body};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansMedium};
`;
export const MenuHeader = styled.div`
  display: flex;
  width: 100%;
`;

const GiftVoucher = ({ hideModal }) => {
  const theme = useTheme();
  
  return theme ? (
    <div>
      <Menu theme={theme} inModal={true}>
      <Menu3Item  theme={theme}>
                 <a
                   href="https://giftcards.nowbookit.com/cards/card-selection?accountid=5fdda5d8-77f7-47b8-a481-bd242be42696&venueid=12208&theme=light&accent=157,157,157"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                   rel="noreferrer"
                 >Scott Pickett Group</a>
        </Menu3Item>
        <Menu3Item  theme={theme}>
                 <a
                   href="https://apps.giverapp.net/chancerylane/product/digital-voucher/"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                 >Chancery Lane</a>
        </Menu3Item>
        <Menu3Item  theme={theme}>
                 <a
                   href=" https://theestelle.giverapp.net/"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                   rel="noreferrer"
                 >Estelle</a>
        </Menu3Item>

        <Menu3Item  theme={theme}>
                 <a
                   href="https://apps.giverapp.net/longrain/product/digital-voucher/"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                 >Longrain</a>
        </Menu3Item>

        <Menu3Item  theme={theme}>
                 <a
                   href="https://matilda159.giverapp.net/"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                   rel="noreferrer"
                 >Matilda</a>
        </Menu3Item>

        <Menu3Item  theme={theme}>
                 <a
                   href="https://pickettsdeli.giverapp.net/"
                   target="_blank"
                   style={{ textDecoration: `none`, color: `inherit` }}
                   rel="noreferrer"
                 >Pickett's Deli</a>
        </Menu3Item>
    
      </Menu>
      
      {theme.name === "Mobile" && <InstaIcon />}
    </div>
  ) : (
    <div></div>
  );
};

export default GiftVoucher;
