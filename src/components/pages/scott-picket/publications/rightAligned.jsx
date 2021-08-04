import React from "react";
import { useTheme } from "styled-components";

import {

  Grid,
  Item,

} from "./styled-components";
import { BC3, BC2, Header2, Header3 } from "../../../global/fontStyles";

import PublicationImage from "./publicationImage";


import spBook from '../../../../images/publications/sp-book.jpg'
const LeftAligned = ({ data, images }) => {
  const theme = useTheme();
  console.log(`data`, data, images)
  return theme ? (
    <Grid cols="2">
    
     <Item>
     <Header2 marginBottom="1rem" marginTop="-5rem"  theme={theme}>Scott Pickett: A Cook’s Story</Header2>
       {/* <Header3 marginBottom="1rem" theme={theme}>Sweet. Sour. Bitter. Salty. Spicy. Umami. Temperature. Texture.</Header3> */}

      
           <BC3 light >A Cook’s Story tells of my life combining a passion for food with the art and craft of cooking. It’s an open account of my dramas in the kitchen, the roller-coaster of opening a restaurant, the demands of opening more, and the pleasures and challenges of competition and success</BC3>
     
      
      
      <BC3 light>Available for purchase in local bookstores.</BC3>
       
     </Item>
     <Item>
      <PublicationImage src={spBook} />
       
     </Item>
   </Grid>
  ) : (
    <div></div>
  );
};

export default LeftAligned;
