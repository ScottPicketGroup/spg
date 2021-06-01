import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 5.25rem;
  font-size: ${(props) => props.theme.fontSize};
`;
export const TextContainer = styled.div`
  display: inline;
  width: 42%;
`;
export const ImageContainer = styled.img`
  display: inline;
  width: 58%;
`;
