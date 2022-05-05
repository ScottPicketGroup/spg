import React from "react";
import Seo from "../components/seo";
import { useTheme } from "styled-components";

import Landing from "../components/pages/whats-on/whatsOn";
import MobileLanding from "../components/pages/whats-on/mobileWhatsOn";

const WhatsOn = (props) => {
  const theme = useTheme();

  return theme ? (
    <div theme={theme}>
      <Seo title="WhatsOn" />

        <Landing pageProps={props} />
   
    </div>
  ) : (
    <div></div>
  );
};

export default WhatsOn;
