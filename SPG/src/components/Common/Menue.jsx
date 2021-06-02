import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
const Model = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 0.5rem 5.25rem;
  background: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.body};
`;

export default function Menu(props) {
  const {
    handleClose,
    children,
    show, // boolean - visible/invisible
    headerText, // text
    detailText, // html / inner text
    openPos, // placement choice
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
