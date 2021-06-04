import React from "react";
import Seo from "../components/seo";
import { useTheme } from "styled-components";

import Landing from "../components/pages/landing/landing";
import MobileLanding from "../components/pages/landing/mobileLanding";

const IndexPage = (props) => {
  const theme = useTheme();

  return theme ? (
    <div theme={theme}>
      <Seo title="Home" />
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

export default IndexPage;
