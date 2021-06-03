import React, { useState } from "react";

import { useTheme } from "styled-components";
import {
  Container,
  SectionContainer,
  FullImageContainer,
  ImageDiv,
  ImageView,
} from "../../global/GlobalStyles";

import { Link } from "gatsby";
import HomeImage from "../../../images/Screen Shot -1@2x.png";
import Logo from "../../../images/logo.svg";
import LogoWhite from "../../../images/logoWhite.svg";
import gridPic1 from "../../../images/gridPic1.png";
import gridPic2 from "../../../images/gridPic2.png";
import gridPic3 from "../../../images/gridPic3.png";
import gridPic4 from "../../../images/gridPic4.png";

import MenuBox from "../../Common/Menue";

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
  MenuBtn,
  CloseBtn,
  MenuHeader,
  Grid,
  Item,
  ItemImg,
  ItemImgCaption,
  BC3,
} from "./styled-components";
import Footer from "../../Common/Footer";
import MobileHome from "../../Common/MobileHome";

const MobileEvents = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <Container theme={theme}>
        <MobileHome HomeImage={HomeImage} path={pageProps.path} />
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>Events</Header1>
            <BC1 theme={theme}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </BC1>
            <BC1 link theme={theme}>
              Learn More
            </BC1>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
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
          <InnerContainer theme={theme} displayBlock={true}>
            <RightContainer>
              <Grid cols={1}>
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
      </Container>
      <Footer />
    </div>
  ) : (
    <div></div>
  );
};

export default MobileEvents;
