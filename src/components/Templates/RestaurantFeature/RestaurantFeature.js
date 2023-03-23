import React from "react"
import { useTheme } from "styled-components"
import IntroductionRenderer from "../../Common/RichTextRenderers/IntroductionRenderer"
import PublicationsRenderer from "../../Common/RichTextRenderers/PublicationsRenderer"
import { IntroductionRendererContainer } from "../../Common/RichTextRenderers/styled-components"
import { Header2, Header3 } from "../../global/fontStyles"
import { Button, LeftContainer, SectionContainer } from "../../global/GlobalStyles"
import ContentfulSliderFullPage from "../../image-slider-full/ContentfulSlider"
//
import {
  Grid,
  Item,
  RestaurantGrid,
  RestaurantItem,
  RightContainer,
} from "../styled-components"

const RestaurantFeature = ({
  location,
  restaurantVerticalImage,
  restaurantAddress,
  restaurantSource,
  restaurantDescription,
  buttonLabel,
  buttonUrl,
}) => {
  const theme = useTheme()

  return theme ? (
    <SectionContainer>
      <LeftContainer></LeftContainer>
      <RightContainer none>
        <RestaurantGrid cols="2" first={1}>
          <RestaurantItem>
            {restaurantVerticalImage ? (
              <ContentfulSliderFullPage
                whatsOn={true}
                contentfulImages={[restaurantVerticalImage]}
                marginBottom
                path={location.pathname}
              />
            ) : null}
          </RestaurantItem>
          <RestaurantItem>
            <Header2
              marginBottom="1rem"
              marginTop={theme.name === "Mobile" ? `2.5rem` : ``}
              theme={theme}
            >
              {restaurantSource}
            </Header2>
            <Header3
              marginBottom={theme.name === "Mobile" ? "1.5rem" : "1rem"}
              theme={theme}
            >
              {restaurantAddress}
            </Header3>
            {restaurantDescription && (
              <PublicationsRenderer node={restaurantDescription} />
            )}
            
            {buttonUrl ? (
              <a href={buttonUrl} target="_blank" rel="noreferrer" style={{textDecoration: `none`}}>
                <Button>{buttonLabel}</Button>
              </a>
            ) : null} 
          </RestaurantItem>
        </RestaurantGrid>
      </RightContainer>
    </SectionContainer>
  ) : (
    <div></div>
  )
}

export default RestaurantFeature
