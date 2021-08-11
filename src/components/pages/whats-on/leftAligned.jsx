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

const LeftAligned = ({ data }) => {
  const theme = useTheme();
  const {Heading, subHeading, content, eventLink, linkLabel} = data.node
  return theme  ? (
    <Grid cols="2">
     <Item>
     {data.node.images ? (
        <SliderFull images={data.node.images}/>
      ): null}
     
        
      </Item>
      <Item>
   
        <Header2 marginBottom="1rem" marginTop="-5rem"  theme={theme}>{Heading}</Header2>
        <Header3 marginBottom={theme.name === "Mobile" ? "1.5rem" : "1rem"}  theme={theme}>{subHeading}</Header3>
 
        {/* {
          data.content.map(para => (
            <BC3 light >{para}</BC3>
          ))
        } */}
       
       { eventLink? (
         <a href={eventLink} target='_blank'>
        <Button>
          
          {linkLabel}</Button>
          </a>
       ) : null}
        
      </Item>
    </Grid>
  ) : (
    <div></div>
  );
};

export default LeftAligned;
