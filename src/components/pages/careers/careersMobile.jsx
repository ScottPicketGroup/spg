import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import { useTheme } from "styled-components";

import { Container, SectionContainer, PostContainer} from "../../global/GlobalStyles";

import HomeImage from "../../../images/heros/careers-hero.jpg";

import { InnerContainer, Button } from "./styled-components";
import { BC1, Header1, BC3, Header2, Header4 } from "../../global/fontStyles";

import Footer from "../../Common/Footer/Footer";
import Home from "../../Common/MobileHome";

const MobileLanding = ({ pageProps }) => {

  const data = useStaticQuery(graphql`
  {
    allContentfulJobsPostingPageContent {
      edges {
        node {
          jobPosts {
            title
            restaurantName
            jobPostingLink
            jobDescription {
              jobDescription
            }
          }
        }
      }
    }
  }
`)
const careers = data.allContentfulJobsPostingPageContent.edges[0].node.jobPosts
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

        {careers &&
          careers.map(career => (
            <SectionContainer>
              <InnerContainer>
                
                  <PostContainer>
                    <Header2 theme={theme} marginBottom={theme.name === "Mobile" ? "1rem" : ".75rem"} >
                    {career.title}
                    </Header2>
                    <Header4 theme={theme} marginBottom={theme.name === "Mobile" ? "1.5rem" : "1.25rem"} >
                    {career.restaurantName}
                    </Header4>
                    <BC3 theme={theme} marginBottom=".5rem" light>
                    {career.jobDescription.jobDescription}
                    </BC3>
                    <Button>
                    <a
                       href={`${career.jobPostingLink}`}
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
