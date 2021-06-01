/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React, { useState, useLayoutEffect } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./src/components/global/variables";

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
  console.log({ width, height }, "in app");
  return (
    <ThemeProvider
      theme={width < 1200 ? Theme.theme.mobile : Theme.theme.desktop}
    >
      {element}
    </ThemeProvider>
  );
};
export const wrapRootElement = ({ element }) => {
  return <App element={element} />;
};
