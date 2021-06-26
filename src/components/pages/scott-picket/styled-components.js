import styled from "styled-components";
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.25rem 2.25rem;
  color: ${(props) =>
    props.theme.name === "Desktop"
      ? props.theme.colors.text
      : props.theme.colors.body};
`;
export const MenuHeading = styled.div`
  width: 100%;
  margin: 1.15rem 0;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansMedium};
  text-transform: uppercase;
`;
export const MenuItem = styled.div`
  width: 100%;
  text-transform: capitalize;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
`;

export const InnerContainer = styled.div`
  margin-top: ${(props) =>
  props.marginTop ? props.marginTop : 
    props.top === true
      ? "1rem"
      : props.theme.name === "Desktop"
      ? "6.93rem"
      : "6rem"};
  display: ${(props) => (props.displayBlock === true ? "block" : "flex")};

  width: 100%;
`;
export const LeftContainer = styled.div`
  display: inline;
  width: ${(props) => (props.theme.name === "Desktop" ? "33%" : "0%")};
`;
export const RightContainer = styled.div`
  display: ${(props) => (props.device === "Mobile" ? "flex" : "inline")};
  width: ${(props) => (props.theme.name === "Desktop" ? "66%" : "100%")};
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
  color: ${(props) => props.theme.colors.text};
`;
export const Header2 = styled.h2`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "36px" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;
export const BC1 = styled.p`
  margin-top: 3.5rem;
  margin-bottom: 6rem;
  font-size: ${(props) => (props.theme.name === "Desktop" ? "36px" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  line-height: 2.15rem;
  color: ${(props) => props.theme.colors.text};
  cursor: ${(props) => (props.link ? "pointer" : "text")};

  &:hover {
    color: ${(props) =>
      props.link ? props.theme.colors.hoverText : props.theme.colors.text};
  }
`;
export const BC3 = styled.p`
  margin-top: 0.75rem;
  font-size: ${(props) => (props.theme.name === "Desktop" ? "20px" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  line-height: 1.2rem;
  color: ${(props) => props.theme.colors.text};
  cursor: ${(props) => (props.link ? "pointer" : "text")};

  &:hover {
    color: ${(props) =>
      props.link ? props.theme.colors.hoverText : props.theme.colors.text};
  }
`;
export const BC2 = styled.p`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "24px" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  line-height: 1.17rem;
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
  grid-gap: width: ${(props) => (props.theme.name === "Desktop" ? "6rem" : "2.5rem")};
`;

export const Item = styled.div`
  padding: 0 0.5rem;
  display: block;
`;
export const ItemImg = styled.div`
  min-height: 250px;
  min-width: 150px;
  background-image: ${(props) => `url('${props.src}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2.25 rem;
`;
export const ItemImgCaption = styled.div`
  margin-top: ${(props) => (props.theme.name === "Desktop" ? "3.5rem" : "1.5rem")};
  font-size: ${(props) => (props.theme.name === "Desktop" ? "36px" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const Footer = styled.div`
  min-height: 100px;
  min-width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
`;

export const FooterLogo = styled.img``;
export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #f9f9f4;
`;

export const QuotationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${(props) => (props.theme.name === "Desktop" ? "0 8.25rem" : "0")};
  justify-content: center;

`;
export const Quotation = styled.div`
width: 50%;
  font-size: ${(props) => (props.theme.name === "Desktop" ? "64px" : "28px")};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  line-height: 3.5rem;
  text-align: center;
`;
export const Divider = styled.hr`
  background-color: ${(props) => props.theme.colors.text};
  opacity: 0.2;
`;
export const TimeLineContainer = styled.div`
  margin-top: ${(props) => (props.theme.name === "Mobile" ? "1.5rem" : "2.25rem")};
  display: ${(props) => (props.displayBlock === true ? "block" : "flex")};
  flex-direction: ${(props) => (props.theme.name === "Mobile" ? "column" : "")};;
  width: 100%;
  padding: ${(props) => (props.theme.name === "Mobile" ? "1.5rem 0" : "0")};
`;
export const TimeLineIMGContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const TimeLineIMGInnerContainer = styled.div`
  width: 60%;
`;
export const TimeLineGrid = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid rgba(51, 51, 51, 25%);
 padding-top: 2.25rem;
 padding-bottom: 3.5rem;
 @media screen and (max-width: 450px) {
   border-top: none;
   flex-direction: column;
 }
`;
export const LeftGrid = styled.div`
  padding: 0 0.5rem;
  display: inline;
  width: 37.5%;
  @media screen and (max-width: 450px) {
   padding-bottom: 1.5rem;
 }
`;
export const RightGrid = styled.div`
  padding: 0 0.5rem;
  display: inline;
  width: 62.5%;
  :hover ${LeftGrid}{
    opacity: 1;
  }
`;
export const CookiesBanner = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 0.5rem 2rem;
  border-top: ${(props) => `2px solid ${props.theme.colors.text}`};
  background-color: ${(props) => ` ${props.theme.colors.body}`};
  color: ${(props) => ` ${props.theme.colors.text}`};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  font-size: 16px;
  text-transform: uppercase;
  line-height:1rem
  box-sizing: border-box;
  display:${(props) => (props.theme.name === "Desktop" ? `flex` : `block`)};
  align-items:center;
  justify-content:space-between;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.text};
  margin: 1em;
  padding: 0.25em 1em;
  width: ${(props) => (props.theme.name === "Desktop" ? "10%" : "100%")};

  background-color: ${(props) => props.theme.colors.body};
  border: ${(props) => `1px solid ${props.theme.colors.text}`};
  text-transform: uppercase;
  transition: background-color 1s, color 1s;
  &:hover {
    background-color: ${(props) => `${props.theme.colors.text}`};
    color: ${(props) => props.theme.colors.body};
  }
`;

export const Award = styled.div`
display: flex;

`
export const Hat = styled.img`
height: 1.2rem;
margin-top: .1rem;
padding-left: .2rem;
`