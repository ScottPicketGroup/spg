import React from "react";

import { useTheme } from "styled-components";
import { Container, SectionContainer } from "../../global/GlobalStyles";

import HomeImage from "../../../images/carrers-hero.jpg";

import { InnerContainer, RightContainer, Button } from "./styled-components";
import { BC1, Header1, BC3, Header2, Header4 } from "../../global/fontStyles";

import Footer from "../../Common/Footer/Footer";
import Home from "../../Common/MobileHome";
import ContactUsForm from "./contact-us/ContactUsForm";
const MobileLanding = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
       <Home HomeImage={HomeImage} path={pageProps.path} />
      <Container theme={theme} style={{paddingBottom: `6rem`}}>
       
      <SectionContainer>
          <InnerContainer marginTop="3.5rem" theme={theme} displayBlock>
           
           
              <Header1 theme={theme}>Contact </Header1>
              <BC1 theme={theme}>
              Please fill out the form below for all Scott Pickett Group enquiries, we’d love to hear from you.
              </BC1>

              <BC1 theme={theme}>
              If your enquiry relates to a specific Scott Pickett Group venue, please see the venue's website for details.
              </BC1>
         
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer marginTop="3.5rem">
            
              <ContactUsForm />
      
          </InnerContainer>
        </SectionContainer>
      </Container>
      <Footer />
    </div>
  ) : (
    <div></div>
  );
};

export default MobileLanding;
