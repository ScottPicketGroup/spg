import React from "react"
import { useTheme } from "styled-components"
import { Container, SectionContainer } from "../../global/GlobalStyles"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"



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
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: {}
          absolutePath: {}
          name: { in: "careers-hero" }
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
  
  const image = getImage(data.allFile.edges[0].node)
  const theme = useTheme()
console.log(careers)
  return theme ? (
    <div>
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <Home HomeImage={image} path={pageProps.path} />

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
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
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        {careers &&
          careers.map((career, i) => (
            <SectionContainer key={i}>
              <InnerContainer>
                <LeftContainer></LeftContainer>
                <RightContainer>
                  <PostContainer>
                    <Header2 theme={theme} marginBottom=".75rem">
                      {career.title}
                    </Header2>
                    <Header4 theme={theme} marginBottom="1.25rem">
                      {career.restaurantName}
                    </Header4>
                    <BC3 theme={theme} marginBottom=".5rem" light>
                      {career.jobDescription.jobDescription}
                    </BC3>
                  </PostContainer>
                  <Button>
                    <a
                      href={`${career.jobPostingLink}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: `none` }}
                    >
                      Apply
                    </a>
                  </Button>
                </RightContainer>
              </InnerContainer>
            </SectionContainer>
          ))}
      </Container>

      <Footer />
    </div>
  ) : (
    <div></div>
  )
}

export default Landing
