import React from "react";
import Seo from "../components/seo";
import { useTheme } from "styled-components";

import Landing from "../components/pages/events/events";
import MobileLanding from "../components/pages/events/eventsMobile";

const Events = (props) => {
  const theme = useTheme();

  return theme ? (
    <div theme={theme}>
      <Seo title="Events" />
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

export default Events;
