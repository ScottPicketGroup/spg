import React from 'react'
import { useTheme } from "styled-components";
import Logo from "../../../../images/logo.svg";
import SideImage from "../../../../images/Screen Shot 2021-04-18 at 1.39.34 pm.png";
import {
    Container,
    SectionContainer,
  } from "../../../global/GlobalStyles";
import {
  InnerContainer,
  TimeLineIMGContainer,
  TimeLineContainer,
  ImageView, 
  ImageContainer,
  TimeLineIMGInnerContainer,
  TimeLineGrid,
  RightGrid,
  LeftGrid,
  RightContainer,
  LeftContainer,
} from "../styled-components";

import {
  BC1,
  Header1,
  BC3,
  Header2,
  BC2,
} from "../../../global/fontStyles";
import Intro from './intro';
import TimelineItems from './timelineItems';
const Timeline = () => {
   return (
       <>
     <Intro/>
     <TimelineItems/>
     </>
     )
}

export default Timeline
