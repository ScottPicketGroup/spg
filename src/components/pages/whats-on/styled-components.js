import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  grid-gap: ${(props) => (props.device === "Mobile" ? "6rem 1rem" : "1.5rem 3.25rem")};
  margin-top: ${props => props.first !== 0 ? '5rem' : ''};
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
