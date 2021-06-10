import React from "react";
import styled, { keyframes } from "styled-components";
import { useTheme } from "styled-components";

const fadeIn = keyframes`
0% { transform: translateX(100%); }
100% { transform: translateX(0%); }
`;

const fadeOut = keyframes`
0% { transform: translateX(0%); }
100% { transform: translateX(100%); }
`;

// const Model = styled.div`
//   z-index: 10000;
//   display: ${({ show }) => (show ? "block" : "none")};
//   animation: 0.2s ${fadeIn} ease-out;
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 100vh;
//   width: 100%;
//   padding: ${(props) =>
//     props.theme.name === "Desktop" ? "3.84rem 1.59rem" : "1.85rem 1.59rem"};
//   background: ${(props) => props.theme.colors.text};
//   color: ${(props) => props.theme.colors.body};
// `;

const Model = styled.div`
  display: inline-block;
  visibility: ${(props) => (!props.show ? "hidden" : "visible")};
  animation: ${(props) => (!props.show ? fadeOut : fadeIn)} 0.5s ease-out;
  transition: visibility 0.5s ease-out;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  padding: ${(props) =>
    props.theme.name === "Desktop" ? "3.84rem 1.59rem" : "1.85rem 1.59rem"};
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
