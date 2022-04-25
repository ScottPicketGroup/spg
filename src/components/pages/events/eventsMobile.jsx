import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"
import { useTheme } from "styled-components"
import {
  Container,
  SectionContainer,
  FullImageContainer,
} from "../../global/GlobalStyles"

import HomeImage from "../../../images/heros/events-hero.jpg"
import { InnerContainer, RightContainer, Grid, Item } from "./styled-components"
import { BC1, Header1, BC3, ItemImgCaption } from "../../global/fontStyles"
import Footer from "../../Common/Footer/Footer"
import MobileHome from "../../Common/MobileHome"
import Slidera from "../../image-slider-full/Slider"
import ContentfulSliderFullPage from "../../image-slider-full/ContentfulSlider"

const captions = [
  "Oscar’s and The Harrison private dining rooms at Matilda",
  "Enclosed courtyard at Estelle",
]

const MobileEvents = ({ pageProps }) => {
  const data = useStaticQuery(graphql`
    {
      contentfulEventsPageContent(
        id: { eq: "eafc242e-19f2-50d6-ad74-092d024bd738" }
      ) {
        sliderImages {
          gatsbyImageData(placeholder: BLURRED)
          title
        }
      }

      file(name: { in: "events-hero" }) {
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
  `)
  const image = getImage(data.file)
  const theme = useTheme()

  return theme ? (
    <div>
      <MobileHome HomeImage={image} path={pageProps.path} old={true} />
      <Container theme={theme} style={{ paddingBottom: `6rem` }}>
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>Private dining at our restaurants</Header1>
            <BC1 theme={theme}>
              Let us look after you as we help to bring your special event to
              life. From intimate dinners of 8–10 guests to extravagant cocktail
              soirées of 200... We offer dedicated staff, bespoke menus, room
              dressing – the whole package.
            </BC1>
          </InnerContainer>
        </SectionContainer>
      </Container>
      <ContentfulSliderFullPage
        contentfulImages={data.contentfulEventsPageContent.sliderImages}
      />

      <Container theme={theme} style={{ paddingBottom: `6rem` }}>
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>Our Event Spaces </Header1>
            <BC1 theme={theme}>
              Visit the links below to learn more about the private spaces at
              each of our venues. If you’re not sure which venue will be the
              best fit, fill out the{" "}
              <Link
                to="/contact"
                style={{ color: `inherit`, textDecoration: `underline` }}
              >
                enquiry form
              </Link>{" "}
              and one of our events team will be in touch.
            </BC1>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <RightContainer>
              <Grid cols={1}>
                <Item
                  hover
                  href="https://chancerylane.com.au/private-events/"
                  target="_blank"
                >
                  <FullImageContainer>
                    <StaticImage
                      placeholder="blurred"
                      src="../../../images/events-pdrs/CL.jpg"
                      alt="Chancery Lane"
                    />
                  </FullImageContainer>
                  <ItemImgCaption theme={theme}>Chancery Lane</ItemImgCaption>
                  <BC3>Little Collins St, Melbourne</BC3>
                </Item>
                <Item
                  hover
                  href="https://www.theestelle.com.au/private-dining-events/"
                  target="_blank"
                >
                  <FullImageContainer>
                    <StaticImage
                      placeholder="blurred"
                      src="../../../images/events-pdrs/estelle-pdr.jpg"
                      alt="Estelle"
                    />
                  </FullImageContainer>
                  <ItemImgCaption>Estelle</ItemImgCaption>
                  <BC3>High St, Northcote</BC3>
                </Item>
                <Item
                  hover
                  href=" http://longrainmelbourne.com/event/"
                  target="_blank"
                >
                  <FullImageContainer>
                    <StaticImage
                      placeholder="blurred"
                      src="../../../images/events-pdrs/longgrain.jpeg"
                      alt="Longrain"
                    />
                  </FullImageContainer>
                  <ItemImgCaption>Longrain & Longsong</ItemImgCaption>
                  <BC3>Little Bourke St, Melbourne </BC3>
                </Item>

                <Item
                  href="https://matilda159.com/private-dining-events/"
                  target="_blank"
                >
                  <FullImageContainer>
                    <StaticImage
                      aspectRatio={3 / 2}
                      placeholder="blurred"
                      layout="fullWidth"
                      src="../../../images/events-pdrs/flowers.jpg"
                      alt="Matilda"
                    />
                  </FullImageContainer>
                  <ItemImgCaption>Matilda</ItemImgCaption>
                  <BC3>Domain Rd, South Yarra</BC3>
                </Item>

                <Item
                  href="https://smithstbistrot.com.au/private-dining"
                  target="_blank"
                >
                  <FullImageContainer>
                    <StaticImage
                      aspectRatio={3 / 2}
                      placeholder="blurred"
                      layout="fullWidth"
                      src="../../../images/events-pdrs/SSB.jpg"
                      alt="Smith Street Bistro"
                    />
                  </FullImageContainer>
                  <ItemImgCaption>Smith Street Bistrot</ItemImgCaption>
                  <BC3>Smith Street, Collingwood</BC3>
                </Item>
              </Grid>
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

export default MobileEvents
