import React from "react";
import {getImage} from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { useTheme } from "styled-components";
import { Container, SectionContainer } from "../../global/GlobalStyles";

import HomeImage from "../../../images/whats-on/whatsOnHero.jpg";

import matilda from "../../../images/whats-on/brunches-at-matilda/1.jpg"
import women from "../../../images/whats-on/women-in-wine/1.jpg"
import longsong from "../../../images/whats-on/longsong-bar/1.jpg"
import gin from "../../../images/whats-on/pickets-gin/1.jpg"

import {
  InnerContainer,
  RightContainer
} from "./styled-components";

import { BC1, Header1} from "../../global/fontStyles";

import Footer from "../../Common/Footer/Footer";
import Home from "../../Common/MobileHome";
import RightAligned from "./rightAligned";
const whatsOnEvents = [
  {
    heading: "Truffle Dinners",
    subHeading: "Truffle season is upon us.",
    content: [
      "And its arguably the best season of the year.",
      `We’ve curated a number of exclusive events to celebrate the earthy, musky complexity of this season's truffles.`,
    ],
    links: [
      "Join us at Estelle, Matilda and Chancery Lane as we celebrate truffle season with three decadent truffle menus.",
    ],
    buttonText: "Book Now",
  },
  {
    heading: "Brunches at Matilda ",
    subHeading: "Sunday brunch is getting a makeover.",

    content: [
      "Matilda is expanding its brunch offering with a brand-new menu – we’ll have options for whatever you’re feeling, a green smoothie while you walk the Tan, or a smoked marshmallow waffle smore and breakfast martini… New take-away and sit-down brunch menu launching late July.",
    ],
    links: ["Estelle", "Matilda", "and Chancery Lane"],
    image: matilda,
    buttonText: "Follow Matilda",
    buttonLink: "https://www.instagram.com/matilda159domain/",
  },
  {
    heading: "Women in Wine series ",
    subHeading: "First event with Mel Chester of Sutton Grange ",
    content: [
      "Join us at Chancery Lane on Wednesday 11th August as we celebrate female wine makers and females in wine. Chancery Lane’s Sommelier, Hannah Day, partners with local winemaker Mel Chester of Sutton Grange for a three-course dinner, MC’d by influential wine writer Jeni Port. The dinner celebrates Mel and Hannah’s love for alternate varieties and passion for locally produced wine.",
      `Guests will be treated to a showcase of Mel and Hannah’s favourite Sutton Grange wines, each matched with a special course by Chancery Lane Head Chef, Rob Kabboord.`,
      "Wednesday 11th August \n $175pp"
    ],
    image: women,
    buttonText: "BOOK NOW",
    buttonLink: " https://www.sevenrooms.com/events/chancerylane",
  },
  {
    heading: "Longsong Bar relaunch ",
    subHeading: "Launching soon – Longsong Bar  ",
    content: [
      "We’ve been busy re-developing our expansive bar and events space above Longrain – sibling venue Longsong. Longsong is a vibrant mix of Bangkok and Melbourne – the high and the low. ",
      "We can’t give too much away just yet, only that you’re going to want to be here when we launch!",
    
    ],
    image: longsong,
    buttonText: "FOLLOW LONGSONG",
    buttonLink: "https://www.instagram.com/longsongmelbourne/",
  },
  {
    heading: "Pickett’s Altitude Gin ",
    subHeading: "",
    content: [
      "We’re excited to have launched our latest batch of Pickett’s Gin this month. This time, the gin is flavoured by native botanicals like you’ll find in our restaurant menus, all foraged from 400+m above sea level.",
      `Pickett’s Altitude Gin is flowing at all of our venues, and is available to purchase at Le Shoppe by Chancery Lane, or online soon!`,
      `We are hosting an educational and interactive gin tasting event with the gin at Matilda on the 24th of August, we would love for you to come along!`,
    ],
    image: gin,
    buttonText: "Book tickets",
    buttonLink:
      "https://matilda159.com/mfwf-the-forager-the-distiller-and-the-chef/",
  },
]
const MobileLanding = ({ pageProps }) => {
  const theme = useTheme();
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: {}
          absolutePath: { regex: "/images/whats-on/truffels-2/" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                transformOptions: {fit: COVER}
              )
            }
          }
        }
      }
      file(name: { in: "whats-on-hero" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)
  return theme ? (
    <div>
      <Home HomeImage={HomeImage} path={pageProps.path} />
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>What's On</Header1>
            <BC1 theme={theme}>
            Five restaurants, three bars, two delis, one events company and
                more in the pipeline gives us plenty of things to keep us busy
                and you entertained. Read on to hear what’s coming up at our
                Scott Pickett Group venues.
            </BC1>
          </InnerContainer>
        </SectionContainer>

        {whatsOnEvents &&
          whatsOnEvents.map((item, index) => {
            return (
              <SectionContainer key={index}>
                <InnerContainer displayBlock={true}>
                  <RightContainer>
                    <RightAligned data={item} images={data}/>
                  </RightContainer>
                </InnerContainer>
              </SectionContainer>
            );
          })}
      </Container>
      <Footer />
    </div>
  ) : (
    <div></div>
  );
};

export default MobileLanding;
