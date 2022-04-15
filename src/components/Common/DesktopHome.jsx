import React from "react";

import { useTheme } from "styled-components";
import { RightContainer, SectionContainer } from "../../components/global/GlobalStyles";

import { GatsbyImage} from "gatsby-plugin-image"

import SideBar from "./SideBar";

const DesktopHome = ({ HomeImage, path }) => {

  const theme = useTheme();
  return theme ? (
    <SectionContainer >
      <SideBar path={path}/>
      <RightContainer hero>
      <GatsbyImage image={HomeImage} 
      height={20}
      width={20}
    
      alt="test" style/>
      </RightContainer>
    </SectionContainer>
  ) : (
    <div></div>
  );
};

export default DesktopHome;

//menu to be refactored
