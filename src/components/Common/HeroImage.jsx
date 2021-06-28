import React from "react";

import { useTheme } from "styled-components";
import {
  ImageContainer,
  ImageView,
  ImageDiv,
  RightContainer,
  gImg,
} from "../../components/global/GlobalStyles";

const HeroImage = ({ HomeImage }) => {
  const theme = useTheme();

  return theme ? (
    <RightContainer>
      <ImageContainer>
       
          
            <gImg src={HomeImage}/>
           
        
      </ImageContainer>
    </RightContainer>
  ) : (
    <div></div>
  );
};

export default HeroImage;
