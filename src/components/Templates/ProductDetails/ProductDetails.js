import React from "react"
import { BC1, BC3, Header1 } from "../../global/fontStyles"
import {
  InnerContainer,
  LeftContainer,
  SectionContainer,
} from "../../global/GlobalStyles"
import IntroductionRenderer from "../../Common/RichTextRenderers/IntroductionRenderer"

import { Header2, ProductItem, RightContainer } from "../styled-components"
const ProductDetails = ({ theme, productDetails }) => {
  const { label, text, details } = productDetails[0]
  console.log("productDetails", productDetails[0])
  return (
    <SectionContainer>
      <LeftContainer></LeftContainer>
      <RightContainer product>
        {productDetails.map((product, i) => (
          <ProductItem>
            <Header2 style={{ marginRight: `5rem` }}>{product.label}</Header2>
            {details && (
              <IntroductionRenderer node={product.details} product={true} />
            )}
          </ProductItem>
        ))}
      </RightContainer>
    </SectionContainer>
  )
}

export default ProductDetails
