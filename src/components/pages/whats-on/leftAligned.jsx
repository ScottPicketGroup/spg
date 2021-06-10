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

const LeftAligned = ({ data }) => {
  const theme = useTheme();

  return theme ? (
    <Grid cols="2">
      <Item>
        <EventImage src={data.image} />
      </Item>
      <Item>
        <Header2 theme={theme}>{data.heading}</Header2>
        <Header3 theme={theme}>{data.subHeading}</Header3>

        <BC3 theme={theme}>{data.content}</BC3>
        <Button>Learn More</Button>
      </Item>
    </Grid>
  ) : (
    <div></div>
  );
};

export default LeftAligned;
