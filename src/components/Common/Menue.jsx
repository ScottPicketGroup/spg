import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
const Model = styled.div`
  z-index: 2000;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  padding: 0.5rem 1.25rem;
  background: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.body};
`;

export default function Menu(props) {
  const {
    children,
    show, // boolean - visible/invisible
  } = { ...props };
  const theme = useTheme();

  return theme ? (
    <Model show={show} theme={theme}>
      {children}
    </Model>
  ) : (
    ""
  );
}
