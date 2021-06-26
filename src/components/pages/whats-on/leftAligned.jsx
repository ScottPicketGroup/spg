import React from "react";
import { useTheme } from "styled-components";

import {
  Button,
  Grid,
  Item,
  EventImageView,
  EventImageContainer,
  EventImageDiv,
} from "./styled-components";
import { BC3, Header2, Header3 } from "../../global/fontStyles";

import EventImage from "./eventImage";
import SliderFull from "./image-slider-full/Slider";

const LeftAligned = ({ data }) => {
  const theme = useTheme();
console.log(data.content[0])
  return theme ? (
    <Grid cols="2">
     <Item>
        {data.images ? (
          <SliderFull images={data.images}/>
        ): <EventImage src={data.image} />}
        
      </Item>
      <Item>
        <Header2 theme={theme}>{data.heading}</Header2>
        <Header3 theme={theme}>{data.subHeading}</Header3>
 
        {
          data.content.map(para => (
            <BC3>{para}</BC3>
          ))
        }
        <Button>{data.buttonText}</Button>
      </Item>
    </Grid>
  ) : (
    <div></div>
  );
};

export default LeftAligned;
