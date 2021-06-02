import React, { useLayoutEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import { useTheme } from "styled-components";
import { Container } from "../components/global/GlobalStyles";

import Landing from "../components/pages/landing/landing";
import MobileLanding from "../components/pages/landing/mobileLanding";

const IndexPage = () => {
  const theme = useTheme();
  console.log({ theme }, theme);
  return theme ? (
    <div theme={theme}>
      <Seo title="Home" />
      {theme.name === "Desktop" ? <Landing /> : <MobileLanding />}
    </div>
  ) : (
    <div></div>
  );
};

export default IndexPage;
