import React from "react"
import { BC1, BC3, Header1, Header2 } from "../../../global/fontStyles"
import IntroductionRenderer from "../../../Common/RichTextRenderers/IntroductionRenderer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  InnerContainer,
  LeftContainer,
  SectionContainer,
  RightContainer,
  Button,
} from "../../../global/GlobalStyles"
import { useSpPantryData } from "../PantryQuery"
import { Grid, Item } from "../styled-components"
import { Link } from "gatsby"

const ProductsGrid = ({ theme }) => {
  const { products } = useSpPantryData()
  console.log("products[0]", products[0])
  return (
    <SectionContainer>
      <InnerContainer>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <Grid>
            {products.map((product, i) => (
              <Item>
                <GatsbyImage
                  image={getImage(products[i].productImage)}
                  alt=""
                />
                <Header1 marginTop="1.75rem">{products[i].productName}</Header1>
                <BC3>From {products[i].restaurantSource.toUpperCase()}</BC3>
                <BC3 marginTop="2rem" marginBottom="1rem">
                  {products[0].shortIntro}
                </BC3>
                <Link to={`/${product.productName.toLowerCase().replace(/\s/g, '+')}`}>
                <Button margin="1rem 0">Shop Now</Button>
                </Link>
              </Item>
            ))}
          </Grid>
        </RightContainer>
      </InnerContainer>
    </SectionContainer>
  )
}

export default ProductsGrid
