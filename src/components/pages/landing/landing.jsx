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
  Grid,
  Item,
  ItemImgLink,
} from "./styled-components";
import { BC1, Header1, BC3, ItemImgCaption } from "../../global/fontStyles";

import Footer from "../../Common/Footer";
import Home from "../../Common/DesktopHome";

const Landing = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <Home HomeImage={HomeImage} path={pageProps.path} />
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
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
                <Item link={true}>
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic1} link={true}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>CHANCERY LANE</ItemImgCaption>
                    <BC3 link={true}>Little Collins St, Melbourne</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic2}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>Estelle</ItemImgCaption>
                    <BC3 link={true}>High St, Northcote</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic3}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>Longrain</ItemImgCaption>
                    <BC3 link={true}>Little Bourke St, Melbourne </BC3>
                  </ItemImgLink>
                </Item>

                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic4}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>Matilda</ItemImgCaption>
                    <BC3 link={true}>Domain Rd, South Yarra</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic5}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>Pastore</ItemImgCaption>
                    <BC3 link={true}>Dandenong Rd, Chadstone</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic6}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>Longsong</ItemImgCaption>
                    <BC3 link={true}>UPSTAIRS, Little Bourke St, Melbourne</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic7}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>Le Shoppe</ItemImgCaption>
                    <BC3 link={true}>Dandenong Rd, Chadstone</BC3>
                  </ItemImgLink>
                </Item>
                <Item link={true}>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic8}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>SP Events</ItemImgCaption>
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
