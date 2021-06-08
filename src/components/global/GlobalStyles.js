import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

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
export const TextContainer = styled.div`
  display: inline;
  width: ${(props) => (props.device === "Desktop" ? "42%" : "100%")};
`;

export const InnerContainer = styled.div`
  margin-top: ${(props) =>
    props.top === true
      ? "1rem"
      : props.theme.name === "Desktop"
      ? "6rem"
      : "3.5rem"};
  display: ${(props) => (props.displayBlock === true ? "block" : "flex")};

  width: 100%;
`;

export const LogoImg = styled.img`
  position: fixed;
  z-index: 1;
  left: 3.84rem;
  bottom: 36px;
  width: 15%;
  display: inline;
  width: ${(props) => props.theme.name === "Mobile" && "100px"};
`;
export const FullImageContainer = styled.div`
  display: inline;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: inline;
  width: ${(props) => (props.device === "Desktop" ? "58%" : "100%")};
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
  &:hover {
    opacity: ${(props) => (props.link ? 0.5 : 1)};
  }
`;

// export const ImageDiv = styled.img`
//   height: 100%;
//   width: 100%;

//   &:hover {
//     opacity: ${(props) => (props.link ? 0.5 : 1)};
//   }
// `;
