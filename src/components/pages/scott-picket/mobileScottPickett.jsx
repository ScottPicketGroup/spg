import React from "react"

import { useTheme } from "styled-components"
import {
  Container,
  SectionContainer,
  ImageContainer,
  ImageView,
  ImageDiv,
} from "../../global/GlobalStyles"
import SideImage from "../../../images/Screen Shot 2021-04-18 at 1.39.34 pm.png"

import HomeImage from "../../../images/scott-portrait.jpg"
import hat from "./timeline/chef-hat.png"
import {
  InnerContainer,
  TimeLineContainer,
  RightContainer,
  LeftContainer,
  Grid,
  Item,
  QuotationContainer,
  CookiesBanner,
  Button,
  Award,
  Hat,
} from "./styled-components"
import Footer from "../../Common/Footer"
import MobileHome from "../../Common/MobileHome"
import {
  BC1,
  Header1,
  BC3,
  Header2,
  Quotation,
  BC2,
} from "../../global/fontStyles"
import Home from "../../Common/MobileHome"
import SliderFull from "./image-slider-full/Slider"
import Slider from "./image-slider/Slider"

import Timeline from "./timeline/timeline"
import MobileTimelineItems from "./timeline/mobileTimelineItems"
const MobileLanding = ({ pageProps }) => {
  const theme = useTheme()

  return theme ? (
    <div>
      <Home HomeImage={HomeImage} path={pageProps.path} />
      <Container theme={theme} style={{}}>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Scott Pickett</Header1>
              <BC1 theme={theme} marginBottom="6rem" marginBottom="6rem">
                My love for great produce began early. As a kid on a farm in
                Kangarilla, it taught me a lot about food and seasonality.
                Knowing the growers and producers behind the food we ate gave me
                a respect for them that I’ve never lost. That connection with an
                environment like that influenced me to become a chef. So did
                growing up with my grandmother Audrey’s Sunday roasts.
              </BC1>
              <SectionContainer>
                <InnerContainer
                  displayBlock="true"
                  margin="0"
                  style={{ marginTop: `0`, marginBottom: `0rem` }}
                ></InnerContainer>
              </SectionContainer>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
      </Container>
      <Slider />
      <Container>
        <SectionContainer>
          <InnerContainer marginTop="6rem">
            <RightContainer>
              <BC1 theme={theme} marginBottom="3rem" marginBottom="6rem">
                Those years set the foundations of my values as a chef and
                restaurateur today. My approach always puts food at the front.
                It’s based on real cooking – with the greatest respect to the
                produce. I want you to have incredible food and wine
                experiences, with incredible service. But the food is the hero.
              </BC1>
              <BC1 theme={theme} marginBottom="6rem" marginBottom="6rem">
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
          <InnerContainer displayBlock="true" marginTop="0">
            <QuotationContainer>
              <Quotation
                style={{
                  paddingBottom: `6rem`,
                  width: `100%`,
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
      <SliderFull />
      <Container theme={theme} style={{ paddingBottom: `9rem` }}>
        <SectionContainer>
          <MobileTimelineItems />
        </SectionContainer>

        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>Accolades</Header1>
            <BC1 theme={theme} marginBottom="6rem">
              It’s been one hell of a career so far, yet I feel like I’m only
              just getting started. Some of the highlights are below:
            </BC1>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={1}>
                <Item>
                  <Header2>Matilda 159 Domain</Header2>
                </Item>
                <Item>
                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2020 </BC2>
                    <BC2>
                      Age Good Food Guide -
                      <Hat src={hat} alt="chef hat" />
                    </BC2>
                  </Award>
                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2019 </BC2>
                    <BC2>
                      {" "}
                      Time Out 50 Best Restaurants in Melbourne – Ranked #12
                    </BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2019 </BC2>
                    <BC2>
                      Time Out Melbourne Nominated for Best Fine Dining
                      Restaurant{" "}
                    </BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2019 </BC2>

                    <BC2>
                      Age Good Food Guide –
                      <Hat src={hat} alt="chef hat" />
                      <Hat src={hat} alt="chef hat" />
                    </BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2019 </BC2>
                    <BC2>
                      {" "}
                      Age Good Food Guide – Nominated for Best New Restaurant
                    </BC2>
                  </Award>
                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2019 </BC2>
                    <BC2>
                      {" "}
                      Gourmet Traveller Restaurant Guide Top 100 – Ranked #85
                    </BC2>
                  </Award>
                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2018 </BC2>
                    <BC2>
                      {" "}
                      Delicious Top 100 Restaurants 2018 The Australian Top 100
                      Restaurants
                    </BC2>
                  </Award>
                </Item>
              </Grid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>
        <SectionContainer>
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={1}>
           
                  <Header2>Estelle</Header2>
          

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2020 </BC2>
                  <BC2>
                    {" "}
                    Age Good Food Guide –
                    <Hat src={hat} alt="chef hat" />
                  </BC2>
                </Award>
              </Grid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>
        
        <SectionContainer>
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={1}>
               
                  <Header2>Saint Crispin</Header2>
              
                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2019 </BC2>
                  <BC2>
                    {" "}
                    Age Good Food Guide –
                    <Hat src={hat} alt="chef hat" />
                  </BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2018 </BC2>
                  <BC2>
                    {" "}
                    Age Good Food Guide –
                    <Hat src={hat} alt="chef hat" />
                    <Hat src={hat} alt="chef hat" />
                  </BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2018 </BC2>
                  <BC2> Gault & Millau Guide – 14.5/20</BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2017 </BC2>
                  <BC2>
                    {" "}
                    Age Good Food Guide –
                    <Hat src={hat} alt="chef hat" />
                    <Hat src={hat} alt="chef hat" />
                  </BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2017 </BC2>
                  <BC2>
                    {" "}
                    Australian Financial Review Top 100 Restaurants – Ranked #95
                  </BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2016 </BC2>
                  <BC2>
                    {" "}
                    Age Good Food Guide –
                    <Hat src={hat} alt="chef hat" />
                    <Hat src={hat} alt="chef hat" />
                  </BC2>
                </Award>
                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2017 </BC2>
                  <BC2>
                    {" "}
                    Australian Financial Review Top 100 Restaurants – Ranked #44
                  </BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2016 </BC2>
                  <BC2>Delicious Top 100 Restaurants</BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2015 </BC2>
                  <BC2>
                    {" "}
                    Age Good Food Guide –
                    <Hat src={hat} alt="chef hat" />
                    <Hat src={hat} alt="chef hat" />
                  </BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2015 </BC2>
                  <BC2>
                    Age Good Food Guide – Nominated for Restaurant of the Year
                  </BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2015 </BC2>
                  <BC2>
                    Australian Financial Review Top 100 Restaurants –Ranked #20
                  </BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2015 </BC2>
                  <BC2>
                    Gourmet Traveller Restaurant Guide Top 100 – Ranked #92
                  </BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2014 </BC2>
                  <BC2>
                    {" "}
                    Age Good Food Guide –
                    <Hat src={hat} alt="chef hat" />
                  </BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2014 </BC2>
                  <BC2>
                    Age Good Food Guide – Winner New Restaurant of the Year
                  </BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2014 </BC2>
                  <BC2>The Australian Hot 100 Restaurants</BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2014 </BC2>
                  <BC2>TimeOut – Winner Best New Restaurants</BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2014 </BC2>
                  <BC2>
                    2014 Gourmet Traveller Wine List of the Year Awards
                    –Finalist Best New Wine List
                  </BC2>
                </Award>

                <Award>
                  <BC2 style={{ marginRight: `1rem` }}>2013 </BC2>
                  <BC2>The Australian Hot 50 Restaurants</BC2>
                </Award>
              </Grid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>

        <SectionContainer>
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={1}>
                <Item>
                  <Header2>Estelle Bistro</Header2>
                </Item>
                <Item>
                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2018 </BC2>
                    <BC2>Delicious Top 100 Restaurants</BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2018 </BC2>
                    <BC2>Gault & Millau Guide – 15/20</BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2017 </BC2>
                    <BC2>Gourmet Traveller Restaurant Guide</BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2017 </BC2>
                    <BC2> Age Good Food Guide</BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2016 </BC2>
                    <BC2> Delicious Top 100 Restaurants</BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2015 </BC2>
                    <BC2>
                      {" "}
                      Australian Financial Review Top 100 Restaurants – Ranked
                      #27
                    </BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2015 </BC2>
                    <BC2>
                      {" "}
                      Age Good Food Guide –
                      <Hat src={hat} alt="chef hat" />
                    </BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2014 </BC2>
                    <BC2>
                      {" "}
                      Age Good Food Guide –
                      <Hat src={hat} alt="chef hat" />
                    </BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2014 </BC2>
                    <BC2>
                      {" "}
                      Age Good Food Guide – Finalist for New Restaurant of the
                      Year
                    </BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2013 </BC2>
                    <BC2>
                      {" "}
                      Age Good Food Guide –
                      <Hat src={hat} alt="chef hat" />
                    </BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}> 2013 </BC2>
                    <BC2>
                      {" "}
                      Age Good Food Guide – Winner Young Chef of the Year, Josh
                      Pelham
                    </BC2>
                  </Award>
                </Item>
              </Grid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>
        <SectionContainer>
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={1}>
                <Item>
                  <Header2>Estelle By Scott Pickett (ESP)</Header2>
                </Item>
                <Item>
                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}> 2018 </BC2>
                    <BC2>
                      {" "}
                      Australian Financial Review Top 100 Restaurants – Ranked
                      #75
                    </BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}> 2017 </BC2>
                    <BC2>
                      {" "}
                      Gourmet Traveller Restaurant Guide Top 100 – Ranked #28
                    </BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}> 2017 </BC2>
                    <BC2>
                      {" "}
                      Australian Financial Review Top 100 Restaurants – Ranked
                      #55
                    </BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}> 2017 </BC2>
                    <BC2> The Australian Hot 50 Restaurants</BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}>2017 </BC2>
                    <BC2>
                      {" "}
                      Age Good Food Guide –
                      <Hat src={hat} alt="chef hat" />
                      <Hat src={hat} alt="chef hat" />
                    </BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}> 2016 </BC2>
                    <BC2> Delicious Top 100 Restaurants</BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}> 2016 </BC2>
                    <BC2> The Australian Hot 50 Restaurants</BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}> 2016 </BC2>
                    <BC2>
                      Restaurant & Catering Awards For Excellence Victoria –
                      Winner Best
                    </BC2>
                  </Award>

                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}> 2016 </BC2>
                  
                    <BC2>
                  
                  Australian Financial Review Top 100 Restaurants –
                 Ranked #58
               </BC2>
                  </Award>

                </Item>
              </Grid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>

        <SectionContainer>
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={1}>
                <Item>
                  <Header2>Chancery Lane</Header2>
                </Item>
                <Item>
             
                  <Award>
                    <BC2 style={{ marginRight: `1rem` }}> 2020 </BC2>
                  
                    <BC2>
                  
                  The Age Good Food Guide - 16/20
               </BC2>
                  </Award>

                </Item>
              </Grid>
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

export default MobileLanding
