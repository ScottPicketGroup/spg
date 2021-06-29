import React, { useState, useRef } from "react"
import { useTheme } from "styled-components"
import { SectionContainer } from "../../../global/GlobalStyles"
import { BC3, Header2, BC2 } from "../../../global/fontStyles"
import { TweenLite, Power3 } from "gsap"
import {
  TimeLineContainer,
  TimeLineGrid,
  RightGrid,
  LeftGrid,
  RightContainer,
  LeftContainer,
} from "../styled-components"
import timeline from "./timeline.json"
import HoverImage from "./hoverImage"
import HoverImage1 from "../hovers/hover1"
const TimelineItems = () => {
  let imgContainer = useRef(null)
  const theme = useTheme()
  const [display, setDisplay] = useState(0)
  const fadeOut = () => {
 console.log('ext')
 setDisplay(0)
  }

  return theme ? (
    <div>
      {timeline.map((item, i) => (
        <SectionContainer onMouseLeave={fadeOut}>
          <TimeLineContainer >
            <LeftContainer>
              <div style={{ opacity: `1` }} ref={el => (imgContainer = el)}>
                <HoverImage
                  Image={`${item.image}`}
                  display={display}
                  setDisplay={setDisplay}
                  id={i + 1}
                />
              </div>
            </LeftContainer>
            <RightContainer >
              <TimeLineGrid
              onMouseEnter={() => setDisplay(i + 1)}
              >
                <LeftGrid>
                  <Header2>{item.year}</Header2>
                  <BC3>{item.phase}</BC3>
                </LeftGrid>
                <RightGrid>
                  <BC2>{item.qoute}</BC2>
                </RightGrid>
              </TimeLineGrid>
            </RightContainer>
          </TimeLineContainer>
        </SectionContainer>
      ))}

      <SectionContainer>
        <TimeLineContainer
          onMouseOver={() => setDisplay(11)}
          onMouseOut={() => setDisplay(0)}
        >
          <LeftContainer>
            <HoverImage1 display={display} id={11} />
          </LeftContainer>
          <RightContainer>
            <TimeLineGrid>
              <LeftGrid>
                <Header2>2019</Header2>
                <BC3>
                  What a year! Estelle, Lupo, my newest publication ‘Marriage of
                  Flavours’, the launch of new venture ‘Pastore’ & the move of
                  Pickett’s Deli & Rotisserie to Melbourne Airport
                </BC3>
              </LeftGrid>
              <RightGrid>
                <BC2>
                  In February, the space which had previously housed ESP,
                  reopened as the Estelle. A venue for all occasions, whether
                  that be popping in for a wine & a snack, or enjoying the full
                  tasting experience. In June, I reopened my Smith Street
                  restaurant (formerly Saint Crispin) as Lupo, a relaxed,
                  contemporary Italian style restaurant. August saw the launch
                  of my new book – Marriage of Flavours.
                  <br /> <br />
                  On Friday, 1 November, I opened the doors to Pastore at Hotel
                  Chadstone. It’s the perfect venue for local families, shoppers
                  and destination diners alike and embraces the Italian
                  tradition of the long lunch on Sundays, serving a generous
                  sharing menu encouraging diners to relax into the afternoon.
                  <br /> <br />
                  But I wasn’t done yet! In December I moved my Queen Vic market
                  concept to terminal three, opening Pickett’s Deli & Rotisserie
                  at Melbourne Airport. I’m looking forward to giving travelers
                  a true taste of the quality of Melbourne food!
                </BC2>
              </RightGrid>
            </TimeLineGrid>
          </RightContainer>
        </TimeLineContainer>
      </SectionContainer>
      <SectionContainer>
        <TimeLineContainer>
          <LeftContainer>
            <HoverImage />
          </LeftContainer>
          <RightContainer>
            <TimeLineGrid>
              <LeftGrid>
                <Header2>2020</Header2>
                <BC3>
                  A year where most rested, I didn’t. Longrain & Longong,
                  Chancery Lane and our production kitchen.
                </BC3>
              </LeftGrid>
              <RightGrid
                onMouseOver={() => setDisplay(1)}
                onMouseOut={() => setDisplay(0)}
              >
                <BC2>
                  When COVID struck the city and the hospitality industry down,
                  the opportunity arose to purchase Longrain from John and Lisa
                  Van Haandel. I couldn’t pass it up. We we’re able to keep the
                  existing staff and management employed and keep the business
                  operating through lockdown on Providoor. I am so proud to
                  continue the legacy of the Melbourne institution.
                  <br /> <br />
                  On 16th December, still very much mid-pandemic, by some
                  miracle we opened Chancery Lane. Opening a restaurant during a
                  pandemic is no small task and I can’t say I’d recommend it,
                  but once we opened the doors and started seeing guests
                  enjoying the food, in awe of the fit out.. it all became worth
                  it.
                  <br /> <br />
                  As if I wasn’t busy enough with Longrain and opening Chancery
                  Lane, I also purchased a large warehouse out the back of
                  Estelle where we spent months converting it into a production
                  kitchen for our off-site catering business in the works, SP
                  Events.
                </BC2>
              </RightGrid>
            </TimeLineGrid>
          </RightContainer>
        </TimeLineContainer>
      </SectionContainer>
      <SectionContainer>
        <TimeLineContainer>
          <LeftContainer>
            <HoverImage1 />
          </LeftContainer>
          <RightContainer>
            <TimeLineGrid
              style={{ borderBottom: `1px solid rgba(51, 51, 51, 25%)` }}
            >
              <LeftGrid>
                <Header2>2021</Header2>
                <BC3>
                  They keep getting bigger! SP Events, Le Shoppe by Chancery
                  Lane, Matilda’s evolution and Smith Street Bistro.. coming
                  soon
                </BC3>
              </LeftGrid>
              <RightGrid>
                <BC2>
                  At the start of the year we partnered with local winery Sutton
                  Grange to launch our first off-site pop-up event as part of
                  our catering company SP Events; a weekend Longrain pop up at
                  the winery.
                  <br /> <br />
                  In June, three days before lockdown 4.0 I opened Le Shoppe, a
                  sibling to Chancery lane, a daytime coffee-bar and provedore,
                  also European-inspired and with a focus on top quality
                  work-day food. We’re also opening Le Shoppe as an aperitivo
                  bar for snacks and a casual drink on the way through to
                  Chancery Lane.
                  <br /> <br />
                  I’m planning a small re-development of my South Yarra
                  restaurant Matilda this year. I want to open the front of the
                  restaurant to allow for more seating and better indoor/outdoor
                  flow, which can better cater for our new breakfast, brunch and
                  lunch offers, coming soon. We’re also going to re-develop
                  Oscar’s Bar downstairs to make it more of a cosy, whisky bar
                  for pre or post-dinner drinks.
                  <br /> <br />
                  Smith Street Bistro in our former Lupo site will be launching
                  towards the end of this year and I can’t wait! It’ll be a
                  relaxed bistro with a focus on comfort food, great drinks and
                  a social atmosphere.
                  <br /> <br />
                  As they say, there’s no rest for the wicked… Stay tuned…
                </BC2>
              </RightGrid>
            </TimeLineGrid>
          </RightContainer>
        </TimeLineContainer>
      </SectionContainer>
    </div>
  ) : (
    <div></div>
  )
}

export default TimelineItems
