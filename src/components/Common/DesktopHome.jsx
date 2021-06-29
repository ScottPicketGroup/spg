import React from "react";

import { useTheme } from "styled-components";
import { RightContainer, SectionContainer } from "../../components/global/GlobalStyles";
import { Link, graphql, useStaticQuery } from "gatsby"

import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import SideBar from "./SideBar";
import HeroImage from "./HeroImage";
import styled from "styled-components";

const DesktopHome = ({ HomeImage, path }) => {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: {extension: {}, absolutePath: {}, name: {in: "careers-hero"}}) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              aspectRatio: 1.5
              )
          }
        }
      }
    }
  }`)
  const theme = useTheme();
  const image1 = getImage(data.allFile.edges[0].node)
  return theme ? (
    <SectionContainer >
      <SideBar path={path}/>
      <RightContainer>
      <GatsbyImage image={HomeImage} 
      height={20}
      width={20}
    
      alt="test" style/>
      </RightContainer>
    </SectionContainer>
  ) : (
    <div></div>
  );
};

export default DesktopHome;

//menu to be refactored
