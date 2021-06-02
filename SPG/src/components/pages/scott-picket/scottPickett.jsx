import React, { useLayoutEffect, useState } from "react";

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
import gridPic1 from "../../../images/gridPic1.png";
import gridPic2 from "../../../images/gridPic2.png";
import gridPic3 from "../../../images/gridPic3.png";
import gridPic4 from "../../../images/gridPic4.png";

import Estelle from "../../../images/Group 4576.png";
import LM from "../../../images/Group 4577.png";
import CL from "../../../images/Path 10285.png";
import LON from "../../../images/Group 4578.png";
import MAT from "../../../images/Group 4579.png";
import PAS from "../../../images/Group 4580.png";
import PIC from "../../../images/Group 4581.png";
import SP from "../../../images/Group 4582.png";
import LogoW from "../../../images/Group 4583.png";

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
  Footer,
  FooterLogo,
  FooterContainer,
  Quotation,
  QuotationContainer,
} from "./styled-components";

const Landing = () => {
  const theme = useTheme();
  console.log(theme.name);
  return theme ? (
    <div>
      <Container theme={theme}>
        <SectionContainer>
          <TextContainer theme={theme}>
            <Menu theme={theme}>
              <MenuHeading theme={theme}>Menu</MenuHeading>

              <MenuItem theme={theme}>
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem theme={theme}>
                <Link
                  to="/scott-picket"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Scott Picket
                </Link>
              </MenuItem>

              <MenuItem theme={theme}>Book a table</MenuItem>

              <MenuItem theme={theme}>
                <Link
                  to="/events"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Events
                </Link>
              </MenuItem>

              <MenuItem theme={theme}>What's On</MenuItem>
              <MenuItem theme={theme}>Gift Vouchers</MenuItem>
              <MenuItem theme={theme}>Provider</MenuItem>
              <MenuItem theme={theme}>Shop</MenuItem>
              <MenuItem theme={theme}>Careers</MenuItem>
              <MenuItem theme={theme}>Contact</MenuItem>
            </Menu>
          </TextContainer>
          <ImageContainer theme={theme} src={HomeImage} />
        </SectionContainer>
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

        {/* <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={2}>
                <Item>
                  <ItemImg src={gridPic1} />
                  <ItemImgCaption>CHANCERY LANE</ItemImgCaption>
                  <BC3>Little Collins St, Melbourne</BC3>
                </Item>
                <Item>
                  <ItemImg src={gridPic2} />
                  <ItemImgCaption>Estelle</ItemImgCaption>
                  <BC3>High St, Northcote</BC3>
                </Item>
                <Item>
                  <ItemImg src={gridPic3} />
                  <ItemImgCaption>Longrain</ItemImgCaption>
                  <BC3>Little Bourke St, Melbourne </BC3>
                </Item>

                <Item>
                  <ItemImg src={gridPic4} />
                  <ItemImgCaption>Venue</ItemImgCaption>
                  <BC3>Domain Rd, South Yarra</BC3>
                </Item>
              </Grid>
            </RightContainer>
          </InnerContainer>
        </SectionContainer> */}

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
      <FooterContainer>
        <InnerContainer>
          <Footer>
            <Grid cols={9}>
              <Item>
                <FooterLogo src={CL} />
              </Item>
              <Item>
                <FooterLogo src={Estelle} />
              </Item>
              <Item>
                <FooterLogo src={LM} />
              </Item>
              <Item>
                <FooterLogo src={LON} />
              </Item>
              <Item>
                <FooterLogo src={MAT} />
              </Item>
              <Item>
                <FooterLogo src={PAS} />
              </Item>
              <Item>
                <FooterLogo src={PIC} />
              </Item>
              <Item>
                <FooterLogo src={SP} />
              </Item>
              <Item>
                <FooterLogo src={LogoW} />
              </Item>
            </Grid>
          </Footer>
        </InnerContainer>
      </FooterContainer>
    </div>
  ) : (
    <div></div>
  );
};

export default Landing;
