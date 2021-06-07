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
  color: ${(props) => props.theme.colors.text};
`;
export const BC1 = styled.p`
  margin-top: 3.5rem;
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
export const BC3 = styled.ul`
  margin-top: 0.75rem;
  font-size: ${(props) => (props.theme.name === "Desktop" ? "20px" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  line-height: 2.15rem;
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
  grid-gap: 6rem 0rem;
  align-items: center;
`;

export const Item = styled.div`
  padding: 0 0.5rem;
  display: block;
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
  display: flex;
  align-items: center;
`;

export const FooterLogo = styled.img``;

export const Header2 = styled.h2`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "36px" : "20px")};
  margin-bottom: 1rem;
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;
export const Header4 = styled.h4`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "20px" : "18px")};
  margin-bottom: 1.75rem;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.text};

  margin: 1em;
  padding: 0.25em 1em;
  background-color: ${(props) => props.theme.colors.body};
  border: ${(props) => `1px solid ${props.theme.colors.text}`};
  text-transform: uppercase;
  border-radius: 3px;
`;
