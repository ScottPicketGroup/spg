import React from "react";

import { useTheme } from "styled-components";
import {
  Container,
  FullImageContainer,
  ImageDiv,
  ImageView,
  SectionContainer,

} from "../../global/GlobalStyles";

import HomeImage from "../../../images/homeImage.png";
import Logo from "../../../images/logo.svg";
import gridPic1 from "../../../images/gridPic1.png";
import gridPic2 from "../../../images/gridPic2.png";
import gridPic3 from "../../../images/gridPic3.png";
import gridPic4 from "../../../images/gridPic4.png";
import gridPic5 from "../../../images/gridPic5.png";
import gridPic6 from "../../../images/gridPic6.png";
import gridPic7 from "../../../images/gridPic7.png";
import gridPic8 from "../../../images/gridPic8.png";

import {
  InnerContainer,
  RightContainer,
  LeftContainer,
  LogoImg,
  Grid,
  Item,
  ItemImgLink,
  BC1, Header1, BC3, Header2
} from "./styled-components";


import Footer from "../../Common/Footer";
import Home from "../../Common/DesktopHome";

const Landing = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <Container theme={theme} style={{paddingBottom: `9rem`}}>
        <Home HomeImage={HomeImage} path={pageProps.path} />
        <SectionContainer>
          <InnerContainer>
            <LeftContainer>
            
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
          <InnerContainer style={{marginTop: `6rem`}}>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={2}>
                <Item link={true}>
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic1} link={true} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2>Chancery Lane</Header2>
                    <BC3 link={true}>Little Collins St, Melbourne</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic2} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2>Estelle</Header2>
                    <BC3 link={true}>High St, Northcote</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic3} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2>Longrain</Header2>
                    <BC3 link={true}>Little Bourke St, Melbourne </BC3>
                  </ItemImgLink>
                </Item>

                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic4} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2>Matilda</Header2>
                    <BC3 link={true}>Domain Rd, South Yarra</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic5} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2>Pastore</Header2>
                    <BC3 link={true}>Dandenong Rd, Chadstone</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic6} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2>Longsong</Header2>
                    <BC3 link={true}>UPSTAIRS, Little Bourke St, Melbourne</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic7} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2>Le Shoppe</Header2>
                    <BC3 link={true}>Dandenong Rd, Chadstone</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic8} ratio="3/2"></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <Header2>SP Events</Header2>
                    <BC3 link={true}>AUSTRALIA</BC3>
                  </ItemImgLink>
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
              <BC1 link={true} theme={theme}>
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
