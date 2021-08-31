import React from "react"
import { useTheme } from "styled-components"
import { Container, SectionContainer } from "../../global/GlobalStyles"

import { graphql, useStaticQuery, getImage } from "gatsby"

import HomeImage from "../../../images/whats-on/whatsOnHero.jpg";



import {
  InnerContainer,
  RightContainer
} from "./styled-components";

import { BC1, Header1} from "../../global/fontStyles";

import Footer from "../../Common/Footer/Footer";
import Home from "../../Common/MobileHome";
import RightAligned from "./rightAligned";

const MobileLanding = ({ pageProps }) => {
  const theme = useTheme();
  const data = useStaticQuery(graphql`
    {
      allContentfulSpgWhatsOnEvent(sort: {fields: createdAt, order: ASC}){
        edges {
          node {
            eventLink
            Heading
            content {
              raw
            }
            images {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, aspectRatio: .526)
            }
            subHeading
            linkLabel
          }
        }
      }
      file(name: { in: "whats-on-hero" }) {
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
  const events = data.allContentfulSpgWhatsOnEvent.edges
  return theme ? (
    <div>
      <Home HomeImage={HomeImage} path={pageProps.path} />
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>What's On</Header1>
            <BC1 theme={theme}>
            Five restaurants, three bars, two delis, one events company and
                more in the pipeline gives us plenty of things to keep us busy
                and you entertained. Read on to hear what’s coming up at our
                Scott Pickett Group venues.
            </BC1>
          </InnerContainer>
        </SectionContainer>

        {events &&
          events.map((item, index) => {
            return (
              <SectionContainer key={index}>
                <InnerContainer displayBlock={true}>
                  <RightContainer>
                    <RightAligned data={item}/>
                  </RightContainer>
                </InnerContainer>
              </SectionContainer>
            );
          })}
      </Container>
      <Footer />
    </div>
  ) : (
    <div></div>
  );
};

export default MobileLanding;
