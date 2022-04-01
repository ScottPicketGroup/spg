import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { getImage, StaticImage } from "gatsby-plugin-image"
import { useTheme } from "styled-components"
import {
  Container,
  FullImageContainer,
  SectionContainer,
} from "../../global/GlobalStyles"

import {
  InnerContainer,
  RightContainer,
  LeftContainer,
  Grid,
  Item,
  ItemImgLink,
  ItemInfoContainer,
  ItemExpandElement,
} from "./styled-components"
import { BC1, Header1, BC3, Header2 } from "../../global/fontStyles"

import Footer from "../../Common/Footer/Footer"
import Home from "../../Common/DesktopHome"
import SliderFull from "../../image-slider-full/Slider"
import SignUpModal from "./SignUpModal"
import Venues from "./venues/venues"

const captions = [
  "Matilda 159 Domain",
  "Longrain Melbourne",
  "Chancery Lane Bistro",
  "Estelle",
]
const Landing = ({ pageProps }) => {
 
  const [signUp, setSignUp] = useState(false)
  const theme = useTheme()
  
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: {}
          absolutePath: { regex: "/images/landing-carousel/" }
        }
      ) {
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
      file(name: { in: "home-hero" }) {
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

  return theme ? (
    <div>
      <Container theme={theme}>
        <Home HomeImage={image} path={pageProps.path} />
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Scott Pickett Group</Header1>
              <BC1 theme={theme}>
                Welcome to the Scott Pickett Group. We are proud to operate a
                growing list of award-winning Melbourne restaurants and
                establishments. Our restaurants are diverse in fare and
                experience; from precise European technique at Chancery Lane to
                punchy Thai flavours at Longrain, yet all have one thing in
                common: all are fuelled by our passion for great food and great
                hospitality. Unsurprisingly, our mission is ‘For every guest to
                experience our true passion for hospitality.’
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
                <Link to="/scott-pickett" style={{ textDecoration: `none` }}>
                  <BC1 link={true} theme={theme} marginBottom="6rem">
                    Read more about Scott Pickett
                  </BC1>
                </Link>
              </Link>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
      </Container>

      <SliderFull images={data} captions={captions} />

      <Container theme={theme}>
        <SectionContainer style={{ marginBottom: `2.25rem 0 9rem` }}>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Venues</Header1>
              <Venues />
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer style={{ marginTop: `6rem` }}>
            <LeftContainer></LeftContainer>
            <RightContainer>
              
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
                collaborations and more from the Scott Pickett Group.
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
    <SignUpModal signUp={signUp} setSignUp={setSignUp}/>
    </div >
  ) : (
  <div></div>
)
}

export default Landing
