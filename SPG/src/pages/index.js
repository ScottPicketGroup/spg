import React, { useLayoutEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { useTheme } from "styled-components";
import {
  Title,
  Container,
  TextContainer,
  ImageContainer,
} from "../components/global/GlobalStyles";

import LogoImage from "../images/homeImage.png";

import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.25rem 2.25rem;
  color: grey;
  background-color: #f5f5f5;
`;
export const MenuHeading = styled.div`
  width: 100%;
  font-weight: bold;
  text-transform: uppercase;
`;
export const MenuItem = styled.div`
  width: 100%;
  text-transform: capitalize;
`;

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const IndexPage = () => {
  const theme = useTheme();
  const [width, height] = useWindowSize();

  // console.log({ width, height });

  console.log({ theme });

  return (
    <Container>
      <Seo />
      <TextContainer theme={theme}>
        <MenuContainer>
          <Menu>
            <MenuHeading>Menu</MenuHeading>
            <MenuItem>Home</MenuItem>
            <MenuItem>Book a table</MenuItem>
            <MenuItem>Events</MenuItem>
            <MenuItem>What's On</MenuItem>
          </Menu>
        </MenuContainer>
      </TextContainer>
      <ImageContainer theme={theme} src={LogoImage} />
    </Container>
  );
};

export default IndexPage;
