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
  Button,
  PostContainer,
} from "../../global/GlobalStyles"
import { BC1, Header1, BC3, Header2, Header4 } from "../../global/fontStyles"

import Footer from "../../Common/Footer/Footer"
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
              <Header1 theme={theme} marginBottom="1rem">Careers</Header1>
              <BC1 theme={theme}>
                Want to take the next step in your career?
              </BC1>
              <BC1 theme={theme}  >
              At the Scott Pickett Group, we’re serious about sharing our true passion for
hospitality with our guests. We strive to make every guest’s visit a memorable
experience.
              </BC1>
              <BC1 theme={theme} >
              Our staff are our most valuable asset, and we are always looking out for like-
minded people to help us achieve our vision. We recognise the importance of
working towards our vision as one team, as diverse as our venues are. We
work hard to make sure that every staff member lives by our Scott Pickett
Group values, being Generous, Respectful, Grounded, Creative, Inclusive
and Bold.
              </BC1>
              <BC1 theme={theme} >
              We are proud to offer a working environment where staff can learn and grow, with
extensive career progression opportunities within our group and are always happy
to hear from prospective team members. See our current roles below or send
your CV to careers@scottpickettgroup.com.au for any roles which aren’t
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
                <Header2 theme={theme} marginBottom=".5rem">Chefs of all Grades</Header2>
                <Header4 theme={theme} >ALL RESTAURANTS</Header4>
                <BC3 theme={theme} marginBottom=".5rem">
                  <BC3>
                  The Scott Pickett group has some exciting opportunities for chefs of all grades to work with one of Melbourne's most prestigious and fast-growing hospitality groups.
                  </BC3>
                </BC3>
              </PostContainer>
              <Button>
                <a href=" https://www.seek.com.au/job/53168482?type=standard#searchRequestToken=8b01ae7c-f3d1-4636-8cf8-53d23087281e" target="_blank"
                style={{textDecoration: `none`}}
                >
                Apply
                </a>
                </Button>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <PostContainer>
                <Header2 theme={theme} marginBottom=".5rem"> Sous Chef  </Header2>
                <Header4 theme={theme} >NEW RESTAURANT OPENING SOON</Header4>
                <BC3 theme={theme} marginBottom=".5rem">
                  <BC3>
                  Exciting sous chef role to become available at new French Bistro. 
                  </BC3>
                </BC3>
              </PostContainer>
              <Button>
                <a href=" https://www.seek.com.au/job/52878653?type=standard#searchRequestToken=8b01ae7c-f3d1-4636-8cf8-53d23087281e" target="_blank"
                style={{textDecoration: `none`,}}
                >
                Apply
                </a>
                </Button>
            </RightContainer>
          </InnerContainer>
        </SectionContainer> 
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <PostContainer>
                <Header2 theme={theme}>Head Chef</Header2>
                <Header4 theme={theme}>ESTELLE</Header4>
                
                <BC3 theme={theme}>
                This is a rare opportunity to add your chapter to the long life of Estelle. We are looking for an industry leader, a head chef above the rest.
                </BC3>
                </PostContainer>
                <Button>
                <a href="https://www.seek.com.au/job/52866344?type=standard#searchRequestToken=8b01ae7c-f3d1-4636-8cf8-53d23087281e" target="_blank"
                style={{textDecoration: `none`,}}
                >
                Apply
                </a>
                </Button>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
       
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <PostContainer>
                <Header2 theme={theme}>Production Kitchen/Events Driver - Casual</Header2>
                <Header4 theme={theme}>SP EVENTS</Header4>
                
                <BC3 theme={theme}>
                Join our Scott Pickett Events team in this casual position assisting with events across our restaurant brands. 
                </BC3>
               
                <Button>
                <a href="https://www.seek.com.au/job/52971927?type=standard#searchRequestToken=8b01ae7c-f3d1-4636-8cf8-53d23087281e" target="_blank"
                style={{textDecoration: `none`,}}
                >
                Apply
                </a>
                </Button>
                </PostContainer>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <PostContainer>
                <Header2 theme={theme}>Floor Staff & Baristas</Header2>
                <Header4 theme={theme}>MATILDA 159</Header4>
                
                <BC3 theme={theme}>
                Scott Pickett's hatted Southside restaurant, Matilda 159 is looking to expand the front of house team with floor staff and baristas to help launch our new brunch offering.
                </BC3>
               
                <Button>
                <a href="https://www.seek.com.au/job/52766323?type=standout#searchRequestToken=8b01ae7c-f3d1-4636-8cf8-53d23087281e" target="_blank"
                style={{textDecoration: `none`,}}
                >
                Apply
                </a>
                </Button>
                </PostContainer>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        {/* 
        
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
