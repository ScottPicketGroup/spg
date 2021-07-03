import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { getImage, StaticImage } from "gatsby-plugin-image"
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

import Footer from "../../Common/Footer"
import Home from "../../Common/DesktopHome"
import Slider from "../../image-slider-full/Slider"
const captions = [
  "Lamb ribs: ‘Matilda 159 Domain’",
  "Betel leaf: ‘Longrain Melbourne’ ",
  "Spread with salmon in middle ‘Chancery Lane Bistro’",
  "Salmon with orange sauce: ‘Estelle’ ",
]
const Landing = ({ pageProps }) => {
  const [chancery, setChancery] = useState(false)
  const theme = useTheme()
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
  const image = getImage(data.file)
  console.log(`open`, chancery)
  return theme ? (
    <div style={{ background: `#f9f9f4` }}>
      <Container theme={theme}>
        <Home HomeImage={image} path={pageProps.path} />
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Scott Pickett Group</Header1>
              <BC1 theme={theme}>
                Welcome to the Scott Pickett Group. We are proud to operate a
                growing list of award-winning Melbourne restaurants and
                establishments. Our restaurants are diverse in fare and
                experience; from punchy Thai flavours at Longrain to precise
                European technique at Chancery Lane, yet all of our venues have
                one thing in common—all are fuelled by our passion for great
                food and great hospitality. Unsurprisingly, our mission is ‘For
                every guest to experience our true passion for hospitality.’
              </BC1>
              <BC1 theme={theme}>
                As one of Australia’s leading chefs and restaurateurs, Scott
                Pickett’s generous spirit and abundant personality are at the
                core of our establishments. He pairs his vast experience with
                his deep understanding of seasonality and respect for Australian
                growers and producers. Each Scott Pickett Group venue is a
                testament to the origins of the warm-hearted country boy with an
                obsessive dedication to excellence and passion for hospitality. 
              </BC1>
              <Link to="/scott-picket" style={{ textDecoration: `none` }}>
                <BC1 link={true} theme={theme} marginBottom="6rem">
                  Read more about Scott ‘Cheffo’ Pickett
                </BC1>
              </Link>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
      </Container>

      <Slider images={data} captions={captions} />
      <Container theme={theme}>
        <SectionContainer style={{ marginBottom: `2.25rem 0 9rem` }}>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Venues</Header1>
              <BC1 theme={theme}>
                Our developing list of Melbourne venues includes European-bistro
                <i> Chancery Lane</i>, contemporary Australian <i>Matilda</i>,
                modern-Thai
                <i> Longrain</i>, contemporary Australian <i>Estelle</i>,
                vibrant CBD bar
                <i>Longsong</i>, European coffee-bar and provedore{" "}
                <i>Le Shoppe</i>, Modern Italian <i>Pastore</i>, European deli{" "}
                <i>Pickett’s Deli</i> and offsite catering <i>SP Events</i>.
              </BC1>
              <BC1>
                Soon to join the family will be <i>Smith Street Bistro</i>, a
                classic bistro with a North-side edge.
              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer style={{ marginTop: `6rem` }}>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={2}>
                <Item>
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
                    <BC3 link={true}>Little Collins St, Melbourne</BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery} marginTop="1rem">
                    <ItemExpandElement>Find Out More</ItemExpandElement>
                    <BC3>
                      Housed in the historic Normanby Chambers building,
                      Chancery Lane is Scott Pickett’s classic bistro with an
                      edge. No detail has been spared when it comes to the menu,
                      drinks list, service and design. <br />
                       The interior echoes a decadent, bygone era, the menu sees
                      a list of classic dishes with a modern touch, using the
                      finest, seasonal, local ingredients and varying European
                      techniques. Open all day, Chancery Lane invites everyone,
                      whether you’re stopping for a glass of wine or an
                      indulgent seafood platter and full-course fare. <br />
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
                    <BC3 link={true}>High St, Northcote</BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery} marginTop="1rem">
                    <ItemExpandElement>Find Out More</ItemExpandElement>
                    <BC3>
                      Whether stopping by for a glass of wine and a share plate,
                      or a full tasting menu, guests can find home in this
                      all-encompassing venue. Pickett opened his first
                      restaurant, Estelle Bistro to critical acclaim in 2011. In
                      2019, Pickett combined his adjoining Northcote
                      neighbourhood icons Estelle Bistro and ESP (Estelle by
                      Scott Pickett) into ‘Estelle’, offering contemporary
                      Australian dining to suit all occasions. The venue now
                      includes a wine bar, two upstairs private dining spaces
                      and a covered courtyard.
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
                    <BC3 link={true}>Little Bourke St, Melbourne </BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery} marginTop="1rem">
                    <ItemExpandElement>Find Out More</ItemExpandElement>
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
                    <BC3 link={true}>Domain Rd, South Yarra</BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery} marginTop="1rem">
                    <ItemExpandElement>Find Out More</ItemExpandElement>
                    <BC3>
                      Matilda is a visual and sensory journey. The kitchen
                      is fuelled by open fire and hot coals, delivering
                      contemporary Australian food, strong design and a feeling
                      of comfort and warmth. Pertinently situated opposite the
                      Royal Botanical Gardens and named after Scott Pickett’s
                      daughter, the restaurant celebrates the connection between
                      people, food and nature. Stylish yet relaxed, Matilda is a
                      place where guests can visit often and be guaranteed the
                      finest local meat and produce, cooked exceptionally well
                      over live flames and open grills. 
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
                    <BC3 link={true}>Dandenong Rd, Chadstone</BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery} marginTop="1rem">
                    <ItemExpandElement>Find Out More</ItemExpandElement>
                    <BC3>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt ullam totam, libero error distinctio nihil
                      perferendis quod. Minus vero placeat debitis veritatis
                      laboriosam temporibus possimus, laborum maiores adipisci
                      tempora facere. Quos deleniti reiciendis animi incidunt
                      doloribus nihil quis et est, sed asperiores harum fugiat
                      nisi atque, aut iure itaque totam expedita accusantium.
                      Cum, facilis sunt earum ad unde ipsa ratione?
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
                    <BC3 link={true}>UPSTAIRS, Little Bourke St, Melbourne</BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery} marginTop="1rem">
                    <ItemExpandElement>Find Out More</ItemExpandElement>
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
                    <BC3 link={true}>‘Little Collins St, Melbourne</BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery} marginTop="1rem">
                    <ItemExpandElement>Find Out More</ItemExpandElement>
                    <BC3>
                      Le Shoppe is Scott Pickett’s European-inspired coffee bar
                      and provedore, located on Little Collins St, Melbourne.
                      Adjoining Chancery Lane Bistro, Le Shoppe is proud to
                      continue Melbourne's legacy of historic grocers and corner
                      stores. Guests visit Le Shoppe weekdays for morning
                      coffee, freshly made baguettes, salads, pastries and
                      grab-and-go food for the workday. With corporate catering
                      options and ‘lunchboxes’ under $20, Le Shoppe provides CBD
                      businesses with quality European-inspired catering for any
                      occasion. 
                      <br />
                      <br />
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
                  <ItemImgLink href="http://" target="_blank" link={true}>
                    <FullImageContainer>
                      <StaticImage
                        aspectRatio={3 / 2}
                        placeholder="blurred"
                        layout="fullWidth"
                        src="../../../images/home-venues/events.png"
                        alt="Chancery Lane"
                      />
                    </FullImageContainer>
                    <Header2 style={{ marginTop: `1.25rem` }}>
                      SP Events
                    </Header2>
                    <BC3 link={true}>Victoria</BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery} marginTop="1rem">
                    <ItemExpandElement>Find Out More</ItemExpandElement>
                    <BC3>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui hic, quas sunt facilis nisi, modi commodi deserunt
                      impedit architecto at voluptate deleniti molestiae
                      mollitia vitae veritatis reprehenderit excepturi?
                      Quisquam, beatae. Nulla totam velit veritatis iste dolor
                      quisquam cumque officia voluptas porro voluptate, aut
                      corporis. Et nostrum perspiciatis exercitationem ratione
                      recusandae neque nihil expedita vitae, illo cupiditate
                      voluptates ab aliquid sit?
                    </BC3>
                    <ItemImgLink href="http://" target="_blank" link={true}>
                      Visit SP Events
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
                    <BC3 link={true}>Terminal 3, Melbourne Airport </BC3>
                  </ItemImgLink>
                  <ItemInfoContainer open={chancery} marginTop="1rem">
                    <ItemExpandElement>Find Out More</ItemExpandElement>
                    <BC3>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui hic, quas sunt facilis nisi, modi commodi deserunt
                      impedit architecto at voluptate deleniti molestiae
                      mollitia vitae veritatis reprehenderit excepturi?
                      Quisquam, beatae. Nulla totam velit veritatis iste dolor
                      quisquam cumque officia voluptas porro voluptate, aut
                      corporis. Et nostrum perspiciatis exercitationem ratione
                      recusandae neque nihil expedita vitae, illo cupiditate
                      voluptates ab aliquid sit?
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
              </Grid>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer style={{ paddingBottom: `9rem` }}>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>What's On</Header1>
              <BC1 theme={theme}>
                Stay up to date with the latest venue announcements, events,
                collaborations and more from the Scott Pickett Group:
              </BC1>
              <Link to="/whatson" style={{ textDecoration: `none` }}>
                <BC1 link={true} theme={theme}>
                  Learn More
                </BC1>
              </Link>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
      </Container>
      <Footer />
    </div>
  ) : (
    <div></div>
  )
}

export default Landing
