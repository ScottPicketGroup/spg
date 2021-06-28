import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useTheme } from "styled-components";

import {
  ImageContainer,
  ImageView,
  ImageDiv,
  RightContainer,
  gImg,
} from "../../components/global/GlobalStyles";
import bla from '../../images/events-pdrs/estelle.jpg'
const HeroImage = ({ HomeImage }) => {
  const theme = useTheme();

  return theme ? (
    <RightContainer>
      
       
      <GatsbyImage image={HomeImage} alt="test" />
         
  
        {/* <img src={HomeImage} alt="test"/> */}
  
    </RightContainer>
  ) : (
    <div></div>
  );
};

export default HeroImage;
