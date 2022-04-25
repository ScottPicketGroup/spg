import React from "react";
import Seo from "../components/seo";
import { useTheme } from "styled-components";

import Landing from "../components/pages/landing/landing";

const IndexPage = (props) => {
  const theme = useTheme();

  return theme ? (
    <div theme={theme}>
      <Seo title="Home" />
      <Landing pageProps={props} />
  
    </div>
  ) : (
    <div></div>
  );
};

export default IndexPage;
