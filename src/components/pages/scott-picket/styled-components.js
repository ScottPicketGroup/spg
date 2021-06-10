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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  grid-gap: width: ${(props) =>
    props.theme.name === "Desktop" ? "6rem" : "2.5rem"};
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
  margin-top: ${(props) =>
    props.theme.name === "Desktop" ? "3.5rem" : "1.5rem"};
  font-size: ${(props) => (props.theme.name === "Desktop" ? "36px" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const QuotationContainer = styled.div`
  display: flex;
  width: 100%;
  padding: ${(props) =>
    props.theme.name === "Desktop" ? "0 8.25rem" : "0 2rem"};
  justify-content: center;
`;
export const TimeLineContainer = styled.div`
  margin-top: 2.25rem;
  display: ${(props) => (props.displayBlock === true ? "block" : "flex")};
  width: 100%;
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
`;
export const LeftGrid = styled.div`
  padding: 0 0.5rem;
  display: inline;
  width: 37.5%;
`;
export const RightGrid = styled.div`
  padding: 0 0.5rem;
  display: inline;
  width: 62.5%;
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
