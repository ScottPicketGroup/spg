import React from "react";

import { useTheme } from "styled-components";
import { Container, SectionContainer } from "../../global/GlobalStyles";

import HomeImage from "../../../images/Screen Shot 2021-04-18 at 2.00.31 pm.png";
import CarouselImg from "../../../images/Screen Shot -5.png";
import CarouselImg2 from "../../../images/Screen Shot -6.png";
import CarouselImg3 from "../../../images/Screen Shot 2021-04-18 at 2.21.05 pm.png";

import { InnerContainer, RightContainer } from "./styled-components";

import { BC1, Header1 } from "../../global/fontStyles";

import Footer from "../../Common/Footer";
import Home from "../../Common/MobileHome";

import RightAligned from "./rightAligned";

const whatsOnEvents = [
  {
    heading: "Longrain X Sutton Grange Winery",
    subHeading: "Sat 13th March - Sun 30th May",
    content: `We are delighted to be hosting weekend lunches at the breathtaking
    Sutton Grange Winery near Bendigo for a limited time. The first
    lunch is on Sat 13th March, and the last one will be on Sun 30 May.
    We are introducing an exclusive banquet menu that can be matched
    with the winery’s award-winning selection. Located 1.5 hours from
    Melbourne CBD and just 20 minutes south of Bendigo, the winery
    offers stunning views, where you will walk away with a renewed
    appreciation for our regional Victoria and the bounty that it
    offers.`,
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
const MobileLanding = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <Home HomeImage={HomeImage} path={pageProps.path} />
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>What's On</Header1>
            <BC1 theme={theme}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </BC1>
          </InnerContainer>
        </SectionContainer>

        {whatsOnEvents &&
          whatsOnEvents.map((item, index) => {
            return (
              <SectionContainer key={index}>
                <InnerContainer displayBlock={true}>
                  <RightContainer>
                    <RightAligned data={item} />
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
