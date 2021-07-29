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
import { BC3, BC2, Header2, Header3 } from "../../global/fontStyles";

import EventImage from "./eventImage";
import SliderFull from "./image-slider-full/Slider";

const LeftAligned = ({ data, images }) => {
  const theme = useTheme();
console.log(data.links)
  return theme ? (
    <Grid cols="2">
     <Item>
        {images && !data.image ? (
          <SliderFull images={data.images}/>
        ): <EventImage src={data.image} />}
        
      </Item>
      <Item>
        <Header2 marginBottom=".75rem" marginTop="-5rem"  theme={theme}>{data.heading}</Header2>
        <Header3 marginBottom="1rem" theme={theme}>{data.subHeading}</Header3>
 
        {
          data.content.map(para => (
            <BC3 light >{para}</BC3>
          ))
        }
       
       { data.buttonLink ? (
         <a href={data.buttonLink} target='_blank'>
        <Button>
          
          {data.buttonText}</Button>
          </a>
       ) : null}
        
      </Item>
    </Grid>
  ) : (
    <div></div>
  );
};

export default LeftAligned;
