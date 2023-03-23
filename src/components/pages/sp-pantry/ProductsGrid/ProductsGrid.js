import React from 'react'
import { BC1, Header1 } from "../../../global/fontStyles"
import IntroductionRenderer from "../../../Common/RichTextRenderers/IntroductionRenderer"
import {
  InnerContainer,
  LeftContainer,
  SectionContainer,
  RightContainer
} from "../../../global/GlobalStyles"
import { useSpPantryData } from '../PantryQuery'

const ProductsGrid = ({theme}) => {
    const { productsTitle, productsIntroduction } = useSpPantryData()
  return (
    <SectionContainer>
    <InnerContainer>
      <LeftContainer></LeftContainer>
      <RightContainer>
    
      </RightContainer>
    </InnerContainer>
  </SectionContainer>
  )
}

export default ProductsGrid