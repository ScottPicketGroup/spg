import React from "react"
import { useTheme } from "styled-components"
import { Container, SectionContainer } from "../../global/GlobalStyles"
import HomeImage from "../../../images/carrers-hero.jpg"
import { Link, graphql, useStaticQuery } from "gatsby"

import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import {
  InnerContainer,
  RightContainer,
  LeftContainer,
  LogoImg,
  Button,
  PostContainer,
} from "./styled-components"
import { BC1, Header1, BC3, Header2, Header4 } from "../../global/fontStyles"

import Footer from "../../Common/Footer"
import Home from "../../Common/DesktopHome"
const Landing = ({ pageProps }) => {
  const data = useStaticQuery(graphql`  {
    allFile(filter: {extension: {}, absolutePath: {}, name: {in: "careers-hero"}}) {
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
  const theme = useTheme()

  return theme ? (
    <div>
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <Home HomeImage={image} path={pageProps.path} />

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Careers</Header1>
              <BC1 theme={theme}>
                Want to take the next step in your career?
              </BC1>
              <BC1 theme={theme}>
                The Scott Pickett Group is one of Melbourne’s most respected
                hospitality groups, helmed by Chef Restaurateur Scott Pickett.
                Our award-winning Melbourne restaurants include Chancery Lane,
                Matilda, Longrain, Estelle and Pastore – and the list is
                growing.
              </BC1>
              <BC1 theme={theme}>
                At the Scott Pickett Group, we’re serious about sharing our true
                passion for hospitality with our guests. We strive to make every
                guest’s visit a memorable experience.
              </BC1>
              <BC1 theme={theme}>
                Our staff are one of our most valuable assets, and we are always
                looking out for like-minded people to help us achieve our
                vision. We recognise the importance of working towards our
                vision as one team, as diverse as our venues are. We work hard
                to make sure that every staff member lives by our Scott Pickett
                Group values, being Generous, Respectful, Grounded, Creative,
                Inclusive and Bold.
              </BC1>
              <BC1 theme={theme}>
                We are proud to offer a working environment where staff can
                learn and grow, with extensive career progression opportunities
                within our group and are always happy to hear from prospective
                team members. See our current roles below or send your CV to
                careers@scottpickettgroup.com.au for any roles which aren’t
                currently advertised.
              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <PostContainer>
                <Header2 theme={theme}>Chef de Partie: </Header2>
                <Header4 theme={theme}>CHANCERY LANE BISTRO </Header4>
                <Header4 theme={theme}>26TH JUNE 2021</Header4>
                <BC3 theme={theme}>
                  <BC3>
                    We are seeking a passionate Chef de Partie and commis chef
                    for Scott Pickett’s newest CBD restaurant, European bistro
                    Chancery Lane.
                  </BC3>
                </BC3>
              </PostContainer>
              <Button>
                <a href="https://www.seek.com.au/job/52699270?type=standard#searchRequestToken=011af1a2-e8fb-4bea-a982-f7ac39c7cdc5" target="_blank"
                style={{textDecoration: `none`, color: `#333333`}}
                >
                Apply
                </a>
                </Button>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        {/* 
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
  )
}

export default Landing
