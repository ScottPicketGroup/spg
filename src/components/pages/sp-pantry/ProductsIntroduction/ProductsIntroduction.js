import { Link } from "gatsby"
import React from "react"
import IntroductionRenderer from "../../../Common/RichTextRenderers/IntroductionRenderer"
import { BC1, Header1 } from "../../../global/fontStyles"
import {
  InnerContainer,
  LeftContainer,
  SectionContainer,
} from "../../../global/GlobalStyles"
import { useSpPantryData } from "../PantryQuery"
import { RightContainer } from "../styled-components"

const ProductsIntroduction = ({ theme }) => {
  const { productsTitle, productsIntroduction } = useSpPantryData()
  return (
    <SectionContainer>
      <InnerContainer>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <Header1 theme={theme}>{productsTitle}</Header1>
          <IntroductionRenderer node={productsIntroduction} />
        </RightContainer>
      </InnerContainer>
    </SectionContainer>
  )
}

export default ProductsIntroduction
