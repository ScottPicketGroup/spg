import React, { useLayoutEffect, useState } from "react";

import { useTheme } from "styled-components";
import {
  Container,
  ImageContainer,
  SectionContainer,
} from "../../global/GlobalStyles";

import { Link } from "gatsby";
import HomeImage from "../../../images/Screen Shot -1@2x.png";
import Logo from "../../../images/logo.svg";
import LogoWhite from "../../../images/logoWhite.svg";
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

import styled from "styled-components";

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
  Footer,
  FooterLogo,
  FooterContainer,
} from "./styled-components";

const MobileEvents = () => {
  const theme = useTheme();
  console.log(theme.name);
  const [show, setShow] = useState(false);

  const hideModal = (arg) => {
    setShow(false);
  };
  return theme ? (
    <div>
      <Container theme={theme}>
        <SectionContainer>
          <InnerContainer theme={theme} top={true}>
            <LeftContainer>
              <LogoImg src={Logo} theme={theme} />
            </LeftContainer>
            <RightContainer device={theme.name}>
              <MenuBtn theme={theme} onClick={() => setShow(true)}>
                Menu
              </MenuBtn>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <ImageContainer theme={theme} src={HomeImage} device={theme.name} />
        </SectionContainer>
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
        </SectionContainer>

        <MenuBox
          show={show}
          handleClose={hideModal}
          // openPos={Pos.CM_TOP_CENTER}
        >
          <SectionContainer>
            <MenuHeader theme={theme}>
              <LeftContainer>
                <LogoImg src={LogoWhite} theme={theme} />
              </LeftContainer>
              <RightContainer device={theme.name}>
                <CloseBtn theme={theme} onClick={() => setShow(false)}>
                  X Close
                </CloseBtn>
              </RightContainer>
            </MenuHeader>
          </SectionContainer>

          <Menu theme={theme}>
            <MenuHeading theme={theme}>Menu</MenuHeading>
            <MenuItem theme={theme}>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
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
            <MenuItem theme={theme}>
              {" "}
              <Link
                to="/careers"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Careers
              </Link>
            </MenuItem>
            <MenuItem theme={theme}>Contact</MenuItem>
          </Menu>
        </MenuBox>
      </Container>
      <FooterContainer>
        <InnerContainer>
          <Footer>
            <Grid cols={3}>
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

export default MobileEvents;
