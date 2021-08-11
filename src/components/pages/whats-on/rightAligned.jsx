import React from "react";
import { useTheme } from "styled-components";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
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

const RightAligned = ({ data }) => {
  const theme = useTheme();
  console.log(data.node)
  return theme  ? (
    <Grid cols="2">
     
      <Item>
        {/* <Header2 marginBottom="1rem" marginTop="-5rem"  theme={theme}>{data.heading}</Header2>
        <Header3 marginBottom={theme.name === "Mobile" ? "1.5rem" : "1rem"}  theme={theme}>{data.subHeading}</Header3>
 
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
       ) : null} */}
        
      </Item>
      <Item>
     {data.node ? (
      <SliderFull images={data.node.images}/>
      ): null}
     
        
      </Item>
    </Grid>
  ) : (
    <div></div>
  );
};

export default RightAligned;
