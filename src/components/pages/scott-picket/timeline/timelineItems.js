import React, { useState, useRef } from "react"
import { useTheme } from "styled-components"
import { SectionContainer } from "../../../global/GlobalStyles"
import { BC3, Header2, BC2 } from "../../../global/fontStyles"
import {
  TimeLineContainer,
  TimeLineGrid,
  RightGrid,
  LeftGrid,
  RightContainer,
  LeftContainer,
} from "../styled-components"
import timeline from "./timeline.json"
import HoverImage1 from "../hovers/hover1"
const TimelineItems = () => {
  const theme = useTheme()
  const [display, setDisplay] = useState(0)
  const fadeOut = () => {
    setDisplay(0)
  }

  return theme ? (
  //   <div>
  //     {timeline.map((item, i) => (
  //       <SectionContainer onMouseLeave={fadeOut}>
  //         <TimeLineContainer>
  //           <LeftContainer>
  //             <div style={{ opacity: `1` }} ref={el => (imgContainer = el)}>
  //               <HoverImage
  //                 Image={`${item.image}`}
  //                 display={display}
  //                 setDisplay={setDisplay}
  //                 id={i + 1}
  //               />
  //             </div>
  //           </LeftContainer>
  //           <RightContainer>
  //             <TimeLineGrid onMouseEnter={() => setDisplay(i + 1)}>
  //               <LeftGrid>
  //                 <Header2>{item.year}</Header2>
  //                 <BC3>{item.phase}</BC3>
  //               </LeftGrid>
  //               <RightGrid>
  //                 <BC2>{item.qoute}</BC2>
  //               </RightGrid>
  //             </TimeLineGrid>
  //           </RightContainer>
  //         </TimeLineContainer>
  //       </SectionContainer>
  //     ))}

  //     <SectionContainer>
  //       <TimeLineContainer
  //         onMouseOver={() => setDisplay(11)}
  //         onMouseOut={() => setDisplay(0)}
  //       >
  //         <LeftContainer>
  //           <HoverImage1 display={display} id={11} />
  //         </LeftContainer>
  //         <RightContainer>
  //           <TimeLineGrid>
  //             <LeftGrid>
  //               <Header2>2019</Header2>
  //               <BC3>
  //                 Lupo, publication ‘Marriage of Flavours’, Pastore &amp;
  //                 Pickett’s Deli &amp; Rotisserie at Melbourne Airport
  //               </BC3>
  //             </LeftGrid>
  //             <RightGrid>
  //               <BC2>
  //                 In June I reopened my Smith Street restaurant (formerly Saint
  //                 Crispin) as Lupo, a relaxed, contemporary Italian style
  //                 restaurant. August saw the launch of my new book – Marriage of
  //                 Flavours. In November, I opened the doors to Pastore at Hotel
  //                 Chadstone. But I wasn’t done yet! In December I moved my Queen
  //                 Vic market concept to terminal three, opening Pickett’s Deli
  //                 &amp; Rotisserie at Melbourne Airport.
  //               </BC2>
  //             </RightGrid>
  //           </TimeLineGrid>
  //         </RightContainer>
  //       </TimeLineContainer>
  //     </SectionContainer>
  //     <SectionContainer>
  //       <TimeLineContainer>
  //         <LeftContainer>
  //           <HoverImage />
  //         </LeftContainer>
  //         <RightContainer>
  //           <TimeLineGrid>
  //             <LeftGrid>
  //               <Header2>2020</Header2>
  //               <BC3>
  //                 Longrain &amp; Longong, Chancery Lane and our production
  //                 kitchen.
  //               </BC3>
  //             </LeftGrid>
  //             <RightGrid
  //               onMouseOver={() => setDisplay(1)}
  //               onMouseOut={() => setDisplay(0)}
  //             >
  //               <BC2>
  //                 When COVID struck the city down, the opportunity arose to
  //                 purchase Longrain and Longsong. I couldn’t pass it up. I am so
  //                 proud to continue the legacy of the Melbourne institution.
  //                 <br /> <br />
  //                 On 16 th December we opened Chancery Lane, European bistro
  //                 with an edge. As if I wasn’t busy enough with Longrain and
  //                 opening Chancery Lane, I also purchased a large warehouse out
  //                 the back of Estelle where we spent months converting it into a
  //                 production kitchen for our off-site catering business in the
  //                 works, SP Events.
  //               </BC2>
  //             </RightGrid>
  //           </TimeLineGrid>
  //         </RightContainer>
  //       </TimeLineContainer>
  //     </SectionContainer>
  //     <SectionContainer>
  //       <TimeLineContainer>
  //         <LeftContainer>
  //           <HoverImage1 />
  //         </LeftContainer>
  //         <RightContainer>
  //           <TimeLineGrid
  //             style={{ borderBottom: `1px solid rgba(51, 51, 51, 25%)` }}
  //           >
  //             <LeftGrid>
  //               <Header2>2021</Header2>
  //               <BC3>
  //                 SP Events, Le Shoppe by Chancery Lane, Matilda’s evolution and
  //                 Smith Street Bistro… coming soon
  //               </BC3>
  //             </LeftGrid>
  //             <RightGrid>
  //               <BC2>
  //                 In June, three days before lockdown 4.0, I opened Le Shoppe, a
  //                 sibling to Chancery lane. Coffee-bar and provedore by day, and
  //                 intimate aperitivo bar by night. Smith Street Bistro in our
  //                 former Lupo site will be launching towards the end of this
  //                 year and I can’t wait! It’ll be a relaxed bistro with a focus
  //                 on comfort food, great drinks and a social atmosphere.
  //                 <br /> <br />
  //                 As they say, there’s no rest for the wicked… Stay tuned…
  //               </BC2>
  //             </RightGrid>
  //           </TimeLineGrid>
  //         </RightContainer>
  //       </TimeLineContainer>
  //     </SectionContainer>
  //   </div>
  // ) : (
  //   <div></div>
  <div>
      {timeline.map((item, i) => (
        <SectionContainer onMouseLeave={fadeOut}>
          <TimeLineContainer>
            <LeftContainer>
             
            </LeftContainer>
            <RightContainer>
              <TimeLineGrid>
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
        >
          <LeftContainer>
            <HoverImage1 display={display} id={11} />
          </LeftContainer>
          <RightContainer>
            <TimeLineGrid>
              <LeftGrid>
                <Header2>2019</Header2>
                <BC3>
                  Lupo, publication ‘Marriage of Flavours’, Pastore &amp;
                  Pickett’s Deli &amp; Rotisserie at Melbourne Airport
                </BC3>
              </LeftGrid>
              <RightGrid>
                <BC2>
                  In June I reopened my Smith Street restaurant (formerly Saint
                  Crispin) as Lupo, a relaxed, contemporary Italian style
                  restaurant. August saw the launch of my new book – Marriage of
                  Flavours. In November, I opened the doors to Pastore at Hotel
                  Chadstone. But I wasn’t done yet! In December I moved my Queen
                  Vic market concept to terminal three, opening Pickett’s Deli
                  &amp; Rotisserie at Melbourne Airport.
                </BC2>
              </RightGrid>
            </TimeLineGrid>
          </RightContainer>
        </TimeLineContainer>
      </SectionContainer>
      <SectionContainer>
        <TimeLineContainer>
          <LeftContainer>
            {/* <HoverImage /> */}
          </LeftContainer>
          <RightContainer>
            <TimeLineGrid>
              <LeftGrid>
                <Header2>2020</Header2>
                <BC3>
                  Longrain &amp; Longong, Chancery Lane and our production
                  kitchen.
                </BC3>
              </LeftGrid>
              <RightGrid
              >
                <BC2>
                  When COVID struck the city down, the opportunity arose to
                  purchase Longrain and Longsong. I couldn’t pass it up. I am so
                  proud to continue the legacy of the Melbourne institution.
                  <br /> <br />
                  On 16 th December we opened Chancery Lane, European bistro
                  with an edge. As if I wasn’t busy enough with Longrain and
                  opening Chancery Lane, I also purchased a large warehouse out
                  the back of Estelle where we spent months converting it into a
                  production kitchen for our off-site catering business in the
                  works, SP Events.
                </BC2>
              </RightGrid>
            </TimeLineGrid>
          </RightContainer>
        </TimeLineContainer>
      </SectionContainer>
      <SectionContainer>
        <TimeLineContainer>
          <LeftContainer>
            {/* <HoverImage1 /> */}
          </LeftContainer>
          <RightContainer>
            <TimeLineGrid
              style={{ borderBottom: `1px solid rgba(51, 51, 51, 25%)` }}
            >
              <LeftGrid>
                <Header2>2021</Header2>
                <BC3>
                  SP Events, Le Shoppe by Chancery Lane, Matilda’s evolution and
                  Smith Street Bistro… coming soon
                </BC3>
              </LeftGrid>
              <RightGrid>
                <BC2>
                  In June, three days before lockdown 4.0, I opened Le Shoppe, a
                  sibling to Chancery lane. Coffee-bar and provedore by day, and
                  intimate aperitivo bar by night. Smith Street Bistro in our
                  former Lupo site will be launching towards the end of this
                  year and I can’t wait! It’ll be a relaxed bistro with a focus
                  on comfort food, great drinks and a social atmosphere.
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
