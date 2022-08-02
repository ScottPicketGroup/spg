import React from "react"
import { Helmet } from "react-helmet"

import {
  InnerContainer,
  LeftContainer,
  RightContainer,
  SectionContainer,
} from "../../../global/GlobalStyles"
import { ExternalForm } from "./ExternalFormStyledComponents"
const ContactFormSproutSend = () => {
  return (
    <SectionContainer>
      <InnerContainer marginTop="3.5rem">
        <LeftContainer></LeftContainer>
        <RightContainer>
          <ExternalForm id="CONTACTA_6249530a2d21bc0c493aafb5" />

          <Helmet>
            <script type="text/javascript" async>
              var script = document.createElement("script"); script.type =
              "text/javascript"; script.src =
              "https://forms.contacta.io/6249530a2d21bc0c493aafb5.js";
              document.getElementsByTagName("head")[0].appendChild(script);
            </script>
          </Helmet>
        </RightContainer>
      </InnerContainer>
    </SectionContainer>
  )
}

export default ContactFormSproutSend

