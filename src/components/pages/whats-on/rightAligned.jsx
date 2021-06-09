import React from "react";
import { useTheme } from "styled-components";

import { Button, Grid, Item } from "./styled-components";
import { BC3, Header2, Header3 } from "../../global/fontStyles";
import EventImage from "./eventImage";

const LeftAligned = ({ data }) => {
  const theme = useTheme();

  return theme ? (
    <Grid cols={theme.name === "Desktop" ? 2 : 1}>
      <Item>
        <Header2 theme={theme}>{data.heading}</Header2>
        <Header3 theme={theme}>{data.subHeading}</Header3>

        <BC3 theme={theme}>{data.content}</BC3>
        <Button>Learn More</Button>
      </Item>
      <Item>
        <EventImage src={data.image} />
      </Item>
    </Grid>
  ) : (
    <div></div>
  );
};

export default LeftAligned;
