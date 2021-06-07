/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React, { useState, useLayoutEffect } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./src/components/global/variables";

import { createGlobalStyle } from "styled-components";

import UntitledSansLight from "./static/fonts/untitled-sans-web-light.woff";
import UntitledSansMedium from "./static/fonts/untitled-sans-web-medium.woff";
import UntitledSansRegular from "./static/fonts/untitled-sans-web-regular.woff";
import Times from "./static/fonts/timr45w.ttf";

const GlobalFonts = createGlobalStyle`
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body { margin: 0}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  }
    @font-face {
        font-family: 'UntitledSansLight';
        src: url(${UntitledSansLight}) format("woff"); 
    }
    @font-face {
      font-family: 'UntitledSansMedium';
      src: url(${UntitledSansMedium}) format("woff"); 
  }
    @font-face {
      font-family: 'UntitledSansRegular';
      src: url(${UntitledSansRegular}) format("woff"); 
  }
    @font-face {
      font-family: 'Times';
      src: url(${Times}) format("ttf"); 
  }
`;

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const App = ({ element }) => {
  const [width, height] = useWindowSize();

  return (
    <ThemeProvider
      theme={width < 1200 ? Theme.theme.mobile : Theme.theme.desktop}
    >
      <GlobalFonts />
      {element}
    </ThemeProvider>
  );
};
export const wrapRootElement = ({ element }) => {
  return <App element={element} />;
};
