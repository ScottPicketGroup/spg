import React, { useState } from "react";

import { useTheme } from "styled-components";
import {
  Container,
  SectionContainer,
  FullImageContainer,
  ImageDiv,
  ImageView,
} from "../../global/GlobalStyles";

import HomeImage from "../../../images/Screen Shot -1@2x.png";

import gridPic1 from "../../../images/events-pdrs/CL.jpg"
import gridPic2 from "../../../images/events-pdrs/estelle.jpg"
import gridPic3 from "../../../images/events-pdrs/longgrain.jpeg"
import gridPic4 from "../../../images/Screen Shot -4.png"
import gridPic5 from "../../../images/events-pdrs/pastore.png"

import {
  InnerContainer,
  RightContainer,
  Grid,
  Item,
} from "./styled-components";
import { BC1, Header1, BC3, ItemImgCaption } from "../../global/fontStyles";
import Footer from "../../Common/Footer";
import MobileHome from "../../Common/MobileHome";
import SliderFull from "./image-slider-full/Slider";

const MobileEvents = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <MobileHome HomeImage={HomeImage} path={pageProps.path} />
      <Container theme={theme} style={{ paddingBottom: `6rem` }}>
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>Events</Header1>
            <BC1 theme={theme}>
                The Scott Pickett Group is excited to launch our off-site
                catering offer, ‘SP Events’. Debuting with our Longrain pop-up
                at Sutton Grange Winery in March 2021, SP Events brings Scott
                Pickett’s food to you – whatever your event may be. We are able
                to offer our Estelle, Matilda, Longrain, Le Shoppe and ‘Scott’s
                Greatest hits’ menus offsite for weddings, corporate events or
                large-scale public events. Stay up to date with news from The
                Scott Pickett group to be the first to know when our full offer
                is live.
              </BC1>
              <BC1 link theme={theme}>
                Sign up to our email newsletter
              </BC1>
          </InnerContainer>
        </SectionContainer>

        </Container>
      <SliderFull />
      
      <Container theme={theme} style={{ paddingBottom: `6rem` }}>
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
           
          <Header1 theme={theme}>In-venue  </Header1>
          <Header1 theme={theme}> Private events </Header1>
              <BC1 theme={theme}>
                Parties of up to 8-10 guests can select from our regular menus
                and be seated in our main dining rooms, but for a more private
                soiree, each of our venues has private dining spaces to
                accommodate intimate dinners for 8 up to standing cocktail
                events of 250 guests.
                <br />
                <br />
                Let us look after you as we help to bring your special event to
                life. From dedicated staff, bespoke menus, room dressing – the
                lot.
              </BC1>
          
          </InnerContainer>
        </SectionContainer>
        
      </Container>
      <Footer />
    </div>
  ) : (
    <div></div>
  );
};

export default MobileEvents;
