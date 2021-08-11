import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import { useTheme } from "styled-components"
import {
  Container,
  FullImageContainer,
  SectionContainer,
} from "../../global/GlobalStyles"

import {
  InnerContainer,
  RightContainer,
  LeftContainer,
  Grid,
  Item,
  ItemImgLink,
  ItemInfoContainer,
  ItemExpandElement,
} from "./styled-components"
import { BC1, Header1, BC3, Header2 } from "../../global/fontStyles"
import HomeImage from "../../../images/homeImage.png"


import Footer from "../../Common/Footer/Footer"
import MobileHome from "../../Common/MobileHome"
import SliderFull from "../../image-slider-full/Slider"

const captions = [
  "Matilda 159 Domain",
  "Longrain Melbourne",
  "Chancery Lane Bistro",
  "Estelle",
]

const MobileLanding = ({ pageProps }) => {
  const [chancery, setChancery] = useState(false)

  const [, setChancery] = useState(false)
  
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: {}
          absolutePath: { regex: "/images/landing-carousel/" }
        }
      ) {
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
      file(name: { in: "home-hero" }) {
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
  console.log(chancery)
  const theme = useTheme()

  return theme ? (
    <div>
      <MobileHome HomeImage={HomeImage} path={pageProps.path} />
      <Container theme={theme} style={{ paddingBottom: `6rem` }}>
        {/* <SectionContainer>
          <ImageContainer theme={theme} src={HomeImage} device={theme.name} />
        </SectionContainer> */}
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>Scott Pickett Group</Header1>
            <BC1 theme={theme}>
              Welcome to the Scott Pickett Group. We are proud to operate a
              growing list of award-winning Melbourne restaurants and
              establishments. Our restaurants are diverse in fare and
              experience; from precise European technique at Chancery Lane to
              punchy Thai flavours at Longrain, yet all have one thing in
              common: all are fuelled by our passion for great food and great
              hospitality. Unsurprisingly, our mission is ‘For every guest to
              experience our true passion for hospitality.’
            </BC1>
            <BC1 theme={theme}>
              As one of Australia’s leading chefs and restaurateurs, Scott
              Pickett’s generous spirit and abundant personality are at the core
              of our establishments. He pairs his vast experience with his deep
              understanding of seasonality and respect for Australian growers
              and producers. Each Scott Pickett Group venue is a testament to
              the origins of the warm-hearted country boy with an obsessive
              dedication to excellence and passion for hospitality.
            </BC1>

            <Link to="/scott-pickett" style={{ textDecoration: `none` }}>
              <BC1 link={true} theme={theme}>
                Read more about Scott Pickett
              </BC1>
            </Link>
          </InnerContainer>
        </SectionContainer>
      </Container>

      <SliderFull images={data} captions={captions} />

      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme} marginBottom="3.5rem !important">
              Venues
            </Header1>
            <RightContainer>
              <Grid cols={1}>
                <Item>
                  {" "}
                  <ItemImgLink
                    href="http://www.chancerylane.com.au "
                    target="_blank"
                    link={true}
                  >
                    <FullImageContainer>
                      <StaticImage
                        placeholder="blurred"
                        src="../../../images/home-venues/CL.jpg"
                        alt="Chancery Lane"
                      />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>
                      Chancery Lane
                    </Header2>
                    <BC3 link={true} marginTop=".25rem" marginBottom=".3rem">
                      430 Little Collins St, Melbourne
                    </BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery}>
                    <ItemExpandElement onClick={() => setChancery(!chancery)}>
                      Read More
                    </ItemExpandElement>
                    <BC3>
                      Housed in the historic Normanby Chambers building,
                      Chancery Lane is Scott Pickett’s classic bistro with an
                      edge. No detail has been spared when it comes to the menu,
                      drinks list, service and design. <br />
                      <br />
                      The interior echoes a decadent, bygone era, the menu sees
                      a list of classic dishes with a modern touch, using the
                      finest, seasonal, local ingredients and varying European
                      techniques. Open all day, Chancery Lane invites everyone,
                      whether you’re stopping for a glass of wine or an
                      indulgent seafood platter and full-course fare. <br />
                      <br />
                      Chancery Lane opened its doors on 16th December 2020.
                    </BC3>
                    <ItemImgLink
                      href="http://www.chancerylane.com.au "
                      target="_blank"
                      link={true}
                    >
                      Visit Chancery Lane
                    </ItemImgLink>
                  </ItemInfoContainer>
                </Item>
                <Item>
                  {" "}
                  <ItemImgLink
                    href="http://www.leshoppe.com.au"
                    target="_blank"
                    link={true}
                  >
                    <FullImageContainer>
                      <StaticImage
                        aspectRatio={3 / 2}
                        placeholder="blurred"
                        src="../../../images/home-venues/LeShoppe.jpg"
                        alt="Le Shoppe"
                      />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>
                      Le Shoppe
                    </Header2>
                    <BC3 link={true} marginTop=".25rem" marginBottom=".3rem">
                      Suite 1, 430 Little Collins St, Melbourne
                    </BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery}>
                    <ItemExpandElement onClick={() => setChancery(!chancery)}>
                      Read More
                    </ItemExpandElement>
                    <BC3>
                      Le Shoppe is Scott Pickett’s European-inspired coffee bar
                      and provedore, located on Little Collins St, Melbourne.{" "}
                      <br /> <br />
                      Adjoining Chancery Lane Bistro, Le Shoppe is proud to
                      continue Melbourne's legacy of historic grocers and corner
                      stores. Guests visit Le Shoppe weekdays for morning
                      coffee, freshly made baguettes, salads, pastries and
                      grab-and-go food for the workday. With corporate catering
                      options and ‘lunchboxes’ under $20, Le Shoppe provides CBD
                      businesses with quality European-inspired catering for any
                      occasion. 
                      <br /> <br />
                      Le Shoppe á Nuit offers pre-dinner aperitives and a wine
                      or cocktail, served authentic deli-style in a glass
                      tumbler, santé!
                    </BC3>
                    <ItemImgLink
                      href="http://www.leshoppe.com.au"
                      target="_blank"
                      link={true}
                    >
                      Visit Le Shoppe
                    </ItemImgLink>
                  </ItemInfoContainer>
                </Item>
                <Item>
                  {" "}
                  <ItemImgLink
                    href="https://matilda159.com/"
                    target="_blank"
                    link={true}
                  >
                    <FullImageContainer>
                      <StaticImage
                        placeholder="blurred"
                        src="../../../images/home-venues/Matilda.jpg"
                        alt="Chancery Lane"
                      />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>Matilda</Header2>
                    <BC3 link={true} marginTop=".25rem" marginBottom=".3rem">
                      159 Domain Rd, South Yarra
                    </BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery}>
                    <ItemExpandElement onClick={() => setChancery(!chancery)}>
                      Read More
                    </ItemExpandElement>
                    <BC3>
                      Matilda is a visual and sensory journey. The kitchen
                      is fuelled by open fire and hot coals, delivering
                      contemporary Australian food, strong design and a feeling
                      of comfort and warmth.  <br /> <br />
                      Situated opposite the Royal Botanical Gardens and named
                      after Scott Pickett’s daughter, the restaurant celebrates
                      the connection between people, food and nature. 
                      <br /> <br />
                      Stylish yet relaxed, Matilda is a place where guests can
                      visit often and be guaranteed the finest local meat and
                      produce, cooked exceptionally well over live flames and
                      open grills. 
                    </BC3>
                    <ItemImgLink
                      href="https://matilda159.com/"
                      target="_blank"
                      link={true}
                    >
                      Visit Matilda
                    </ItemImgLink>
                  </ItemInfoContainer>
                </Item>

                <Item>
                  <ItemImgLink
                    href="http://www.theestelle.com.au"
                    target="_blank"
                    link={true}
                  >
                    <FullImageContainer>
                      <StaticImage
                        placeholder="blurred"
                        src="../../../images/home-venues/Estelle.jpg"
                        alt="Estelle"
                      />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>Estelle</Header2>
                    <BC3 link={true} marginTop=".25rem" marginBottom=".3rem">
                      243-245 High St, Northcote
                    </BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery}>
                    <ItemExpandElement onClick={() => setChancery(!chancery)}>
                      Read More
                    </ItemExpandElement>
                    <BC3>
                      Estelle is a venue designed to suit all occasions. Whether
                      stopping by for a glass of wine and a share plate or a
                      full tasting experience, guests can find home in the
                      all-encompassing venue.
                      <br /> <br />
                      The contemporary Australian menu reflects Pickett's
                      commitment to classic bistro dishes with a touch of
                      innovation and refined technique. His respect for seasonal
                      produce is evident.
                      <br /> <br />
                      Estelle's brick walls and recycled timber finishings
                      create a warm and welcoming atmosphere. With large windows
                      separating the dining room and the wine bar, Estelle
                      provides a verdant and open space for lunches, dinners and
                      private functions.
                    </BC3>
                    <ItemImgLink
                      href="http://www.theestelle.com.au"
                      target="_blank"
                      link={true}
                    >
                      Visit The Estelle
                    </ItemImgLink>
                  </ItemInfoContainer>
                </Item>
                <Item>
                  {" "}
                  <ItemImgLink
                    href="http://www.longrainmelbourne.com"
                    target="_blank"
                    link={true}
                  >
                    <FullImageContainer>
                      <StaticImage
                        placeholder="blurred"
                        src="../../../images/home-venues/LG.jpg"
                        alt="Chancery Lane"
                      />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>Longrain</Header2>
                    <BC3 link={true} marginTop=".25rem" marginBottom=".3rem">
                      44 Little Bourke St, Melbourne
                    </BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery}>
                    <ItemExpandElement onClick={() => setChancery(!chancery)}>
                      Read More
                    </ItemExpandElement>
                    <BC3>
                      Scott Pickett’s Longrain is a Melbourne dining
                      institution. Located in an expansive heritage building on
                      Little Bourke Street, the restaurant pairs Thai flavours
                      with the best local produce. 
                      <br />
                      <br />
                      Inspired by the relaxed, communal eating philosophy, the
                      menu is made up of shared dishes to be enjoyed on communal
                      dining tables – banquet style. <br /> <br />
                      Complementing the fresh, punchy signature dishes, Longrain
                      offers an abundance of Thai-inspired cocktails.
                    </BC3>
                    <ItemImgLink
                      href="http://www.longrainmelbourne.com"
                      target="_blank"
                      link={true}
                    >
                      Visit Longrain
                    </ItemImgLink>
                  </ItemInfoContainer>
                </Item>

                <Item>
                  {" "}
                  <ItemImgLink
                    href="http://www.longsong.com.au"
                    target="_blank"
                    link={true}
                  >
                    <FullImageContainer>
                      <StaticImage
                        placeholder="blurred"
                        src="../../../images/home-venues/Longsong.jpg"
                        alt="Longsong"
                      />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>Longsong</Header2>
                    <BC3 link={true} marginTop=".25rem" marginBottom=".3rem">
                      Level 1, 44 Little Bourke St, Melbourne
                    </BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery}>
                    <ItemExpandElement onClick={() => setChancery(!chancery)}>
                      Read More
                    </ItemExpandElement>
                    <BC3>
                      Longsong is a Thai-inspired cocktail bar that artfully
                      mixes Bangkok and Melbourne, the high and the low. Housed
                      in an expansive converted horse stable from the 1900’s,
                      Longsong creates a unique vibe, perfect for mingling with
                      friends, old and new. Bartenders mix signature cocktails
                      with a Thai twist that pair perfectly with Longsong’s
                      street-food style snacks, charred over hot coals and open
                      flame.
                    </BC3>
                    <ItemImgLink
                      href="http://www.longsong.com.au"
                      target="_blank"
                      link={true}
                    >
                      Visit Longsong
                    </ItemImgLink>
                  </ItemInfoContainer>
                </Item>

                <Item>
                  {" "}
                  <ItemImgLink
                    href="http://www.pastorerestaurant.com.au"
                    target="_blank"
                    link={true}
                  >
                    <FullImageContainer>
                      <StaticImage
                        placeholder="blurred"
                        src="../../../images/home-venues/Pastore.jpg"
                        alt="Pastore"
                      />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>Pastore</Header2>
                    <BC3 link={true} marginTop=".25rem" marginBottom=".3rem">
                      1341 Dandenong Rd, Chadstone
                    </BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery}>
                    <ItemExpandElement onClick={() => setChancery(!chancery)}>
                      Read More
                    </ItemExpandElement>
                    <BC3>
                      Pastore is an Italian-inspired all-day dining venue
                      welcoming guests for all occasions. Located at Hotel
                      Chadstone Melbourne MGallery by Sofitel, Pastore—the
                      Italian word for ‘shepherd’—honours the area’s heritage
                      once rich with pasture and orchards. From small plates to
                      full tasting experiences, the menu draws focus on
                      woodfire-fuelled cooking and handmade pasta; showcasing
                      Italian cuisine through contemporary Australian
                      references.
                    </BC3>
                    <ItemImgLink
                      href="http://www.pastorerestaurant.com.au"
                      target="_blank"
                      link={true}
                    >
                      Visit Pastore
                    </ItemImgLink>
                  </ItemInfoContainer>
                </Item>

                <Item>
                  {" "}
                  <ItemImgLink
                    href="http://www.pickettsdeli.com"
                    target="_blank"
                    link={true}
                  >
                    <FullImageContainer>
                      <StaticImage
                        aspectRatio={3 / 2}
                        placeholder="blurred"
                        layout="fullWidth"
                        src="../../../images/home-venues/deli.jpg"
                        alt="Chancery Lane"
                      />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>
                      Pickett’s Deli & Rotisserie
                    </Header2>
                    <BC3 link={true} marginTop=".25rem" marginBottom=".3rem">
                      Terminal 3, Melbourne Airport
                    </BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery}>
                    <ItemExpandElement onClick={() => setChancery(!chancery)}>
                      Read More
                    </ItemExpandElement>
                    <BC3>
                      Pickett’s Deli & Rotisserie has found a home in Terminal 3
                      of Melbourne Airport. Originally opening at Queen Vic
                      market, a new era of the deli introduces true, quality
                      Melbourne food to travellers. Guests can take a seat at
                      the communal table or cosy booth and watch the rotisserie
                      turn, enjoying a selection of snacks and dishes showcasing
                      Victorian produce at its best. The all-day eatery serves
                      as the ideal pit-stop for an early morning coffee,
                      breakfast, eat in or takeaway lunch or dinner, also
                      offering cocktails and wines by the glass.
                    </BC3>
                    <ItemImgLink
                      href="http://www.pickettsdeli.com"
                      target="_blank"
                      link={true}
                    >
                      Visit Pickett’s Deli & Rotisserie
                    </ItemImgLink>
                  </ItemInfoContainer>
                </Item>
                <Item>
                  {" "}
                  <ItemImgLink href="http://" target="_blank" link={true}>
                    <FullImageContainer>
                      <StaticImage
                        aspectRatio={3 / 2}
                        placeholder="blurred"
                        layout="fullWidth"
                        src="../../../images/heros/sp-events-hero.jpg"
                        alt="Chancery Lane"
                      />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>
                      SP Events
                    </Header2>
                    <BC3 link={true} marginTop=".25rem" marginBottom=".3rem">
                      {" "}
                      Victoria
                    </BC3>
                  </ItemImgLink>
                  <ItemInfoContainer>
                    <ItemExpandElement onClick={() => setChancery(!chancery)}>
                      Read More
                    </ItemExpandElement>
                    <BC3>
                      SP Events is Scott Pickett’s off-site catering business,
                      bringing any event to life; from an intimate home soirée
                      to large-scale public events like the Australian Open and
                      Grand Prix. SP Events offers a range of menus from the
                      Scott Pickett Group restaurants, with the style of cuisine
                      matching the theme of any event. For clients who simply
                      can’t decide, SP Events offers ‘Scott Pickett’s Greatest
                      Hits’, a bespoke offer of Scott’s favourite dishes from
                      across his establishments.
                    </BC3>
                    <ItemImgLink href="http://" target="_blank" link={true}>
                      Visit SP Events
                    </ItemImgLink>
                  </ItemInfoContainer>
                </Item>
              </Grid>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>What's On</Header1>
            <BC1 theme={theme}>
              Stay up to date with the latest venue announcements, events,
              collaborations and more from the Scott Pickett Group.
            </BC1>
            <Link to="/whatson" style={{ textDecoration: `none` }}>
              <BC1 link={true} theme={theme}>
                Learn More
              </BC1>
            </Link>
          </InnerContainer>
        </SectionContainer>
      </Container>

      <Footer />
    </div>
  ) : (
    <div></div>
  )
}

export default MobileLanding
