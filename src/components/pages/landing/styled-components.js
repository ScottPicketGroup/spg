import styled from "styled-components";
import {BC3} from "../../global/fontStyles"
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
  width: 33%;
`;
export const RightContainer = styled.div`
  display: ${(props) => (props.device === "Mobile" ? "flex" : "inline")};
  width: 66%;
  justify-content: ${(props) =>
    props.device === "Mobile" ? "flex-end" : "flex-start"};
`;
export const FullContainer = styled.div`
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
export const Header1 = styled.h1`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "64px" : "28px")};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  line-height: 0.94;
  color: ${(props) => props.theme.colors.text};
`;
export const Header2 = styled.h2`
  font-size: ${(props) =>
    props.theme.name === "Desktop" ? "36px" : "1.5rem"};
  margin-bottom: 1rem;
  line-height: ${(props) =>
    props.theme.name === "Desktop" ? "" : "1.11"};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;
export const BC1 = styled.p`
  margin-top: 3.5rem;
  font-size: ${(props) => (props.theme.name === "Desktop" ? "36px" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  line-height: 1.22;
  color: ${(props) => props.theme.colors.text};
  cursor: ${(props) => (props.link ? "pointer" : "text")};
  &:hover {
    color: ${(props) =>
      props.link ? props.theme.colors.hoverText : props.theme.colors.text};
  }
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  grid-gap: ${(props) => (props.theme.name === "Desktop" ? "3.5rem 0rem" : "3.5rem 0")};
  align-items: center;
  align-items: start;
`;

export const Item = styled.div`
  padding: 0 0.5rem;
  display: block;
  transition: opacity .2s ease-out;
  
`;

export const ItemImgLink = styled.a`
  text-decoration: none;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansRegular};
  color: #333333;
  &:hover {
    opacity: ${(props) => (props.link ? 0.5 : 1)};
  }
`;
export const ItemImg = styled.div`
  min-height: 250px;
  min-width: 150px;
  background-image: ${(props) => `url('${props.src}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2.25 rem;
  transition: opacity .2s ease-out;
  &:hover {
    opacity: 0.25;
  }
`;
export const ItemImgCaption = styled.div`
  margin-top: ${(props) => (props.theme.name === "Desktop" ? "3.5rem" : "1.5rem")};
  font-size: ${(props) => (props.theme.name === "Desktop" ? "36px" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    color: ${(props) => props.theme.colors.hoverText};
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #f9f9f4;
`;

export const Footer = styled.div`
  min-height: 100px;
  min-width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.text};
`;

export const FooterLogoGrid = styled.div`
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const FooterLogoContainer = styled.div`
  flex: 0 0 200px;
  padding: 1rem;
`;
export const FooterLogo = styled.img``;

export const ItemExpandElement = styled(BC3)`
font-family: ${(props) => props.theme.fontFamily.UntitledSansRegular};
`
export const ItemInfoContainer = styled.div`
margin-Top: ${(props) => (props.marginTop ? props.marginTop : `0`)};
max-height: 1.3rem;
overflow: hidden;
transition: max-height 0.25s ease-out;
width: 100%;
transition: max-height .25s ease-in;
:hover {
  max-height: 500px;
  transition: max-height 0.25s ease-in;
}
`