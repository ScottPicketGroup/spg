import React from "react";

import { useTheme } from "styled-components";
import { RightContainer, SectionContainer } from "../../components/global/GlobalStyles";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

import SideBar from "./SideBar";
import HeroImage from "./HeroImage";
import styled from "styled-components";

const DesktopHome = ({ HomeImage, path }) => {
  const theme = useTheme();

  return theme ? (
    <SectionContainer >
      <SideBar path={path}/>
      <RightContainer>
      <GatsbyImage image={HomeImage} alt="test" style/>
      </RightContainer>
    </SectionContainer>
  ) : (
    <div></div>
  );
};

export default DesktopHome;

//menu to be refactored
