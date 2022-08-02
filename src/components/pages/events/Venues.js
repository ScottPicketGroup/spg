import React from "react"

import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { SectionContainer, FullImageContainer, LeftContainer, InnerContainer} from "../../global/GlobalStyles"

import {
  
  RightContainerLink,
  
} from "./styled-components"
import { BC3, ItemImgCaption } from "../../global/fontStyles"
import { useEventsPageQuery } from "./eventPageQuery"
import { mapRange } from "gsap"
const Venues = () => {
  const venues = useEventsPageQuery().restaurants
  return (
    <>
      {venues.map((venue, i) => (
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainerLink
              hover
              href={venue.venueWebsite}
              target="_blank"
            >
              <FullImageContainer>
                <GatsbyImage
                 
                  image={getImage(venue.venueImage)}
                  alt={venue.venueImage.title}
                />
              </FullImageContainer>
              <ItemImgCaption>{
              
              venue.venueName === "Longrain" ?
              `${venue.venueName} & Longsong` :
              venue.venueName
              
              }</ItemImgCaption>
              <BC3>
                  {venue.shortAddress && venue.shortAddress.replace(/[0-9]/g, '')}
              </BC3>
            </RightContainerLink>
          </InnerContainer>
        </SectionContainer>
      ))}
      
    </>
  )
}

export default Venues
