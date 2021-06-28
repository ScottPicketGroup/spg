import React from "react";
import Seo from "../components/seo";
import { useTheme } from "styled-components";

import Landing from "../components/pages/sp-events/sp-events";
import MobileLanding from "../components/pages/careers/careersMobile";

const Careers = (props) => {
  const theme = useTheme();

  return theme ? (
    <div theme={theme}>
      <Seo title="SP Events" />
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

export default Careers;
