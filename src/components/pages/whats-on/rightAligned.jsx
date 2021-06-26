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
        <Header2 theme={theme}>{data.heading}</Header2>
        <Header3 theme={theme}>{data.subHeading}</Header3>

        {data.content.map(para => (
          <BC3>{para}</BC3>
        ))}
        <Button>{data.buttonText}</Button>
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
