import React from "react";

import { useTheme } from "styled-components";
import {
  ImageContainer,
  ImageView,
  ImageDiv,
} from "../../components/global/GlobalStyles";

const HeroImage = ({ HomeImage }) => {
  const theme = useTheme();

  return theme ? (
    <ImageContainer>
      <ImageView>
        <ImageDiv src={HomeImage} />
      </ImageView>
    </ImageContainer>
  ) : (
    <div></div>
  );
};

export default HeroImage;
