import React from "react"
import { BC1, BC3, Header1 } from "../../global/fontStyles"
import {
    Button,
  InnerContainer,
  LeftContainer,
  SectionContainer,
} from "../../global/GlobalStyles"
import IntroductionRenderer from "../../Common/RichTextRenderers/IntroductionRenderer"

import { Grid, Header2, Item, ProdcutHeader, ProductItem, RightContainer } from "../styled-components"
import { useSpPantryData } from "../../pages/sp-pantry/PantryQuery"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const ProductRange = ({ theme, productDetails }) => {
    const { products } = useSpPantryData()
    console.log("products[0]", products[0])
  return (
    <SectionContainer>
      <LeftContainer></LeftContainer>
      <RightContainer product>
        <Grid >
        {products.map((product, i) => (
              <Item>
                <GatsbyImage
                  image={getImage(products[i].productImage)}
                  alt=""
                />
                <ProdcutHeader marginTop="2.75rem">{products[i].productName}</ProdcutHeader>
                <BC3>From {products[i].restaurantSource.toUpperCase()}</BC3>
                
                
              </Item>
            ))}
        </Grid>
      </RightContainer>
    </SectionContainer>
  )
}

export default ProductRange
