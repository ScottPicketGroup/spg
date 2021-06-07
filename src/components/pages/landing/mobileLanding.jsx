import React from "react";

import { useTheme } from "styled-components";
import {
  Container,
  SectionContainer,
  FullImageContainer,
  ImageDiv,
  ImageView,
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
import { BC1, Header1, BC3, ItemImgCaption } from "../../global/fontStyles";

import {
  InnerContainer,
  RightContainer,
  Grid,
  Item,
  ItemImgLink,
} from "./styled-components";
import Footer from "../../Common/Footer";
import MobileHome from "../../Common/MobileHome";

const MobileLanding = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <Container theme={theme} style={{paddingBottom: `6rem`}}>
        <MobileHome HomeImage={HomeImage} path={pageProps.path} />
        {/* <SectionContainer>
          <ImageContainer theme={theme} src={HomeImage} device={theme.name} />
        </SectionContainer> */}
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>Scott Pickett Group</Header1>
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
          <InnerContainer theme={theme} displayBlock={true}>
            <RightContainer>
              <Grid cols={1}>
                <Item>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic1}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>CHANCERY LANE</ItemImgCaption>
                    <BC3>Little Collins St, Melbourne</BC3>
                  </ItemImgLink>
                </Item>
                <Item>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic2}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>Estelle</ItemImgCaption>
                    <BC3>High St, Northcote</BC3>
                  </ItemImgLink>
                </Item>
                <Item>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic3}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>Longrain</ItemImgCaption>
                    <BC3>Little Bourke St, Melbourne </BC3>
                  </ItemImgLink>
                </Item>

                <Item>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic4}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>Venue</ItemImgCaption>
                    <BC3>Domain Rd, South Yarra</BC3>
                  </ItemImgLink>
                </Item>

                <Item>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic5}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>Pastore</ItemImgCaption>
                    <BC3>Dandenong Rd, Chadstone</BC3>
                  </ItemImgLink>
                </Item>
                <Item>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic6}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>Longsong</ItemImgCaption>
                    <BC3>UPSTAIRS, Little Bourke St, Melbourne</BC3>
                  </ItemImgLink>
                </Item>
                <Item>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic7}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>Le Shoppe</ItemImgCaption>
                    <BC3>Dandenong Rd, Chadstone</BC3>
                  </ItemImgLink>
                </Item>
                <Item>
                  {" "}
                  <ItemImgLink href="#">
                    <FullImageContainer>
                      <ImageView>
                        <ImageDiv src={gridPic8}></ImageDiv>
                      </ImageView>
                    </FullImageContainer>
                    <ItemImgCaption>SP Events</ItemImgCaption>
                    <BC3>AUSTRALIA</BC3>
                  </ItemImgLink>
                </Item>
              </Grid>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

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
            <BC1 link theme={theme}>
              Learn More
            </BC1>
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
