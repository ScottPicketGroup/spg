import React from "react";
import { useTheme } from "styled-components";
import { Container, SectionContainer } from "../../global/GlobalStyles";
import HomeImage from "../../../images/whats-on/whatsOnHero.jpg";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Link, graphql, useStaticQuery } from "gatsby"

import {
  InnerContainer,
  RightContainer,
  LeftContainer,
} from "./styled-components";
import { BC1, Header1 } from "../../global/fontStyles";

import Footer from "../../Common/Footer/Footer";
import Home from "../../Common/DesktopHome";

import RightAligned from "./rightAligned";
import LeftAligned from "./leftAligned";
import truffle1 from "../../../images/whats-on/truffles/1.jpg";
import truffel2 from "../../../images/whats-on/truffles/2.jpg";
import truffel3 from "../../../images/whats-on/truffles/3.jpg";

import matilda from '../../../images/whats-on/brunches-at-matilda/1.jpg'
import highStakes from '../../../images/whats-on/highstakes/1.jpg'
import butcher from '../../../images/whats-on/butcher/1.jpg'
import women from '../../../images/whats-on/women-in-wine/1.jpg'
import longsong from '../../../images/whats-on/longsong-bar/1.jpg'
import gin from '../../../images/whats-on/pickets-gin/1.jpg'
const whatsOnEvents = [

    {
      heading: "Truffle Dinners",
      subHeading: "Truffle season is upon us.",
      content: [
      "And its arguably the best season of the year.",
      `We’ve curated a number of exclusive events to celebrate the earthy, musky complexity of this season's truffles.`,
    
    ],
      links: [
        "Join us at Estelle, Matilda and Chancery Lane as we celebrate truffle season with three decadent truffle menus."
      ],
      buttonText: "Book Now"
    },
    {
      heading: "Brunches at Matilda ",
      subHeading: "Sunday brunch is getting a makeover.",
      content: [
      "Matilda is expanding its brunch offering with a brand-new menu – we’ll have options for whatever you’re feeling, a green smoothie while you walk the Tan, or a smoked marshmallow waffle smore and breakfast martini… New take-away and sit-down brunch menu launching late July."
      
    ],
    links: [
      "Estelle", 
      "Matilda",
      "and Chancery Lane"
    ],
      image: matilda,
      buttonText: "Follow Matilda",
      buttonLink: "https://www.instagram.com/matilda159domain/"
    },
    // {
    //   heading: "Melbourne Food & Wine Festival – High Steaks at Chancery Lane ",
    //   subHeading: "Long live the long lunch!",
    //   content: [
    //     "Revive the lost art of the long lunch at our venue rich in everything that makes the art of hospitality so deeply appealing. ",
    //     `Scott Pickett and Chancery Lane Head Chef Rob Kabboord have designed a luxe menu that’s dangerously decadent – from the seafood hors d’oeuvres to the tartare of beef with potato and caviar, and of course the rib-eye with truffle sauce, served to share. `,
    //     `Friday 20th and Friday 27th August.`,
    //     `$183 four-courses with welcome drink `,
    //     `$278 four-courses with welcome drink and matched premium wines   `
        
    // ],
    //   image: highStakes,
    //   buttonText: "Book Now"
    // },
    // {
    //   heading: "The Butcher, the Providore and the Chef",
    //   subHeading: "Join us for a four-course dinner at Matilda, celebrating the butcher, the providore and the chef.",
    //   content: [
    //     "The exclusive menu takes you through a journey of provenance from farm to table. Mark Foletta, ‘the providore’ is well respected in Melbourne for his quality, sustainable produce, farmed in Benalla. ‘The chef’ Aleksis Kalnins has designed a special menu showcasing the best of Mark’s winter seasonal produce, along with the best of our house dry-aged duck, beef and kangaroo from ‘the butcher’.",
    //     `Scott Pickett and Chancery Lane Head Chef Rob Kabboord have designed a luxe menu that’s dangerously decadent – from the seafood hors d’oeuvres to the tartare of beef with potato and caviar, and of course the rib-eye with truffle sauce, served to share. `,
    //     `7:00pm Thursday 22nd July`,
    //     `$125pp `,  
    // ],
    //   image: butcher,
    //   buttonText: "Book Now",
    //   buttonLink: "https://www.sevenrooms.com/events/matilda"
    // },
    {
      heading: "Women in Wine series ",
      subHeading: "First event with Mel Chester of Sutton Grange ",
      content: [
        "Join us at Chancery Lane on Wednesday 11th August as we celebrate female wine makers and females in wine. Chancery Lane’s Sommelier, Hannah Day, partners with local winemaker Mel Chester of Sutton Grange for a three-course dinner, MC’d by influential wine writer Jeni Port. The dinner celebrates Mel and Hannah’s love for alternate varieties and passion for locally produced wine.",
        `We can’t give too much away just yet, only that you’re going to want to be here when we launch! `,
      
    ],
      image: women,
      buttonText: "BOOK NOW",
      buttonLink: " https://www.sevenrooms.com/events/chancerylane"
    },
    {
      heading: "Longsong Bar relaunch ",
      subHeading: "Launching soon – Longsong Bar  ",
      content: [
        "We’ve been busy re-developing our expansive bar and events space above Longrain – sibling venue Longsong. Longsong is a vibrant mix of Bangkok and Melbourne – the high and the low. ",
        `Guests will be treated to a showcase of Mel and Hannah’s favourite Sutton Grange wines, each matched with a special course by Chancery Lane Head Chef, Rob Kabboord.`,
        `Wednesday 11th August`,
        `$175pp `,
        
        
    ],
      image: longsong,
      buttonText: "FOLLOW LONGSONG",
      buttonLink: "https://www.instagram.com/longsongmelbourne/"
    },
    {
      heading: "Pickett’s Altitude Gin ",
      subHeading: "",
      content: [
        "We’re excited to have launched our latest batch of Pickett’s Gin this month. This time, the gin is flavoured by native botanicals like you’ll find in our restaurant menus, all foraged from 400+m above sea level. ",
        `Pickett’s Altitude Gin is flowing at all of our venues, and is available to purchase at Le Shoppe by Chancery Lane, or online soon! `,
        `We are hosting an educational and interactive gin tasting event with the gin at Matilda in August, follow us on Instagram @matilda159domain to learn when the offer is live.`,
      
        
        
    ],
      image: gin,
      buttonText: "Book Now"
    }
    
  ]
