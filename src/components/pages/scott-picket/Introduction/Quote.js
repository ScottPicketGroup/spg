import React from 'react'
import { Quotation } from '../../../global/fontStyles'
import { SectionContainer } from '../../../global/GlobalStyles'
import { InnerContainer, QuotationContainer } from '../styled-components'

const Quote = () => {
  return (
    <SectionContainer>
          <InnerContainer displayBlock="true">
            <QuotationContainer>
              <Quotation 
              style={{
                paddingBottom: `9rem`
              }}
              >
                “Those years set the foundations of my values as a chef and
                restaurateur today. My approach always puts food at the front.
                It’s based on real cooking – with the greatest respect to the
                produce.”
              </Quotation>
            </QuotationContainer>
          </InnerContainer>
        </SectionContainer>
  )
}

export default Quote