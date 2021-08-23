import React from "react";
import { useTheme } from "styled-components";
import { Container, SectionContainer } from "../../global/GlobalStyles";
import HomeImage from "../../../images/carrers-hero.jpg";
import Logo from "../../../images/logo.svg";
import {
  InnerContainer,
  RightContainer,
  LeftContainer,
  LogoImg,
  Button,
  PostContainer,
} from "./styled-components";
import { BC1, Header1, BC3, Header2, Header4 } from "../../global/fontStyles";
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Footer from "../../Common/Footer/Footer";
import Home from "../../Common/DesktopHome";
import ContactUsForm from "./contact-us/ContactUsForm";
const Landing = ({ pageProps }) => {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: {extension: {}, absolutePath: {}, name: {in: "sp-events-hero"}}) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              aspectRatio: 1.5
              )
          }
        }
      }
    }
  }`)
  const image = getImage(data.allFile.edges[0].node)
  const theme = useTheme();

  return theme ? (
    <div>
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <Home HomeImage={image} path={pageProps.path} />

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>SP Events </Header1>
              <BC1 theme={theme}>
              The Scott Pickett Group is excited to launch our off-site catering offer, ‘SP Events’. Debuting with our Longrain pop-up at Sutton Grange Winery in March 2021, SP Events brings Scott Pickett’s food to you, whatever your event may be. We offer Estelle, Matilda, Longrain, Le Shoppe and ‘Scott’s Greatest Hits’ menus offsite for weddings, parties, corporate events or large-scale public events.


              </BC1>
           
                <BC1 theme={theme}>
                Stay up to date with news from the Scott Pickett group to be the first to know when our full offer is live.
                </BC1>
             
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
<SectionContainer>
  <InnerContainer>
    <LeftContainer></LeftContainer>
    <RightContainer>
      <ContactUsForm/>
    </RightContainer>
  </InnerContainer>
</SectionContainer>
        {/* <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <PostContainer>
                <Header2 theme={theme}>Waitress - FOH All Rounder</Header2>
                <Header4 theme={theme}>Longrain melbourne</Header4>
                <Header4 theme={theme}>10th April 2021</Header4>
                <BC3 theme={theme}>
                  <BC3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi volutpat risus efficitur nulla aliquam suscipit. Nulla
                    sed ullamcorper felis, a vulputate mi. Aenean enim leo,
                    egestas vitae ultrices at, placerat ac lorem. Donec tortor
                    augue, pulvinar et dictum vel, euismod id velit. Sed nec
                    suscipit mauris. Ut sollicitudin rutrum eros at maximus.
                    Duis vitae dui eu tellus dignissim commodo et in tortor.
                    Praesent ac magna vulputate, fringilla odio et, vehicula
                    lorem.
                  </BC3>
                  <li>- Casual, part-time & full-time positions available</li>
                  <li>- Must have experience in Hospitality </li>
                  <li>
                    - Must be a passionate, friendly and reliable team player
                  </li>
                  <li>
                    - Must thrive in a busy environment - Immediate start
                    necessary
                  </li>
                </BC3>
              </PostContainer>
              <Button>Apply</Button>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <PostContainer>
                <Header2 theme={theme}>Sous Chef</Header2>
                <Header4 theme={theme}>Matilda melbourne</Header4>
                <Header4 theme={theme}>10th April 2021</Header4>
                <BC3 theme={theme}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  volutpat risus efficitur nulla aliquam suscipit. Nulla sed
                  ullamcorper felis, a vulputate mi. Aenean enim leo, egestas
                  vitae ultrices at, placerat ac lorem. Donec tortor augue,
                  pulvinar et dictum vel, euismod id velit. Sed nec suscipit
                  mauris. Ut sollicitudin rutrum eros at maximus. Duis vitae dui
                  eu tellus dignissim commodo et in tortor. Praesent ac magna
                  vulputate, fringilla odio et, vehicula lorem.
                </BC3>
                <BC3>
                  <li>- Casual, part-time & full-time positions available</li>
                  <li>- Must have experience in Hospitality </li>
                  <li>
                    - Must be a passionate, friendly and reliable team player
                  </li>
                  <li>
                    - Must thrive in a busy environment - Immediate start
                    necessary
                  </li>
                </BC3>
              </PostContainer>
              <Button>Apply</Button>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header2 theme={theme}>BAR SUPERVISOR</Header2>
              <Header4 theme={theme}>Longrain melbourne</Header4>
              <Header4 theme={theme}>10th April 2021</Header4>
              <BC3 theme={theme}>
                <li> Casual, part-time & full-time positions available</li>
                <li> Must have experience in Hospitality </li>
                <li>
                  {" "}
                  Must be a passionate, friendly and reliable team player
                </li>
                <li> Must thrive in a busy environment</li>
                <li> Immediate start necessary</li>
              </BC3>
              <Button>Apply</Button>
            </RightContainer>
          </InnerContainer>
        </SectionContainer> */}
      </Container>

      <Footer />
    </div>
  ) : (
    <div></div>
  );
};

export default Landing;
