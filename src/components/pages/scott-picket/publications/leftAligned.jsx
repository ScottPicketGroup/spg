import React from "react";
import { useTheme } from "styled-components";

import {

  Grid,
  Item,

} from "./styled-components";
import { BC3, BC2, Header2, Header3 } from "../../../global/fontStyles";

import PublicationImage from "./publicationImage";
import marriage from '../../../../images/publications/flavours.png'
const LeftAligned = ({ data, images }) => {

  const theme = useTheme();
  console.log(data)
  return theme ? (
    <Grid cols="2">
     <Item>
       <PublicationImage src={marriage} />
        
      </Item>
      <Item>
      <Header2 marginBottom="1rem" marginTop="-5rem"  theme={theme}>Marriage Of Flavours</Header2>
        <Header3 marginBottom="1rem" theme={theme}>Sweet. Sour. Bitter. Salty. Spicy. Umami. Temperature. Texture.</Header3>
 
       
            <BC3 light >The marriage of contrasting and complementary flavours has driven my way of cooking since the early days of my career, earning me a reputation for flavour combinations and incredibly tasty food.</BC3>
      
       
       <BC3 light>From my interpretations of the classic combinations to more unusual pairings that bring unexpected sensory delight, these are dishes and ideas to help you find a new harmony in the way you cook.</BC3>
       <BC3 light>
            Available in local bookstores or <a href="https://www.penguin.com.au/books/marriage-of-flavours-9780143789130?v=2&amp;rv=4&amp;utm_expid=.nIywxqyASHCa5KpnTueQsQ.1&amp;utm_referrer=&amp;mc_cid=67e9aabd62&amp;mc_eid=286a1eea75" target="_blank" style={{color: `inherit`}}> order a copy online</a>
            </BC3>
        
      </Item>
    </Grid>
  ) : (
    <div></div>
  );
};

export default LeftAligned;
