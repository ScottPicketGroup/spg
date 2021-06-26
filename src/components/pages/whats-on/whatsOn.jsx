import React from "react";
import { useTheme } from "styled-components";
import { Container, SectionContainer } from "../../global/GlobalStyles";
import HomeImage from "../../../images/Screen Shot 2021-04-18 at 2.00.31 pm.png";
import CarouselImg from "../../../images/Screen Shot -5.png";
import CarouselImg2 from "../../../images/Screen Shot -6.png";
import CarouselImg3 from "../../../images/Screen Shot 2021-04-18 at 2.21.05 pm.png";

import {
  InnerContainer,
  RightContainer,
  LeftContainer,
} from "./styled-components";
import { BC1, Header1 } from "../../global/fontStyles";

import Footer from "../../Common/Footer";
import Home from "../../Common/DesktopHome";

import RightAligned from "./rightAligned";
import LeftAligned from "./leftAligned";

const whatsOnEvents = [
  {
    heading: "Truffle Dinners",
    subHeading: "Truffle season is upon us.",
    content: `And its arguably the best season of the year. <br> We’ve curated a number of exclusive events to celebrate the earthy, musky complexity of this season's truffles. 

    Join us at Estelle, Matilda and Chancery Lane as we celebrate truffle season with three decadent truffle menus. 
    `,
    image: CarouselImg3,
  },
  {
    heading: "Treat Mum To Mother’s Day Lunch At Matilda",
    subHeading: `Three-course Mother’s Day lunch with snacks and petit fours.
    Sunday 9th May`,
    content: `We are delighted to be hosting weekend lunches at the
    breathtaking Sutton Grange Winery near Bendigo for a limited
    time. The first lunch is on Sat 13th March, and the last one
    will be on Sun 30 May. We are introducing an exclusive
    banquet menu that can be matched with the winery’s
    award-winning selection. Located 1.5 hours from Melbourne
    CBD and just 20 minutes south of Bendigo, the winery offers
    stunning views, where you will walk away with a renewed
    appreciation for our regional Victoria and the bounty that
    it offers.`,
    image: CarouselImg,
  },
  {
    heading: "Interactive Masterclass With Scott Pickett At The Estelle",
    subHeading: `Sat 13th March - Sun 30th May`,
    content: `Have you ever wanted the chance to jump in the kitchen with
    a famous chef and learn the tricks of the trade? Now is your
    time! With only 12 places available for each event, you will
    have the opportunity to watch, learn, taste and even jump in
    and get involved with Scott in the open kitchen at Estelle.
    Find out more & to book your spot now.`,
    image: CarouselImg2,
  },
];
const Landing = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <Container theme={theme} style={{paddingBottom: `9rem`}}>
        <Home HomeImage={HomeImage} path={pageProps.path} />
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>What's On</Header1>
              <BC1 theme={theme}>
              Six restaurants + two bars + two delis + one events company + more in the pipeline = plenty of things to keep us busy and you entertained.
Read on to hear what’s coming up at our Scott Pickett Group venues. 

              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        {whatsOnEvents &&
          whatsOnEvents.map((item, index) => {
            return (
              <SectionContainer key={index}>
                <InnerContainer>
                  <LeftContainer></LeftContainer>
                  <RightContainer>
                    {index % 2 === 0 ? (
                      <RightAligned data={item} />
                    ) : (
                      <LeftAligned data={item} />
                    )}
                  </RightContainer>
                </InnerContainer>
              </SectionContainer>
            );
          })}

        {/* <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <LeftAligned />
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <RightAligned />
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
