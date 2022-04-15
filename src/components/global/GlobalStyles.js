import styled from "styled-components";
import Img from 'gatsby-image'
import { StaticImage } from "gatsby-plugin-image"
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

export const Container = styled.div`
  padding: ${(props) =>
    props.theme.name === "Desktop" ? "0 3.84rem" : "0 1.12rem"};
  font-size: ${(props) => props.theme.fontSize};
  background-color: #f9f9f4;
  @media (prefers-colour-scheme: dark) {
    background-color: #f9f9f4;
    color: #333333;
  }
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: ${props => props.marginTop ? props.marginTop : 0};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0};
`;

export const LeftContainer = styled.div`
  display: ${(props) =>
    props.device === "Mobile" ? "flex" : "inline"};
    width:  ${(props) =>
      props.device === "Mobile" ? "33%" : "33%"};
  


`;
export const RightContainer = styled.div`  
margin-top: ${(props) =>
  props.hero === true
    ? "0"
    : props.theme.name === "Desktop"
    ? "9rem"
    : "6rem"};
  display: ${(props) => (
    props.displayBlock === true ? "block" :
    props.device === "Mobile" ? "flex" : "inline")};
    width: ${(props) =>
      props.device === "Mobile" ? "100%" : "66%"};
  justify-content: ${(props) =>
    props.device === "Mobile" ? "flex-end" : "flex-start"};
`;
export const TextContainer = styled.div`
  display: inline;
  width: ${(props) => (props.device === "Desktop" ? "42%" : "100%")};
`;

export const InnerContainer = styled.div`
  margin-top: ${(props) =>
  props.marginTop ? props.marginTop
  :
    props.top === true
      ? "1rem"
      : props.theme.name === "Desktop"
      ? "6rem"
      : "6rem"};
  display: ${(props) => (props.displayBlock === true ? "block" : "flex")};

  width: 100%;
`;

export const PostContainer = styled.div`
width: 50%;
@media (max-width: 450px) {
  width: 100%;
}
`

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
  aspect-ratio: ${props => props.ratio};
  &:hover {
    opacity: ${(props) => (props.link ? 0.5 : 1)};
  }
`;

export const gImg = styled(StaticImage)`
width: 100%;
aspect-ratio: 4/3;
`

// export const ImageDiv = styled.img`
//   height: 100%;
//   width: 100%;

//   &:hover {
//     opacity: ${(props) => (props.link ? 0.5 : 1)};
//   }
// `;

export const Button = styled.button`
width: ${props => props.width ? props.width : ""};
  color: ${(props) => props.theme.colors.text};
  margin: 2.45rem 0;
  padding: ${props => props.padding ? props.padding : "0.75em 3.5rem"};
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.body};
  border: ${(props) => `1px solid ${props.theme.colors.text}`};
  text-transform: uppercase;
  transition: all .2s ease-out;
  a {
      color: ${(props) => props.theme.colors.text};
      
    }
  &:hover {
    background-color: #333333;
    color: ${(props) => props.theme.colors.body};
    a {
      color: ${(props) => props.theme.colors.body};
      
    }
  }
`;