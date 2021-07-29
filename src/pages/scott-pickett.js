import React from "react";

import Seo from "../components/seo";
import { useTheme } from "styled-components";

import Landing from "../components/pages/scott-picket/scottPickett";
import MobileLanding from "../components/pages/scott-picket/mobileScottPickett";

const ScottPicket = (props) => {
  const theme = useTheme();

  return theme ? (
    <div theme={theme}>
      <Seo title="Scott-Picket" />
      {theme.name === "Desktop" ? (
        <Landing pageProps={props} />
      ) : (
        <MobileLanding pageProps={props} />
      )}
    </div>
  ) : (
    <div></div>
  );
};

export default ScottPicket;
