import React from "react";
import { useTheme } from "styled-components";
import { ImageCaption } from "../../global/fontStyles";

import {
  EventImageView,
  EventImageContainer,
  EventImageDiv,
} from "./styled-components";

const EventImage = ({ src, imageCaption}) => {
  const theme = useTheme();

  return theme ? (
    <EventImageContainer>
    
      <EventImageView>
        <EventImageDiv src={src} />
      </EventImageView>
      {/* {
        imageCaption ? (
          <ImageCaption>hallo</ImageCaption>
        ) : (
          <div className=""></div>
        )
      } */}
    </EventImageContainer>
  ) : (
    <div></div>
  );
};

export default EventImage;
