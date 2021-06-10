import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) =>
    props.theme.name === "Desktop" ? "0 3.84rem" : "0 1.12rem"};
  font-size: ${(props) => props.theme.fontSize};
  background-color: #f9f9f4;
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const InnerContainer = styled.div`
  margin-top: ${(props) =>
    props.top === true
      ? "1rem"
      : props.theme.name === "Desktop"
      ? "6.65rem"
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
  width: ${(props) => props.theme.name === "Mobile" && "10px"};
`;
export const Header1 = styled.h1`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "2.84rem" : "28px")};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`;


export const Header2 = styled.h2`
  font-size: ${(props) =>
    props.theme.name === "Desktop" ? "1.59rem" : "1.5rem"};
  margin-bottom: 0;
  margin-top: 1.75rem;
  line-height: ${(props) =>
    props.theme.name === "Desktop" ? "" : "1"};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;
export const BC1 = styled.p`
  margin-top: ${(props) =>
    props.theme.name === "Desktop" ? "1.17rem" : "1.5rem"};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '1.95rem')};
  font-size: ${(props) =>
    props.theme.name === "Desktop" ? "1.59rem" : "1.25rem"};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  line-height: 1.32;
  color: ${(props) => props.theme.colors.text};
  cursor: ${(props) => (props.link ? "pointer" : "text")};

  &:hover {
    color: ${(props) =>
      props.link ? props.theme.colors.hoverText : props.theme.colors.text};
  }
`;
export const BC3 = styled.p`
 
  font-size: ${(props) => (props.theme.name === "Desktop" ? ".87rem" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  line-height: 1.2;
  color: ${(props) => props.theme.colors.text};
  cursor: ${(props) => (props.link ? "pointer" : "text")};
  margin-top: .45rem;
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
  grid-gap: ${(props) => (props.theme.name === "Desktop" ? "3.75rem 0rem" : "3.5rem 0")};
  align-items: center;
`;

export const Item = styled.div`
  padding: 0 0.5rem;
  display: block;
  &:hover {
    opacity: ${(props) => (props.link ? 0.5 : 1)};
  }
`;

export const ItemImgLink = styled.a`
  text-decoration: none;
`;
export const ItemImg = styled.div`
  min-height: 250px;
  min-width: 150px;
  background-image: ${(props) => `url('${props.src}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2.25 rem;
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
  -ms-overflow-style: none;
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


export const FullImageContainer = styled.div`
  display: inline;
  width: 100%;
`;

export const ImageView = styled.div`
  position: relative;
  width: 100%;
  padding-top: 66.66%;
`;

export const ImageDiv = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  font-size: 20px;
  color: white;
  background-image: ${(props) => `url('${props.src}')`};
  background-repeat: no-repeat;
  background-size: cover;
  aspect-ratio: ${props => props.ratio};
  &:hover {
    opacity: ${(props) => (props.link ? 0.5 : 1)};
  }
`;

