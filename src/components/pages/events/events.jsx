import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
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
  const data = useStaticQuery(graphql`
  {
    allFile(filter: {extension: {}, absolutePath: {}, name: {in: "events-hero"}}) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(
              
              placeholder: BLURRED
            
            )
          }
        }
      }
    }
  }`)
  const image = getImage(data.allFile.edges[0].node)
  return theme ? (
    <div>
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <Home HomeImage={image} path={pageProps.path} />

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>In-venue private events </Header1>
              <BC1 theme={theme}>
              Parties of up to 8-10 guests can select from our regular menus and be seated in our main dining rooms, but for a more private soiree, each of our venues has private dining spaces to accommodate intimate dinners for 8 up to standing cocktail events of 250 guests. 
              </BC1>
              <BC1>
              Let us look after you as we help to bring your special event to life. From dedicated staff, bespoke menus, room dressing – the lot.
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
              <Header1 theme={theme}>Our event spaces</Header1>
              <BC1 theme={theme}>
              The links below will take you to specific event pages for each of our venues, or if you’re not sure which venue will be the best fit, fill out the expressions of interest form and one of our events team will be in touch.
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
              <ItemImgCaption>Chancery Lane</ItemImgCaption>
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
