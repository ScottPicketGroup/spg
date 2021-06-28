import React from "react"

import { useTheme } from "styled-components"
import { Container, SectionContainer } from "../../global/GlobalStyles"
import HomeImage from "../../../images/scott-portrait.jpg"
import hat from "./timeline/chef-hat.png"
import {
  InnerContainer,
  TimeLineContainer,
  TimeLineGrid,
  RightGrid,
  LeftGrid,
  RightContainer,
  LeftContainer,
  QuotationContainer,
  Hat,
} from "./styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { BC1, Header1, Header2, Quotation, BC2 } from "../../global/fontStyles"
import Footer from "../../Common/Footer"
import Home from "../../Common/DesktopHome"
import Timeline from "./timeline/timeline"
import Slider from "./image-slider/Slider"
import SliderFull from "./image-slider-full/Slider"

import { SliderContainer } from "./image-slider-full/slider-components"
const Landing = ({ pageProps }) => {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: {extension: {}, absolutePath: {}, name: {in: "scott-portrait"}}) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(
              
              placeholder: BLURRED
            
            )
          }
        }
      }
    }
  }`)
  const image = getImage(data.allFile.edges[0].node)
  const theme = useTheme()

  return theme ? (
    <div>
      <Container theme={theme}>
        <Home HomeImage={image} path={pageProps.path} />

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Scott Pickett</Header1>
              <BC1 theme={theme} marginBottom="3.5rem">
                My love for great produce began early. As a kid on a farm in
                Kangarilla, it taught me a lot about food and seasonality.
                Knowing the growers and producers behind the food we ate gave me
                a respect for them that I’ve never lost. That connection with an
                environment like that influenced me to become a chef. So did
                growing up with my grandmother Audrey’s Sunday roasts.
              </BC1>
              <SectionContainer >
          <InnerContainer displayBlock="true" margin="0"
          style={{marginTop: `0`, marginBottom: `5rem`}}
          >
           <Slider/>
          </InnerContainer>
        </SectionContainer>
              <BC1 theme={theme} marginBottom="3.5rem" >
                Those years set the foundations of my values as a chef and
                restaurateur today. My approach always puts food at the front.
                It’s based on real cooking – with the greatest respect to the
                produce. I want you to have incredible food and wine
                experiences, with incredible service. But the food is the hero.

                </BC1>
              <BC1 theme={theme} marginBottom="3.5rem" >
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
              <Quotation 
              style={{
                paddingBottom: `9rem`
              }}
              >
                “ Those years set the foundations of my values as a chef and
                restaurateur today. My approach always puts food at the front.
                It’s based on real cooking – with the greatest respect to the
                produce.”
              </Quotation>
            </QuotationContainer>
          </InnerContainer>
        </SectionContainer>

</Container>
<SliderFull/>
<Container theme={theme} style={{ paddingBottom: `9rem` }}>

        <Timeline />
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Accolades</Header1>
              <BC1 theme={theme} marginBottom="6rem">
              I’m proud to have had recognition for my restaurants over the years:
              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <TimeLineGrid>
                <LeftGrid>
                  <Header2>Matilda 159 Domain</Header2>
                </LeftGrid>
                <RightGrid>
                  <BC2>2020 Age Good Food Guide –  <Hat src={hat} alt="chef hat" /></BC2>
                  <BC2>
                    2019 Time Out 50 Best Restaurants in Melbourne – Ranked #12
                  </BC2>
                  <BC2>
                    2019 Time Out Melbourne Nominated for Best Fine Dining
                    Restaurant{" "}
                  </BC2>
                  <BC2> 2019 Age Good Food Guide – <Hat src={hat} alt="chef hat" /><Hat src={hat} alt="chef hat" /></BC2>

                  <BC2>
                    {" "}
                    2019 Age Good Food Guide – Nominated for Best New Restaurant
                  </BC2>
                  <BC2>
                    {" "}
                    2019 Gourmet Traveller Restaurant Guide Top 100 – Ranked #85
                  </BC2>
                  <BC2>
                    {" "}
                    2018 Delicious Top 100 Restaurants 2018 The Australian Top
                    100 Restaurants
                  </BC2>
                </RightGrid>
              </TimeLineGrid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>
        <SectionContainer>
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <TimeLineGrid>
                <LeftGrid>
                  <Header2>Estelle</Header2>
                </LeftGrid>
                <RightGrid>
                  <BC2>2020 Age Good Food Guide – <Hat src={hat} alt="chef hat" /></BC2>
                </RightGrid>
              </TimeLineGrid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>
        
        <SectionContainer>
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <TimeLineGrid>
                <LeftGrid>
                  <Header2>Saint Crispin</Header2>
                </LeftGrid>
                <RightGrid>
                  <BC2> 2019 Age Good Food Guide – <Hat src={hat} alt="chef hat" /></BC2>
                  <BC2> 2018 Age Good Food Guide – <Hat src={hat} alt="chef hat" /><Hat src={hat} alt="chef hat" /></BC2>
                  <BC2> 2018 Gault & Millau Guide – 14.5/20</BC2>
                  <BC2> 2017 Age Good Food Guide – <Hat src={hat} alt="chef hat" /><Hat src={hat} alt="chef hat" /></BC2>
                  <BC2>
                    {" "}
                    2017 Australian Financial Review Top 100 Restaurants –
                    Ranked #95
                  </BC2>
                  <BC2> 2016 Age Good Food Guide – <Hat src={hat} alt="chef hat" /><Hat src={hat} alt="chef hat" /></BC2>
                  <BC2>
                    {" "}
                    2016 Australian Financial Review Top 100 Restaurants –
                    Ranked #44
                  </BC2>
                  <BC2> 2016 Delicious Top 100 Restaurants</BC2>
                  <BC2> 2015 Age Good Food Guide – <Hat src={hat} alt="chef hat" /><Hat src={hat} alt="chef hat" /></BC2>
                  <BC2>
                    {" "}
                    2015 Age Good Food Guide – Nominated for Restaurant of the
                    Year
                  </BC2>
                  <BC2>
                    {" "}
                    2015 Australian Financial Review Top 100 Restaurants –Ranked
                    #20
                  </BC2>
                  <BC2>
                    {" "}
                    2015 Gourmet Traveller Restaurant Guide Top 100 – Ranked #92
                  </BC2>
                  <BC2> 2014 Age Good Food Guide – <Hat src={hat} alt="chef hat" /></BC2>
                  <BC2>
                    {" "}
                    2014 Age Good Food Guide – Winner New Restaurant of the Year
                  </BC2>
                  <BC2> 2014 The Australian Hot 100 Restaurants</BC2>
                  <BC2> 2014 TimeOut – Winner Best New Restaurants </BC2>
                  <BC2>
                    {" "}
                    2014 Gourmet Traveller Wine List of the Year Awards
                    –Finalist Best New Wine List
                  </BC2>
                  <BC2> 2013 The Australian Hot 50 Restaurants</BC2>
                </RightGrid>
              </TimeLineGrid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>

        <SectionContainer>
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <TimeLineGrid>
                <LeftGrid>
                  <Header2>Estelle Bistro</Header2>
                </LeftGrid>
                <RightGrid>
                  <BC2> 2018 Delicious Top 100 Restaurants</BC2>
                  <BC2> 2018 Gault & Millau Guide – 15/20</BC2> 
                  <BC2> 2017 Gourmet Traveller Restaurant Guide</BC2>
                  <BC2> 2017 Age Good Food Guide</BC2>
                  <BC2> 2016 Delicious Top 100 Restaurants</BC2>
                  <BC2> 2016 Age Good Food Guide</BC2>
                  <BC2>
                    {" "}
                    2015 Australian Financial Review Top 100 Restaurants –
                    Ranked #27
                  </BC2>
                  <BC2> 2015 Age Good Food Guide – <Hat src={hat} alt="chef hat" />

                  </BC2>
                  <BC2> 2014 Age Good Food Guide – <Hat src={hat} alt="chef hat" /></BC2>
                  <BC2>
                    {" "}
                    2014 Age Good Food Guide – Finalist for New Restaurant of
                    the Year
                  </BC2>
                  <BC2> 2013 Age Good Food Guide – <Hat src={hat} alt="chef hat" /></BC2>
                  <BC2>
                    {" "}
                    2013 Age Good Food Guide – Winner Young Chef of the Year,
                    Josh Pelham
                  </BC2>
                </RightGrid>
              </TimeLineGrid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>
        <SectionContainer>
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <TimeLineGrid
              
              >
                <LeftGrid>
                  <Header2>Estelle By Scott Pickett (ESP)</Header2>
                </LeftGrid>
                <RightGrid>
                  <BC2>
                    {" "}
                    2018 Australian Financial Review Top 100 Restaurants –
                    Ranked #75
                  </BC2>
                  <BC2>
                    {" "}
                    2017 Gourmet Traveller Restaurant Guide Top 100 – Ranked #28
                  </BC2>
                  <BC2>
                    {" "}
                    2017 Australian Financial Review Top 100 Restaurants –
                    Ranked #55
                  </BC2>
                  <BC2> 2017 The Australian Hot 50 Restaurants</BC2>
                  <BC2> 2017 Age Good Food Guide – <Hat src={hat} alt="chef hat" /><Hat src={hat} alt="chef hat" /></BC2>
                  <BC2> 2016 Delicious Top 100 Restaurants</BC2>
                  <BC2> 2016 The Australian Hot 50 Restaurants</BC2>
                  <BC2>
                    {" "}
                    2016 Restaurant & Catering Awards For Excellence Victoria –
                    Winner Best
                  </BC2>
                  <BC2> New Restaurant</BC2>
                  <BC2>
                    {" "}
                    2016 Australian Financial Review Top 100 Restaurants –
                    Ranked #58
                  </BC2>
                </RightGrid>
              </TimeLineGrid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>
        <SectionContainer>
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <TimeLineGrid
                style={{
                  borderBottom: `1px solid rgba(51, 51, 51, 25%)`,
                  paddingBottom: `3.5rem`,
                }}
              >
                <LeftGrid>
                  <Header2>Chancery Lane</Header2>
                </LeftGrid>
                <RightGrid>
                  
                  <BC2>
                    {" "}
                    2020 The Age GOod Food Guide 16/20
                  </BC2>
                </RightGrid>
              </TimeLineGrid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>

        {/* <CookiesBanner theme={theme}>
          this website uses cookies to ensure you get the best experience on our
          website learn more
          <Button>I Accept</Button>
        </CookiesBanner> */}
      </Container>

      <Footer />
    </div>
  ) : (
    <div></div>
  )
}

export default Landing
