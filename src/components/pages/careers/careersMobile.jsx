import React from "react";

import { useTheme } from "styled-components";
import { Container, SectionContainer, PostContainer,} from "../../global/GlobalStyles";

import HomeImage from "../../../images/carrers-hero.jpg";

import { InnerContainer, RightContainer, Button } from "./styled-components";
import { BC1, Header1, BC3, Header2, Header4 } from "../../global/fontStyles";

import Footer from "../../Common/Footer/Footer";
import Home from "../../Common/MobileHome";

import { careers } from "./careersList"
const MobileLanding = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
       <Home HomeImage={HomeImage} path={pageProps.path} />
      <Container theme={theme} style={{paddingBottom: `6rem`}}>
       
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
          <Header1 theme={theme} marginBottom="1rem">
                Careers
              </Header1>
              <BC1 theme={theme}>
                Want to take the next step in your career?
              </BC1>
              <BC1 theme={theme}>
                At the Scott Pickett Group, we’re serious about sharing our true
                passion for hospitality with our guests. We strive to make every
                guest’s visit a memorable experience.
              </BC1>
              <BC1 theme={theme}>
                Our staff are our most valuable asset, and we are always looking
                out for like-minded people to help us achieve our vision. We
                recognise the importance of working towards our vision as one
                team, as diverse as our venues are. We work hard to make sure
                that every staff member lives by our Scott Pickett Group values,
                being Generous, Respectful, Grounded, Creative, Inclusive and
                Bold.
              </BC1>
              <BC1 theme={theme}>
                We are proud to offer a working environment where staff can
                learn and grow, with extensive career progression opportunities
                within our group and are always happy to hear from prospective
                team members. See our current roles below or send your CV to
                careers@scottpickettgroup.com.au for any roles which aren’t
                currently advertised.
              </BC1>
          </InnerContainer>
        </SectionContainer>
{/* 
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <RightContainer>
              <Header2 theme={theme}>Waitress - FOH All Rounder</Header2>
              <Header4 theme={theme}>Longrain melbourne</Header4>
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
                <li>- Must be a passionate, friendly and reliable team player
                </li>
                <li>- Must thrive in a busy environment - Immediate start necessary
                </li>
              </BC3>
              <Button>Apply</Button>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <RightContainer>
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
                <li>- Must be a passionate, friendly and reliable team player
                </li>
                <li>- Must thrive in a busy environment - Immediate start necessary
                </li>
              </BC3>
              <Button>Apply</Button>
            </RightContainer>
          </InnerContainer>
        </SectionContainer> */}
        {careers &&
          careers.map(career => (
            <SectionContainer>
              <InnerContainer>
                
                  <PostContainer>
                    <Header2 theme={theme} marginBottom={theme.name === "Mobile" ? "1rem" : ".75rem"} >
                      {career.title}
                    </Header2>
                    <Header4 theme={theme} marginBottom={theme.name === "Mobile" ? "1.5rem" : "1.25rem"} >
                      {career.venue}
                    </Header4>
                    <BC3 theme={theme} marginBottom=".5rem" light>
                      {career.description}
                    </BC3>
                    <Button>
                    <a
                      href={`${career.link}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: `none`, color: `inherit` }}
                    >
                      Apply
                    </a>
                  </Button>
                  </PostContainer>
                 
               
              </InnerContainer>
            </SectionContainer>
          ))}
      </Container>
      <Footer />
    </div>
  ) : (
    <div></div>
  );
};

export default MobileLanding;
