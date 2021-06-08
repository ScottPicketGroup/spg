import React from "react";

import { useTheme } from "styled-components";
import {
  Container,
  SectionContainer,
  FullImageContainer,
  ImageDiv,
  ImageView,
} from "../../global/GlobalStyles";

import HomeImage from "../../../images/Screen Shot -1@2x.png";
import Logo from "../../../images/logo.svg";
import gridPic1 from "../../../images/Screen Shot 2021-04-18 at 1.46.46 pm.png";
import gridPic2 from "../../../images/Screen Shot -1.png";
import gridPic3 from "../../../images/gridPic3.png";
import gridPic4 from "../../../images/Screen Shot -4.png";
import gridPic5 from "../../../images/Screen Shot -3.png";

import {
  InnerContainer,
  RightContainer,
  LeftContainer,
  LogoImg,
  Grid,
  Item,
} from "./styled-components";
import { BC1, Header1, BC3, ItemImgCaption } from "../../global/fontStyles";

import Footer from "../../Common/Footer";
import Home from "../../Common/DesktopHome";

const Events = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <Home HomeImage={HomeImage} path={pageProps.path} />

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Events</Header1>
              <BC1 theme={theme}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur.
              </BC1>
              <BC1 link theme={theme}>
                Learn More
              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>In-Venue</Header1>
              <BC1 theme={theme}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur.
              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={2}>
                <Item>
                  <FullImageContainer>
                    <ImageView>
                      <ImageDiv src={gridPic1}></ImageDiv>
                    </ImageView>
                  </FullImageContainer>
                  <ItemImgCaption>CHANCERY LANE</ItemImgCaption>
                  <BC3>Little Collins St, Melbourne</BC3>
                </Item>
                <Item>
                  <FullImageContainer>
                    <ImageView>
                      <ImageDiv src={gridPic2}></ImageDiv>
                    </ImageView>
                  </FullImageContainer>
                  <ItemImgCaption>Estelle</ItemImgCaption>
                  <BC3>High St, Northcote</BC3>
                </Item>
                <Item>
                  <FullImageContainer>
                    <ImageView>
                      <ImageDiv src={gridPic3}></ImageDiv>
                    </ImageView>
                  </FullImageContainer>
                  <ItemImgCaption>Longrain</ItemImgCaption>
                  <BC3>Little Bourke St, Melbourne </BC3>
                </Item>

                <Item>
                  <FullImageContainer>
                    <ImageView>
                      <ImageDiv src={gridPic4}></ImageDiv>
                    </ImageView>
                  </FullImageContainer>
                  <ItemImgCaption>Matilda</ItemImgCaption>
                  <BC3>Domain Rd, South Yarra</BC3>
                </Item>
                <Item>
                  <FullImageContainer>
                    <ImageView>
                      <ImageDiv src={gridPic5}></ImageDiv>
                    </ImageView>
                  </FullImageContainer>
                  <ItemImgCaption>Pastore</ItemImgCaption>
                  <BC3>Dandenong Rd, Chadstone</BC3>
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

export default Events;
