import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useTheme } from "styled-components"
import {
  Container,
  FullImageContainer,
  ImageDiv,
  ImageView,
  SectionContainer,
} from "../../global/GlobalStyles"

import HomeImage from "../../../images/homeImage.png"

import gridPic1 from "../../../images/home-venues/CL.jpg"
import gridPic2 from "../../../images/home-venues/Estelle.jpg"
import gridPic3 from "../../../images/home-venues/LG.jpg"
import gridPic4 from "../../../images/home-venues/Matilda.jpg"
import gridPic5 from "../../../images/home-venues/Pastore.jpg"
import gridPic6 from "../../../images/home-venues/Longsong.jpg"
import gridPic7 from "../../../images/home-venues/LeShoppe.jpg"
import gridPic8 from "../../../images/gridPic8.png"

import {
  InnerContainer,
  RightContainer,
  LeftContainer,
  LogoImg,
  Grid,
  Item,
  ItemImgLink,
} from "./styled-components"
import { BC1, Header1, BC3, Header2 } from "../../global/fontStyles"

import Footer from "../../Common/Footer"
import Home from "../../Common/DesktopHome"
import Slider from "./image-slider/Slider"

const Landing = ({ pageProps }) => {
  const theme = useTheme()

  return theme ? (
    <div style={{ background: `#f9f9f4` }}>
      <Container theme={theme}>
        <Home HomeImage={HomeImage} path={pageProps.path} />
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Scott Pickett Group</Header1>
              <BC1 theme={theme}>
                Welcome to the Scott Pickett Group. We are proud to operate a
                growing list of award-winning Melbourne restaurants and
                establishments. Our restaurants are diverse in fare and
                experience; from punchy Thai flavours at Longrain to precise
                European technique at Chancery Lane, yet all of our venues have
                one thing in common—all are fuelled by our passion for great
                food and great hospitality. Unsurprisingly, our mission is ‘For
                every guest to experience our true passion for hospitality.’
              </BC1>
              <BC1 theme={theme}>
                As one of Australia’s leading chefs and restaurateurs, Scott
                Pickett’s generous spirit and abundant personality are at the
                core of our establishments. He pairs his vast experience with
                his deep understanding of seasonality and respect for Australian
                growers and producers. Each Scott Pickett Group venue is a
                testament to the origins of the warm-hearted country boy with an
                obsessive dedication to excellence and passion for hospitality. 
              </BC1>
              <Link to="/scott-picket" style={{ textDecoration: `none` }}>
                <BC1 link={true} theme={theme}>
                  Read more about Scott ‘Cheffo’ Pickett
                </BC1>
              </Link>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
      </Container>

      <Slider />
      <Container theme={theme}>
        <SectionContainer style={{ marginBottom: `2.25rem 0 9rem` }}>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Venues</Header1>
              <BC1 theme={theme}>
                Our developing list of Melbourne venues includes European-bistro
                ‘Chancery Lane’, contemporary Australian ‘Matilda’, modern-Thai
                ‘Longrain’, contemporary Australian ‘Estelle’, vibrant CBD bar
                ‘Longsong’, European coffee-bar and provedore ‘Le Shoppe’,
                Modern Italian ‘Pastore’, European deli ‘Pickett’s Deli’ and
                offsite catering ‘SP Events’.
              </BC1>
              <BC1>
                Soon to join the family will be ‘Smith Street Bistro’, a classic
                bistro with a North-side edge.
              </BC1>

              {/* <Header1> Our Event Spaces</Header1> */}

              <BC1>
                {" "}
                The links below will take you to specific event pages for each
                of our venues, or if you’re not sure which venue will be the
                best fit, fill out the expressions of interest form and one of
                our events team will be in touch.
              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer style={{ marginTop: `6rem` }}>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={2}>
                <Item link={true}>
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv
                          src={gridPic1}
                          link={true}
                          ratio="3/2"
                        ></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `2.25rem` }}>
                      Chancery Lane
                    </Header2>
                    <BC3 link={true}>Little Collins St, Melbourne</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic2} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `2.25rem` }}>Estelle</Header2>
                    <BC3 link={true}>High St, Northcote</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic3} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `2.25rem` }}>Longrain</Header2>
                    <BC3 link={true}>Little Bourke St, Melbourne </BC3>
                  </ItemImgLink>
                </Item>

                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic4} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `2.25rem` }}>Matilda</Header2>
                    <BC3 link={true}>Domain Rd, South Yarra</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic5} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `2.25rem` }}>Pastore</Header2>
                    <BC3 link={true}>Dandenong Rd, Chadstone</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic6} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `2.25rem` }}>Longsong</Header2>
                    <BC3 link={true}>UPSTAIRS, Little Bourke St, Melbourne</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic7} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `2.25rem` }}>
                      Le Shoppe
                    </Header2>
                    <BC3 link={true}>Dandenong Rd, Chadstone</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic8} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `2.25rem` }}>
                      SP Events
                    </Header2>
                    <BC3 link={true}>AUSTRALIA</BC3>
                  </ItemImgLink>
                </Item>
              </Grid>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer style={{ paddingBottom: `9rem` }}>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>What's On</Header1>
              <BC1 theme={theme}>
                Stay up to date with the latest venue announcements, events,
                collaborations and more from the Scott Pickett Group:
              </BC1>
              <Link to="/whatson" style={{ textDecoration: `none` }}>
                <BC1 link={true} theme={theme}>
                  Learn More
                </BC1>
              </Link>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
      </Container>
      <Footer />
    </div>
  ) : (
    <div></div>
  )
}

export default Landing
