import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

export const Container = styled.div`
  width: 100%;
  padding: ${(props) =>
    props.theme.name === "Desktop" ? "0 5.25rem" : "0 2.25rem"};
  font-size: ${(props) => props.theme.fontSize};
  background-color: #f9f9f4;
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const TextContainer = styled.div`
  display: inline;
  width: ${(props) => (props.device === "Desktop" ? "42%" : "100%")};
`;
export const ImageContainer = styled.img`
  display: inline;
  width: ${(props) => (props.device === "Desktop" ? "58%" : "100%")};
`;
