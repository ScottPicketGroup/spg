import styled from "styled-components";

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
export const BC3 = styled.p`
  margin-top: 0.75rem;
  font-size: ${(props) => (props.theme.name === "Desktop" ? "20px" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  line-height: 1.2;
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
  grid-gap: ${(props) =>
    props.theme.name === "Desktop" ? "6rem 0rem" : "3.5rem 0"};
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
  margin-top: ${(props) =>
    props.theme.name === "Desktop" ? "3.5rem" : "1.5rem"};
  font-size: ${(props) => (props.theme.name === "Desktop" ? "36px" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    color: ${(props) => props.theme.colors.hoverText};
  }
`;
