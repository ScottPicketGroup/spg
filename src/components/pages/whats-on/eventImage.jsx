import React from "react";
import { useTheme } from "styled-components";

import {
  EventImageView,
  EventImageContainer,
  EventImageDiv,
} from "./styled-components";

const EventImage = ({ src }) => {
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

export default EventImage;
