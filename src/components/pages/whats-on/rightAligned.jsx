import React from "react";
import { useTheme } from "styled-components";

import { Button, Grid, Item } from "./styled-components";
import { BC3, Header2, Header3 } from "../../global/fontStyles";
import EventImage from "./eventImage";
import SliderFull from './image-slider-full/Slider'
const LeftAligned = ({ data }) => {
  const theme = useTheme();

  return theme ? (
    <Grid cols={theme.name === "Desktop" ? 2 : 1}>
      <Item>
      <Header2 marginBottom=".75rem"   theme={theme}>{data.heading}</Header2>
        <Header3 marginBottom="1rem" theme={theme}>{data.subHeading}</Header3>

        {data.content.map(para => (
          <BC3>{para}</BC3>
        ))}


         {
          data.links ? (
            <BC3>Join us at <a 
            style={{textDecoration: `underline`, color: `#333333`}}
            href="https://theestelle.com.au/truffle-dinners-2021/" target="_blank">Estelle,</a>&nbsp; 
            <a 
            style={{textDecoration: `underline`, color: `#333333`}}
            href="https://matilda159.com/truffle-dinners/ " target="_blank">Matilda </a>
             and      <a 
            style={{textDecoration: `underline`, color: `#333333`}}
            href="https://www.sevenrooms.com/events/chancerylane?_ga=2.27777660.151042862.1624840820-2029271887.1616714684&_gac=1.52828634.1621900158.Cj0KCQjwna2FBhDPARIsACAEc_XbWEp1kOKJC9B0Fh535zSxeXI2gepv3_hGx6XJPBGLDtY2-0TEBg8aAvvyEALw_wcB" target="_blank">Chancery Lane</a> as we celebrate truffle season with three decadent truffle menus.</BC3>
          ) : null
        }
        
        


       
       { data.buttonLink ? (
         <a href={data.buttonLink} target='_blank'>
        <Button>
          
          {data.buttonText}</Button>
          </a>
       ) : null}
        
      </Item>
      <Item>
        {data.images ? (
          <SliderFull images={data.images}/>
        ): <EventImage src={data.image} />}
        
      </Item>
    </Grid>
  ) : (
    <div></div>
  );
};

export default LeftAligned;
