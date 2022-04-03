import React from "react";
import Seo from "../components/seo";
import { useTheme } from "styled-components";

import Landing from "../components/pages/contact/contact";
import MobileLanding from "../components/pages/contact/contactMobile";

const WhatsOn = (props) => {
  const theme = useTheme();

  return theme ? (
    <div theme={theme}>
      <Seo title="Contact" />
      {theme.name === "Desktop" ? (
        <Landing pageProps={props} />
      ) : (
        <MobileLanding pageProps={props}/>
      )}
    </div>
  ) : (
    <div></div>
  );
};

export default WhatsOn;
