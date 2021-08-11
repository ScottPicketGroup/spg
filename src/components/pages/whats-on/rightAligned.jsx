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
import Content from "./Content";
import Test from "./test";

const RightAligned = ({ data }) => {
  const theme = useTheme();
  

  const {Heading, subHeading, content, eventLink, linkLabel} = data.node
  return theme  ? (
    <Grid cols="2">
     
      <Item>
   
        <Header2 marginBottom="1rem" marginTop="-5rem"  theme={theme}>{Heading}</Header2>
        <Header3 marginBottom={theme.name === "Mobile" ? "1.5rem" : "1rem"}  theme={theme}>{subHeading}</Header3>
 
        <Test content={content} />
       
       { eventLink? (
         <a href={eventLink} target='_blank'>
        <Button>
          
          {linkLabel}</Button>
          </a>
       ) : null}
        
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
