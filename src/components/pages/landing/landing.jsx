import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import {getImage, StaticImage } from "gatsby-plugin-image"
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
} from "./styled-components"
import { BC1, Header1, BC3, Header2 } from "../../global/fontStyles"

import Footer from "../../Common/Footer"
import Home from "../../Common/DesktopHome"
import Slider from "../../image-slider-full/Slider"


const Landing = ({ pageProps }) => {
  const theme = useTheme()
  const data = useStaticQuery(graphql`
  {
    allFile(
      filter: {extension: {}, absolutePath: {regex: "/images/landing-carousel/"}}
    ) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.5)
          }
        }
      }
    }
    file(name: {in: "home-hero"}) {
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
    <div style={{ background: `#f9f9f4` }}>
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
                <BC1 link={true} theme={theme} marginBottom="6rem">
                  Read more about Scott ‘Cheffo’ Pickett
                </BC1>
              </Link>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
      </Container>

      <Slider images={data}/>
      <Container theme={theme}>
        <SectionContainer style={{ marginBottom: `2.25rem 0 9rem` }}>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Venues</Header1>
              <BC1 theme={theme}>
                Our developing list of Melbourne venues includes European-bistro
              <i> Chancery Lane</i>, contemporary Australian <i>Matilda</i>, modern-Thai 
                <i> Longrain</i>, contemporary Australian <i>Estelle</i>, vibrant CBD bar
                <i>Longsong</i>, European coffee-bar and provedore <i>Le Shoppe</i>,
                Modern Italian <i>Pastore</i>, European deli <i>Pickett’s Deli</i> and
                offsite catering <i>SP Events</i>.
              </BC1>
              <BC1>
                Soon to join the family will be <i>Smith Street Bistro</i>, a classic
                bistro with a North-side edge.
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
                  <ItemImgLink href='http://www.chancerylane.com.au ' target="_blank">
                    <FullImageContainer>
                    <StaticImage 
                 placeholder="blurred"
                    src="../../../images/home-venues/CL.jpg" alt="Chancery Lane" />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>
                      Chancery Lane
                    </Header2>
                    <BC3 link={true}>Little Collins St, Melbourne</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  <ItemImgLink href='http://www.theestelle.com.au' target="_blank">
                    <FullImageContainer>
                    <StaticImage 
                    placeholder="blurred"
                    src="../../../images/home-venues/Estelle.jpg" alt="Chancery Lane" />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>Estelle</Header2>
                    <BC3 link={true}>High St, Northcote</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href='http://www.longrainmelbourne.com' target="_blank">
                    <FullImageContainer>
                    <StaticImage 
                    placeholder="blurred"
                    src="../../../images/home-venues/LG.jpg" alt="Chancery Lane" />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>Longrain</Header2>
                    <BC3 link={true}>Little Bourke St, Melbourne </BC3>
                  </ItemImgLink>
                </Item>

                <Item link={true}>
                  {" "}
                  <ItemImgLink href='https://matilda159.com/' target="_blank">
                    <FullImageContainer>
                    <StaticImage 
                    placeholder="blurred"
                    src="../../../images/home-venues/Matilda.jpg" alt="Chancery Lane" />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>Matilda</Header2>
                    <BC3 link={true}>Domain Rd, South Yarra</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href='http://www.pastorerestaurant.com.au' target="_blank">
                    <FullImageContainer>
                    <StaticImage 
                    placeholder="blurred"
                    src="../../../images/home-venues/Pastore.jpg" alt="Chancery Lane" />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>Pastore</Header2>
                    <BC3 link={true}>Dandenong Rd, Chadstone</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href='http://www.longsong.com.au' target="_blank">
                    <FullImageContainer>
                    <StaticImage 
                    placeholder="blurred"
                    src="../../../images/home-venues/Longsong.jpg" alt="Chancery Lane" />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>Longsong</Header2>
                    <BC3 link={true}>UPSTAIRS, Little Bourke St, Melbourne</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href='http://www.leshoppe.com.au' target="_blank">
                    <FullImageContainer>
                    <StaticImage 
                    aspectRatio={3 / 2}
                    placeholder="blurred"
                    src="../../../images/home-venues/LeShoppe.jpg" alt="Chancery Lane" />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>
                      Le Shoppe
                    </Header2>
                    <BC3 link={true}>‘Little Collins St, Melbourne</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href='http://' target="_blank">
                    <FullImageContainer>
                    <StaticImage 
                    aspectRatio={3 / 2}
                    placeholder="blurred"
                    layout="fullWidth"
                    src="../../../images/home-venues/events.png" alt="Chancery Lane" />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>
                      SP Events
                    </Header2>
                    <BC3 link={true}>Victoria</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href='http://www.pickettsdeli.com' target="_blank">
                    <FullImageContainer>
                    <StaticImage 
                    aspectRatio={3 / 2}
                    placeholder="blurred"
                    layout="fullWidth"
                    src="../../../images/home-venues/deli.jpg" alt="Chancery Lane" />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>
                    Pickett’s Deli & Rotisserie
                    </Header2>
                    <BC3 link={true}>Terminal 3, Melbourne Airport </BC3>
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

