import React from "react";

import { useTheme } from "styled-components";
import { SectionContainer } from "../../components/global/GlobalStyles";
import { Link } from "gatsby";

import SideBar from "./SideBar";
import HeroImage from "./HeroImage";
import styled from "styled-components";

const DesktopHome = ({ HomeImage, path }) => {
  const theme = useTheme();

  return theme ? (
    <SectionContainer>
      <SideBar path={path} />
      <HeroImage HomeImage={HomeImage} />
    </SectionContainer>
  ) : (
    <div></div>
  );
};

export default DesktopHome;

//menu to be refactored
