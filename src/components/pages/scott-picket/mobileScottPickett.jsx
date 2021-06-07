import React from "react";

import { useTheme } from "styled-components";
import {
  Container,
  SectionContainer,
  ImageContainer,
  ImageView,
  ImageDiv,
} from "../../global/GlobalStyles";
import SideImage from "../../../images/Screen Shot 2021-04-18 at 1.39.34 pm.png";

import HomeImage from "../../../images/Screen Shot 2021-04-18 at 2.05.39 pm.png";

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
} from "./styled-components";
import Footer from "../../Common/Footer";
import MobileHome from "../../Common/MobileHome";
import {
  BC1,
  Header1,
  BC3,
  Header2,
  Quotation,
  BC2,
} from "../../global/fontStyles";

const MobileLanding = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <Container theme={theme}>
        <MobileHome HomeImage={HomeImage} path={pageProps.path} />

        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>Scott Pickett </Header1>
            <BC1 theme={theme} marginBottom="6rem">
              My love for great produce began early. As a kid on a farm in
              Kangarilla, it taught me a lot about food and seasonality. Knowing
              the growers and producers behind the food we ate gave me a respect
              for them that I’ve never lost. That connection with an environment
              like that influenced me to become a chef. So did growing up with
              my grandmother Audrey’s Sunday roasts.
            </BC1>
            <BC1 theme={theme} marginBottom="6rem">
              Those years set the foundations of my values as a chef and
              restaurateur today. My approach always puts food at the front.
              It’s based on real cooking – with the greatest respect to the
              produce. I want you to have incredible food and wine experiences,
              with incredible service. But the food is the hero. Now, as a
              restaurateur, I don’t spend as much time cooking as I used to, but
              I have some gun Head Chefs to work with. Together, we build on
              what makes each of the venues special, and try to impart on you
              our understanding of seasonality and our respect for Australian
              growers and producers. It’s a journey that’s still going. Can’t
              wait to share with you what we’ve got planned next.
            </BC1>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer displayBlock="true">
            <QuotationContainer>
              <Quotation>
                “ Those years set the foundations of my values as a chef and
                restaurateur today. My approach always puts food at the front.
                It’s based on real cooking – with the greatest respect to the
                produce.”
              </Quotation>
            </QuotationContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>Timeline</Header1>
            <BC1 theme={theme} marginBottom="6rem">
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
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={1}>
                <Item>
                  <Header2>1975</Header2>
                  <BC3>Childhood</BC3>
                </Item>
                <Item>
                  <BC2>
                    “My grandmother, Audrey, used to cook a Sunday roast,
                    usually lamb. That’s my first lasting recollection of food.
                    It was cooked for hours until it was falling apart.
                    Grandmother Audrey Masterson is an important part of my
                    story.”
                  </BC2>
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
                  <Header2>Early 90S</Header2>
                  <BC3>Apprenticeship</BC3>
                </Item>
                <Item>
                  <BC2>
                    “For a small city, Adelaide punched above its weight. I was
                    so excited on my first day at Jarmer’s. I owe Peter Jarmer a
                    lot. He was the first person to instil a work ethic in me.
                    He taught me discipline and attention to detail.”
                  </BC2>
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
                  <Header2>Late 90S</Header2>
                  <BC3>To Melbourne</BC3>
                </Item>
                <Item>
                  <BC2>
                    “It was great, moving to Melbourne to work with Bruno Cerdan
                    at the Hotel Windsor, one of the great hotel kitchens. I
                    felt like I was on my way. Philippe Mouchel’s kitchen was a
                    very different experience. He likes a silent kitchen… I
                    don’t.”
                  </BC2>
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
                  <Header2>1999</Header2>
                  <BC3>In London</BC3>
                </Item>
                <Item>
                  <BC2>
                    I walked into The Square. That was it. Life-changing. I
                    thought, “This is for me.” I loved the mood, the energy, the
                    banter, and that was even before I spent the morning working
                    with Phil Howard making terrines.
                  </BC2>
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
                  <Header2>2002</Header2>
                  <BC3>Back to Australia</BC3>
                </Item>
                <Item>
                  <BC2>
                    I owe Donovan Cooke a lot. Working with him was like a
                    finishing school. I thought I was a good saucier until I saw
                    him work. My whole philosophical view of meat and sauces
                    changed because of him.
                  </BC2>
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
                  <Header2>2005</Header2>
                  <BC3>Bocuse D’Or</BC3>
                </Item>
                <Item>
                  <BC2>
                    I like competitions. I knew them, what they were like to
                    train for, the adrenalin rush of competition. The Bocuse
                    d’Or was in a different league. We trained for a year and
                    came 14th – the highest ever for an Australian team.
                  </BC2>
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
                  <Header2>2006</Header2>
                  <BC3>The Point</BC3>
                </Item>
                <Item>
                  <BC2>
                    I was at the Point for more than five years, the longest I
                    had been anywhere. It was a great time, very challenging. It
                    was mainly beef when it came to meat. At one point we did a
                    beef tasting plate with five cuts. We won Best Steak
                    restaurant in 2009 and 2011.
                  </BC2>
                </Item>
              </Grid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>
        <SectionContainer>
          <TimeLineContainer>
            <LeftContainer>
              <ImageContainer theme={theme}>
                <ImageView theme={theme}>
                  <ImageDiv src={SideImage} theme={theme}></ImageDiv>
                </ImageView>
              </ImageContainer>
            </LeftContainer>
            <RightContainer>
              <Grid cols={1}>
                <Item>
                  <Header2>2011</Header2>
                  <BC3>Estelle</BC3>
                </Item>
                <Item>
                  <BC2>
                    Opening Estelle Bar and Kitchen was probably the biggest
                    leap of faith of my career. It was a huge effort by a lot of
                    people, including family and friends. And involved a lot of
                    improvisation – those DIY skills learnt on the farm came in
                    handy.
                  </BC2>
                </Item>
                <Item>
                  <Header2>2013</Header2>
                  <BC3>Saint Crispin</BC3>
                </Item>
                <Item>
                  <BC2>
                    Each of my restaurants has a bit of local flavour from the
                    place it’s in, whether Northcote, Collingwood or the Queen
                    Vic Market. In Collingwood, Saint Crispin may seem refined
                    but it’s a little bit raucous, too. It’s eclectic, just like
                    Smith Street.
                  </BC2>
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
                  <Header2>2014</Header2>
                  <BC3>Publication of Scott Pickett</BC3>
                </Item>
                <Item>
                  <BC2>
                    A Cook’s Story – My first book, where you can read the whole
                    story… no holds barred…
                  </BC2>
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
                  <Header2>2015</Header2>
                  <BC3>ESP and Estelle Bistro</BC3>
                </Item>
                <Item>
                  <BC2>
                    Meanwhile, when Estelle Bar and Kitchen was growing, the
                    opportunity came along to acquire the property next door,
                    and Estelle evolved into two separate restaurants: Estelle
                    Bistro and Estelle by Scott Pickett (ESP).
                  </BC2>
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
                  <Header2>2015</Header2>
                  <BC3>Television</BC3>
                </Item>
                <Item>
                  <BC2>
                    I co-presented Hotplate on Channel 9 with UK author, food
                    writer and journalist Tom Parker Bowles. I learnt a lot
                    about what to do and what not to do on camera, which has
                    held me in good stead for media appearances moving forward.
                  </BC2>
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
                  <Header2>2016</Header2>
                  <BC3>Pickett’s Deli</BC3>
                </Item>
                <Item>
                  <BC2>
                    Then came Pickett’s Deli & Rotisserie – very different to
                    the rest. It’s a homage to the neighbourhood chook shop
                    smack in the middle of Melbourne’s culinary heart, the
                    iconic Queen Victoria Market. Rotisserie chicken, bacon and
                    egg rolls and coffee. It’s just bloody yummy.
                  </BC2>
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
                  <Header2>2018</Header2>
                  <BC3>Matilda</BC3>
                </Item>
                <Item>
                  <BC2>
                    Matilda. Named after my daughter. A sensory journey, all
                    about flames and open grills, and a true labour of love for
                    me. It’s intended to be more relaxed, somewhere you can
                    visit often and be guaranteed a local piece of meat, cooked
                    exceptionally well.
                  </BC2>
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
                  <Header2>2019</Header2>
                  <BC3>What a Year!</BC3>
                </Item>
                <Item>
                  <BC2>
                    Estelle, Lupo, my newest publication “Marriage of Flavours”,
                    the launch of new venture “Pastore” & the move of Pickett’s
                    Deli & Rotisserie to Melbourne Airport In February, the
                    space which had previously housed ESP, reopened as the
                    Estelle. A venue for all occasions, whether that be popping
                    in for a wine & a snack, or enjoying the full tasting
                    experience. In June, I reopened my Smith Street restaurant
                    (formerly Saint Crispin) as Lupo, a relaxed, contemporary
                    Italian style restaurant. August saw the launch of my new
                    book – Marriage of Flavours. On Friday, 1 November, I opened
                    the doors to Pastore at Hotel Chadstone. It’s the perfect
                    venue for local families, shoppers and destination diners
                    alike and embraces the Italian tradition of the long lunch
                    on Sundays, serving a generous sharing menu encouraging
                    diners to relax into the afternoon. But I wasn’t done yet!
                    In December I moved my Queen Vic market concept to terminal
                    three, opening Pickett’s Deli & Rotisserie at Melbourne
                    Airport. I’m looking forward to giving travelers a true
                    taste of the quality of Melbourne food!
                  </BC2>
                </Item>
              </Grid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer theme={theme} displayBlock={true}>
            <Header1 theme={theme}>Accolades</Header1>
            <BC1 theme={theme} marginBottom="6rem">
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
          <TimeLineContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Grid cols={1}>
                <Item>
                  <Header2>Matilda</Header2>
                </Item>
                <Item>
                  <BC2>2020 Age Good Food Guide –</BC2>
                  <BC2>
                    2019 Time Out 50 Best Restaurants in Melbourne – Ranked #12
                  </BC2>
                  <BC2>
                    2019 Time Out Melbourne Nominated for Best Fine Dining
                    Restaurant{" "}
                  </BC2>
                  <BC2> 2019 Age Good Food Guide – </BC2>

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
                  <Header2>Estelle</Header2>
                </Item>
                <Item>
                  <BC2>2020 Age Good Food Guide – </BC2>
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
                  <Header2>Saint Crispin</Header2>
                </Item>
                <Item>
                  <BC2>2020 Age Good Food Guide – </BC2>
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
                  <Header2>Saint Crispin</Header2>
                </Item>
                <Item>
                  <BC2> 2019 Age Good Food Guide –</BC2>
                  <BC2> 2018 Age Good Food Guide –</BC2>
                  <BC2> 2018 Gault & Millau Guide – 14.5/20</BC2>
                  <BC2> 2017 Age Good Food Guide –</BC2>
                  <BC2>
                    {" "}
                    2017 Australian Financial Review Top 100 Restaurants –
                    Ranked #95
                  </BC2>
                  <BC2> 2016 Age Good Food Guide –</BC2>
                  <BC2>
                    {" "}
                    2016 Australian Financial Review Top 100 Restaurants –
                    Ranked #44
                  </BC2>
                  <BC2> 2016 Delicious Top 100 Restaurants</BC2>
                  <BC2> 2015 Age Good Food Guide –</BC2>
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
                  <BC2> 2014 Age Good Food Guide –</BC2>
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
                  <Header2>Estelle Bistro</Header2>
                </Item>
                <Item>
                  <BC3> 2018 Delicious Top 100 Restaurants</BC3>
                  <BC3> 2018 Gault & Millau Guide</BC3> – 15/20
                  <BC3> 2017 Gourmet Traveller Restaurant Guide</BC3>
                  <BC3> 2017 Age Good Food Guide</BC3>
                  <BC3> 2016 Delicious Top 100 Restaurants</BC3>
                  <BC3> 2016 Age Good Food Guide</BC3>
                  <BC3>
                    {" "}
                    2015 Australian Financial Review Top 100 Restaurants –
                    Ranked #27
                  </BC3>
                  <BC3> 2015 Age Good Food Guide – </BC3>
                  <BC3> 2014 Age Good Food Guide – </BC3>
                  <BC3>
                    {" "}
                    2014 Age Good Food Guide – Finalist for New Restaurant of
                    the Year
                  </BC3>
                  <BC3> 2013 Age Good Food Guide – </BC3>
                  <BC3>
                    {" "}
                    2013 Age Good Food Guide – Winner Young Chef of the Year,
                    Josh Pelham
                  </BC3>
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
                  <BC3>
                    {" "}
                    2018 Australian Financial Review Top 100 Restaurants –
                    Ranked #75|
                  </BC3>
                  <BC3>
                    {" "}
                    2017 Gourmet Traveller Restaurant Guide Top 100 – Ranked #28
                  </BC3>
                  <BC3>
                    {" "}
                    2017 Australian Financial Review Top 100 Restaurants –
                    Ranked #55
                  </BC3>
                  <BC3> 2017 The Australian Hot 50 Restaurants</BC3>
                  <BC3> 2017 Age Good Food Guide – </BC3>
                  <BC3> 2016 Delicious Top 100 Restaurants</BC3>
                  <BC3> 2016 The Australian Hot 50 Restaurants</BC3>
                  <BC3>
                    {" "}
                    2016 Restaurant & Catering Awards For Excellence Victoria –
                    Winner Best
                  </BC3>
                  <BC3> New Restaurant</BC3>
                  <BC3>
                    {" "}
                    2016 Australian Financial Review Top 100 Restaurants –
                    Ranked #58
                  </BC3>
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
  );
};

export default MobileLanding;