const Landing = ({ pageProps }) => {
  const theme = useTheme();
  const data = useStaticQuery(graphql`
  {
    allFile(
      filter: {extension: {}, absolutePath: {regex: "/images/whats-on/truffles/"}}
    ) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.5)
          }
        }
      }
    }
    file(name: {in: "whats-on-hero"}) {
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
  `)
  const image = getImage(data.file)
  const image1 = getImage(data.allFile.edges[0].node)
  return theme ? (
    <div>
      <Container theme={theme} style={{paddingBottom: `9rem`}}>
        <Home HomeImage={image} path={pageProps.path} />
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>What's On</Header1>
              <BC1 theme={theme}>
              Five restaurants, three bars, two delis, one events company and more in the
pipeline gives us plenty of things to keep us busy and you entertained.
Read on to hear what’s coming up at our Scott Pickett Group venues.

              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>


      <SectionContainer>
        <InnerContainer>
          <LeftContainer></LeftContainer>
          <RightContainer>

               <StaticImage 
                 placeholder="blurred"
                    src="../../../images/whats-on-carousel/whats-on-full.jpg" alt="Waiter with drinks" />
          </RightContainer>
        </InnerContainer>
      </SectionContainer>
        {whatsOnEvents && 
          whatsOnEvents.map((item, index) => {
            return (
              <SectionContainer key={index}>
                <InnerContainer>
                  <LeftContainer></LeftContainer>
                  <RightContainer>
                
                    {index % 2 === 0 ? (
                      <RightAligned data={item} images={data}/>
                    ) : (
                      <LeftAligned data={item} images={data}/>
                    )}
                  </RightContainer>
                </InnerContainer>
              </SectionContainer>
            );
          })}

        {/* <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <LeftAligned />
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <RightAligned />
            </RightContainer>
          </InnerContainer>
        </SectionContainer> */}
      </Container>

      <Footer />
    </div>
  ) : (
    <div></div>
  );
};

export default Landing;
