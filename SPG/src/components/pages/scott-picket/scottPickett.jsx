import React from "react";

import { useTheme } from "styled-components";
import {
  Container,
  TextContainer,
  ImageContainer,
  SectionContainer,
} from "../../global/GlobalStyles";
import { Link } from "gatsby";

import HomeImage from "../../../images/homeImage.png";
import Logo from "../../../images/logo.svg";

import {
  InnerContainer,
  RightContainer,
  LeftContainer,
  LogoImg,
  Header1,
  BC1,
  Grid,
  Item,
  ItemImgCaption,
  BC3,
  Quotation,
  QuotationContainer,
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
              <Header1 theme={theme}>Scott Pickett</Header1>
              <BC1 theme={theme}>
                My love for great produce began early. As a kid on a farm in
                Kangarilla, it taught me a lot about food and seasonality.
                Knowing the growers and producers behind the food we ate gave me
                a respect for them that I’ve never lost. That connection with an
                environment like that influenced me to become a chef. So did
                growing up with my grandmother Audrey’s Sunday roasts.
              </BC1>
              <BC1 theme={theme}>
                Those years set the foundations of my values as a chef and
                restaurateur today. My approach always puts food at the front.
                It’s based on real cooking – with the greatest respect to the
                produce. I want you to have incredible food and wine
                experiences, with incredible service. But the food is the hero.
                Now, as a restaurateur, I don’t spend as much time cooking as I
                used to, but I have some gun Head Chefs to work with. Together,
                we build on what makes each of the venues special, and try to
                impart on you our understanding of seasonality and our respect
                for Australian growers and producers. It’s a journey that’s
                still going. Can’t wait to share with you what we’ve got planned
                next.
              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer displayBlock="true">
            <QuotationContainer>
              <Quotation>
                “ Those years set the foundations of my values as a chef and
                restaurateur today. My approach always puts food at the front.
                It’s based on real cooking – with the greatest respect to the
                produce.”
              </Quotation>
            </QuotationContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Timeline</Header1>
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
                  <ItemImgCaption>1975</ItemImgCaption>
                  <BC3>Childhood</BC3>
                </Item>
                <Item>
                  <BC3>
                    “My grandmother, Audrey, used to cook a Sunday roast,
                    usually lamb. That’s my first lasting recollection of food.
                    It was cooked for hours until it was falling apart.
                    Grandmother Audrey Masterson is an important part of my
                    story.”
                  </BC3>
                </Item>
              </Grid>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={2}>
                <Item>
                  <ItemImgCaption>Early 90S</ItemImgCaption>
                  <BC3>Apprenticeship</BC3>
                </Item>
                <Item>
                  <BC3>
                    “For a small city, Adelaide punched above its weight. I was
                    so excited on my first day at Jarmer’s. I owe Peter Jarmer a
                    lot. He was the first person to instil a work ethic in me.
                    He taught me discipline and attention to detail.”
                  </BC3>
                </Item>
              </Grid>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Accolades</Header1>
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
      </Container>

      <Footer />
    </div>
  ) : (
    <div></div>
  );
};

export default Landing;
