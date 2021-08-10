import React from "react"
import { useTheme } from "styled-components"
import { getImage, StaticImage } from "gatsby-plugin-image"
import { Header1, Header2, Header3, BC3 } from "../../../global/fontStyles"
import {
  SectionContainer,
  InnerContainer,
 
} from "../../../global/GlobalStyles"

import { RightContainer,
  LeftContainer, PublicationsHeader} from "./styled-components"

import LeftAligned from "./leftAligned"
import RightAligned from "./rightAligned"
const Publications = () => {

  const theme = useTheme()
  return theme ? (
      <>
      
    <SectionContainer marginTop="9rem" theme={theme}>
      <LeftContainer theme={theme} />
      <RightContainer theme={theme} >
      <PublicationsHeader theme={theme}
        >
          Publications
        </PublicationsHeader>
        <SectionContainer>
          <InnerContainer>
           
       
              <LeftAligned />
           
          </InnerContainer>
      
        </SectionContainer>
        <SectionContainer>
         
          <InnerContainer>
           
       
          
              <RightAligned />
          </InnerContainer>
        </SectionContainer>
        
        {/* <Header1
          style={{
            borderBottom: `1px solid rgba(51, 51, 51, 25%)`,
            paddingBottom: `5.75rem`,
          }}
        >
          Publications
        </Header1>
        <TimeLineGrid>
          <LeftGrid>
            <Header2 marginBottom="1rem">Marriage of Flavours</Header2>
            <Header3 marginBottom="1.25rem">
            Sweet. Sour. Bitter. Salty. Spicy. Umami. Temperature. Texture.
            </Header3 >
            <BC3 light>
            The marriage of contrasting and complementary flavours has driven Scott’s
way of cooking since the early days of his career, earning him a reputation for
brilliant combinations and incredibly tasty food.
            </BC3>
            <BC3 light>
            From Scott’s interpretations of the classic combinations to more unusual
pairings that bring unexpected sensory delight, these are dishes and ideas to
help you find a new harmony in the way you cook.
            </BC3>
            <BC3 light>
            Available in local bookstores or <a href="https://www.penguin.com.au/books/marriage-of-flavours-9780143789130?v=2&amp;rv=4&amp;utm_expid=.nIywxqyASHCa5KpnTueQsQ.1&amp;utm_referrer=&amp;mc_cid=67e9aabd62&amp;mc_eid=286a1eea75" target="_blank" style={{color: `inherit`}}> order a copy online</a>
            </BC3>
          </LeftGrid>
          <RightGrid>
            <StaticImage
              placeholder="blurred"
              src="../../../../images/publications/flavours.png"
              alt="Marriage of Flavours"
              aspectRatio="9/16"
              objectFit="cover"
            />
          </RightGrid>
        </TimeLineGrid>
      </RightContainer>
    </SectionContainer>
     <SectionContainer marginTop="6rem">
     <LeftContainer />
     <RightContainer>
      
       <TimeLineGrid style={{
            borderBottom: `1px solid rgba(51, 51, 51, 25%)`,
            paddingBottom: `5.75rem`,
          }}>
         <LeftGrid>
           <Header2 marginBottom="1rem">Marriage of Flavours</Header2>
           <Header3 marginBottom="1.25rem">
           Sweet. Sour. Bitter. Salty. Spicy. Umami. Temperature. Texture.
           </Header3 >
           <BC3 light>
           A Cook’s Story tells of a life that combines a passion for food with the art and
craft of cooking. It’s an open and sometimes confronting account of dramas in
the kitchen, the roller-coaster of opening a restaurant, the demands of
opening more, and the pleasures and challenges of competition
           </BC3>
          
           <BC3 light>
           Available for purchase in local bookstores 
           </BC3>
         </LeftGrid>
         <RightGrid>
           <StaticImage
             placeholder="blurred"
             src="../../../../images/publications/sp-book.jpg"
             alt="Marriage of Flavours"
             aspectRatio="9/16"
             objectFit="cover"
           />
         </RightGrid>
       </TimeLineGrid> */}
     </RightContainer>

     
   </SectionContainer>
   </>
  
   ) : (
     <div></div>
   )
}

export default Publications
