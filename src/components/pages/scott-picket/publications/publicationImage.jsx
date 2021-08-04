import React from "react";
import { useTheme } from "styled-components";


import {
  EventImageView,
  EventImageContainer,
  EventImageDiv,
} from "./styled-components";

const PublicationImage = ({ src}) => {
  const theme = useTheme();
console.log(src)
  return theme ? (
    <EventImageContainer>
    
      <EventImageView>
        <EventImageDiv src={src} />
      </EventImageView>
    
    </EventImageContainer>
  ) : (
    <div></div>
  );
};

export default PublicationImage;
