import React from "react";

import { useTheme } from "styled-components";
import { Container, SectionContainer } from "../../global/GlobalStyles";

import HomeImage from "../../../images/Screen Shot 2021-04-18 at 2.00.31 pm.png";
import CarouselImg from "../../../images/Screen Shot -1.png";

import {
  InnerContainer,
  RightContainer,
  Button,
  Grid,
  GridImg,
  Item,
} from "./styled-components";

import { BC1, Header1, BC3, Header2, Header3 } from "../../global/fontStyles";

import Footer from "../../Common/Footer";
import Home from "../../Common/MobileHome";
const MobileLanding = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <Container theme={theme}>
        <Home HomeImage={HomeImage} path={pageProps.path} />
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
        <SectionContainer>
          <InnerContainer displayBlock={true}>
            <RightContainer>
              <Grid cols="1">
                <Item>
                  <Header2 theme={theme}>
                    Longrain X Sutton Grange Winery
                  </Header2>
                  <Header3 theme={theme}>Sat 13th March - Sun 30th May</Header3>

                  <BC3 theme={theme}>
                    We are delighted to be hosting weekend lunches at the
                    breathtaking Sutton Grange Winery near Bendigo for a limited
                    time. The first lunch is on Sat 13th March, and the last one
                    will be on Sun 30 May. We are introducing an exclusive
                    banquet menu that can be matched with the winery’s
                    award-winning selection. Located 1.5 hours from Melbourne
                    CBD and just 20 minutes south of Bendigo, the winery offers
                    stunning views, where you will walk away with a renewed
                    appreciation for our regional Victoria and the bounty that
                    it offers.
                  </BC3>
                  <Button>Learn More</Button>
                </Item>
                <Item>
                  <GridImg src={CarouselImg} />
                </Item>
              </Grid>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer displayBlock={true}>
            <RightContainer>
              <Grid cols="1">
                <Item>
                  <Header2 theme={theme}>
                    Longrain X Sutton Grange Winery
                  </Header2>
                  <Header3 theme={theme}>Sat 13th March - Sun 30th May</Header3>

                  <BC3 theme={theme}>
                    We are delighted to be hosting weekend lunches at the
                    breathtaking Sutton Grange Winery near Bendigo for a limited
                    time. The first lunch is on Sat 13th March, and the last one
                    will be on Sun 30 May. We are introducing an exclusive
                    banquet menu that can be matched with the winery’s
                    award-winning selection. Located 1.5 hours from Melbourne
                    CBD and just 20 minutes south of Bendigo, the winery offers
                    stunning views, where you will walk away with a renewed
                    appreciation for our regional Victoria and the bounty that
                    it offers.
                  </BC3>
                  <Button>Learn More</Button>
                </Item>
                <Item>
                  <GridImg src={CarouselImg} />
                </Item>
              </Grid>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
      </Container>
      <Footer />
    </div>
  ) : (
    <div></div>
  );
};

export default MobileLanding;
