import React from "react";

import { useTheme } from "styled-components";
import { RightContainer, SectionContainer } from "../../components/global/GlobalStyles";

import { GatsbyImage, getImage} from "gatsby-plugin-image"

import SideBar from "./SideBar";

const DesktopHome = ({ HomeImage, path }) => {

  const theme = useTheme();
  return theme ? (
    <SectionContainer >
      <SideBar path={path}/>
      <RightContainer hero>
      <GatsbyImage
        image={getImage(HomeImage)}
        alt="test"
        style={{aspectRatio: `4/3`}}
      />
      </RightContainer>
    </SectionContainer>
  ) : (
    <div></div>
  );
};

export default DesktopHome;

//menu to be refactored
