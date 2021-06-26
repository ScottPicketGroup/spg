import React from "react"

import { useTheme } from "styled-components"
import {
  Container,
  SectionContainer,
  FullImageContainer,
  ImageDiv,
  ImageView,
} from "../../global/GlobalStyles"

import HomeImage from "../../../images/events-hero.jpg"

import gridPic1 from "../../../images/events-pdrs/CL.jpg"
import gridPic2 from "../../../images/events-pdrs/estelle.jpg"
import gridPic3 from "../../../images/events-pdrs/longgrain.jpeg"
import gridPic4 from "../../../images/Screen Shot -4.png"
import gridPic5 from "../../../images/events-pdrs/pastore.png"
import gridPic6 from "../../../images/events-pdrs/pastore.png"

import {
  InnerContainer,
  RightContainer,
  RightContainerLink,
  LeftContainer,
} from "./styled-components"
import { BC1, Header1, BC3, ItemImgCaption } from "../../global/fontStyles"

import Footer from "../../Common/Footer"
import Home from "../../Common/DesktopHome"
import SliderFull from "./image-slider-full/Slider"

const Events = ({ pageProps }) => {
  const theme = useTheme()

  return theme ? (
    <div>
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <Home HomeImage={HomeImage} path={pageProps.path} />

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
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
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
      </Container>
      <SliderFull />
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>In-venue private events </Header1>
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
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainerLink hover href="http://www.google.com" target="_blank">
              <FullImageContainer>
                <ImageView>
                  <ImageDiv src={gridPic1}></ImageDiv>
                </ImageView>
              </FullImageContainer>
              <ItemImgCaption>CHANCERY LANE</ItemImgCaption>
              <BC3>Little Collins St, Melbourne</BC3>
            </RightContainerLink>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
              <RightContainerLink hover href="http://www.google.com" target="_blank">
              <FullImageContainer>
                <ImageView>
                  <ImageDiv src={gridPic2}></ImageDiv>
                </ImageView>
              </FullImageContainer>
              <ItemImgCaption>Estelle</ItemImgCaption>
              <BC3>High St, Northcote</BC3>
            </RightContainerLink>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
              <RightContainerLink hover href="http://www.google.com" target="_blank">
              <FullImageContainer>
                <ImageView>
                  <ImageDiv src={gridPic3}></ImageDiv>
                </ImageView>
              </FullImageContainer>
              <ItemImgCaption>Longrain</ItemImgCaption>
              <BC3>Little Bourke St, Melbourne</BC3>
            </RightContainerLink>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
             <RightContainerLink hover href="http://www.google.com" target="_blank">
              <FullImageContainer>
                <ImageView>
                  <ImageDiv src={gridPic4}></ImageDiv>
                </ImageView>
              </FullImageContainer>
              <ItemImgCaption>Matilda</ItemImgCaption>
              <BC3>Domain Road, South Yarra</BC3>
            </RightContainerLink>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
             <RightContainerLink hover href="http://www.google.com" target="_blank">
              <FullImageContainer>
                <ImageView>
                  <ImageDiv src={gridPic5}></ImageDiv>
                </ImageView>
              </FullImageContainer>
              <ItemImgCaption>Pastore</ItemImgCaption>
              <BC3>Dandenong Road, Chadstone</BC3>
            </RightContainerLink>
          </InnerContainer>
        </SectionContainer>
      </Container>
      <Footer />
    </div>
  ) : (
    <div></div>
  )
}

export default Events
