import React, { useLayoutEffect, useState } from "react";

import { useTheme } from "styled-components";
import {
  Container,
  ImageContainer,
  SectionContainer,
} from "../../global/GlobalStyles";

import { Link } from "gatsby";
import HomeImage from "../../../images/Screen Shot 2021-04-18 at 1.42.07 pm.png";
import Logo from "../../../images/logo.svg";
import LogoWhite from "../../../images/logoWhite.svg";

import Estelle from "../../../images/Group 4576.png";
import LM from "../../../images/Group 4577.png";
import CL from "../../../images/Path 10285.png";
import LON from "../../../images/Group 4578.png";
import MAT from "../../../images/Group 4579.png";
import PAS from "../../../images/Group 4580.png";
import PIC from "../../../images/Group 4581.png";
import SP from "../../../images/Group 4582.png";
import LogoW from "../../../images/Group 4583.png";

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
  BC3,
  Button,
  Header2,
  Header4,
  Footer,
  FooterLogo,
  FooterContainer,
} from "./styled-components";

const MobileLanding = () => {
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
            <Header1 theme={theme}>Careers</Header1>
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
          <InnerContainer theme={theme} displayBlock={true}>
            <RightContainer>
              <Header2 theme={theme}>Waitress - FOH All Rounder</Header2>
              <Header4 theme={theme}>Longrain melbourne</Header4>
              <Header4 theme={theme}>10th April 2021</Header4>
              <BC3 theme={theme}>
                <li> Casual, part-time & full-time positions available</li>
                <li> Must have experience in Hospitality </li>
                <li>
                  {" "}
                  Must be a passionate, friendly and reliable team player
                </li>
                <li>
                  {" "}
                  Must thrive in a busy environment - Immediate start necessary
                </li>
              </BC3>
              <Button>Apply</Button>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <RightContainer>
              <Header2 theme={theme}>Sous Chef</Header2>
              <Header4 theme={theme}>Matilda melbourne</Header4>
              <Header4 theme={theme}>10th April 2021</Header4>
              <BC3 theme={theme}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                volutpat risus efficitur nulla aliquam suscipit. Nulla sed
                ullamcorper felis, a vulputate mi. Aenean enim leo, egestas
                vitae ultrices at, placerat ac lorem. Donec tortor augue,
                pulvinar et dictum vel, euismod id velit. Sed nec suscipit
                mauris. Ut sollicitudin rutrum eros at maximus. Duis vitae dui
                eu tellus dignissim commodo et in tortor. Praesent ac magna
                vulputate, fringilla odio et, vehicula lorem.
                <li> Casual, part-time & full-time positions available</li>
                <li> Must have experience in Hospitality </li>
                <li>
                  {" "}
                  Must be a passionate, friendly and reliable team player
                </li>
                <li>
                  {" "}
                  Must thrive in a busy environment - Immediate start necessary
                </li>
              </BC3>
              <Button>Apply</Button>
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

export default MobileLanding;
