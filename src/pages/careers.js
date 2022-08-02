import React from "react";
import Seo from "../components/seo";
import { useTheme } from "styled-components";

import Landing from "../components/pages/careers/careers";

const Careers = (props) => {
  const theme = useTheme();

  return theme ? (
    <div theme={theme}>
      <Seo title="Careers" />
        <Landing pageProps={props} />
    </div>
  ) : null
};

export default Careers;
