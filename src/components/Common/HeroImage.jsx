import React from "react";

import { useTheme } from "styled-components";
import {
  ImageContainer,
  ImageView,
  ImageDiv,
  RightContainer,
} from "../../components/global/GlobalStyles";

const HeroImage = ({ HomeImage }) => {
  const theme = useTheme();

  return theme ? (
    
    <RightContainer style={{marginTop: `4.75rem`}}>
      <ImageDiv src={HomeImage}/>
    </RightContainer>
  ) : (
    <div></div>
  );
};

export default HeroImage;
