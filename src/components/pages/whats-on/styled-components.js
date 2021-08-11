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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  grid-gap: ${(props) => (props.device === "Mobile" ? "6rem 1rem" : "1.5rem 3.25rem")};
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  padding: 0 0.5rem;
  display: block;
  background-image: ${(props) => `url('${props.src}')`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const GridImg = styled.div`
  display: inline;
`;

export const EventImageContainer = styled.div`
  display: inline;
  width: 100%;
`;
export const EventImageView = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
`;

export const EventImageDiv = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  background-image: ${(props) => `url('${props.src}')`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.text};
  margin: 2.62rem 0;
  padding: 0.5em 3.5rem;
  background-color: ${(props) => props.theme.colors.body};
  border: ${(props) => `1px solid ${props.theme.colors.text}`};
  text-transform: uppercase;
  transition: all .2s ease-out;
  &:hover {
    background-color: #333333;
    color: #F9F9F4;
  }
`;
