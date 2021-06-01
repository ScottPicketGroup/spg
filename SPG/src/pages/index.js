import React, { useLayoutEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import { useTheme } from "styled-components";
import {
  Title,
  Container,
  TextContainer,
  ImageContainer,
  SectionContainer,
} from "../components/global/GlobalStyles";

import HomeImage from "../images/homeImage.png";
import Logo from "../images/logo.svg";

import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.25rem 2.25rem;
  color: #333333;
`;
const MenuHeading = styled.div`
  width: 100%;
  font-weight: bold;
  text-transform: uppercase;
`;
const MenuItem = styled.div`
  width: 100%;
  text-transform: capitalize;
`;

const InnerContainer = styled.div`
  margin-top: 9rem;
  display: flex;
  width: 100%;
`;
const RightContainer = styled.div`
  display: inline;
  width: 42%;
`;
const LeftContainer = styled.div`
  display: inline;
  width: 58%;
`;
const LogoImg = styled.img`
  display: inline;
`;
const Header1 = styled.h1`
  font-size: 64px;
  font-family: Times;
  font-weight: bold;
  color: #333333;
`;
const BC1 = styled.p`
  margin-top: 3.5rem;
  font-size: 36px;
  font-family: Untitled Sans;
  line-height:2.15rem;  
  color: #333333;
  &:hover: {
    color: ${(props) => (props.link ? "#80333333" : " #333333")};s
  }
`;

const IndexPage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Seo />
      <SectionContainer>
        <TextContainer theme={theme}>
          <Menu>
            <MenuHeading>Menu</MenuHeading>
            <MenuItem>Home</MenuItem>
            <MenuItem>Book a table</MenuItem>
            <MenuItem>Events</MenuItem>
            <MenuItem>What's On</MenuItem>
            <MenuItem>Git Vouchers</MenuItem>
          </Menu>
        </TextContainer>
        <ImageContainer theme={theme} src={HomeImage} />
      </SectionContainer>
      <SectionContainer>
        <InnerContainer>
          <RightContainer>
            <LogoImg src={Logo} />
          </RightContainer>
          <LeftContainer>
            <Header1>Scott Pickett Group</Header1>
            <BC1>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </BC1>
            <BC1 link>Learn More</BC1>
          </LeftContainer>
        </InnerContainer>
      </SectionContainer>
      <SectionContainer>
        <InnerContainer>
          <RightContainer></RightContainer>
          <LeftContainer>
            <Header1>Venues</Header1>
            <BC1>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </BC1>
          </LeftContainer>
        </InnerContainer>
      </SectionContainer>
    </Container>
  );
};

export default IndexPage;
