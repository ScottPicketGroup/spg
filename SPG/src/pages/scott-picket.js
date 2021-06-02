import React, { useLayoutEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import { useTheme } from "styled-components";
import { Container } from "../components/global/GlobalStyles";

import Landing from "../components/pages/scott-picket/scottPickett";
import MobileLanding from "../components/pages/scott-picket/mobileScottPickett";

const ScottPicket = () => {
  const theme = useTheme();
  console.log({ theme }, theme);
  return theme ? (
    <div theme={theme}>
      <Seo title="Scott-Picket" />
      {theme.name === "Desktop" ? <Landing /> : <MobileLanding />}
    </div>
  ) : (
    <div></div>
  );
};

export default ScottPicket;
