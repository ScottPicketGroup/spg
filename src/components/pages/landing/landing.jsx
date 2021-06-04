import React, { useLayoutEffect, useState } from "react";

import { useTheme } from "styled-components";
import {
  Container,
  FullImageContainer,
  ImageDiv,
  ImageView,
  SectionContainer,
} from "../../global/GlobalStyles";
import { Link } from "gatsby";

import HomeImage from "../../../images/homeImage.png";
import Logo from "../../../images/logo.svg";
import gridPic1 from "../../../images/gridPic1.png";
import gridPic2 from "../../../images/gridPic2.png";
import gridPic3 from "../../../images/gridPic3.png";
import gridPic4 from "../../../images/gridPic4.png";

import {
  Menu,
  MenuHeading,
  MenuItem,
  InnerContainer,
  RightContainer,
  LeftContainer,
  LogoImg,
  Header1,
  BC1,
  Grid,
  Item,
  ItemImg,
  ItemImgCaption,
  BC3,
} from "./styled-components";

import Footer from "../../Common/Footer";
import Home from "../../Common/DesktopHome";

const Landing = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <Container theme={theme}>
        <Home HomeImage={HomeImage} path={pageProps.path} />
        <SectionContainer>
          <InnerContainer>
            <LeftContainer>
              <LogoImg src={Logo} />
            </LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Scott Pickett Group</Header1>
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
              <BC1 link={true} theme={theme}>
                Learn More
              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Venues</Header1>
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
                  <ItemImgCaption>Venue</ItemImgCaption>
                  <BC3>Domain Rd, South Yarra</BC3>
                </Item>
              </Grid>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>What's On</Header1>
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
      </Container>
      <Footer />
    </div>
  ) : (
    <div></div>
  );
};

export default Landing;
