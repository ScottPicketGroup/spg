import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { useVenueItems } from "./venue-items"

import {
  FullImageContainer,
  SectionContainer,
  InnerContainer,
  LeftContainer,
  RightContainer,
} from "../../../global/GlobalStyles"
import {
  Grid,
  Item,
  ItemExpandElement,
  ItemImgLink,
  ItemInfoContainer,
} from "../styled-components"
import { BC3, Header2 } from "../../../global/fontStyles"
import Renderer from "./DescriptionRenderer"
const Venues = () => {
  const venues = useVenueItems()

  console.log(`images`, venues)
  return (
    <SectionContainer>
      <InnerContainer marginTop="6rem">
        <Grid cols={2}>
          {venues.map((venue, i) => (
            <Item>
              <ItemImgLink
                href={`${venue.venueWebsite}`}
                target="_blank"
                link={true}
              >
                <FullImageContainer>
                  <GatsbyImage
                    image={getImage(venue.venueImage)}
                    alt="whats-on-image"
                    style={{
                      aspectRatio: `4/2.5`
                    }}
                  />
                </FullImageContainer>
                <Header2 style={{ marginTop: `1.25rem` }}>
                  {venue.venueName}
                </Header2>
                <BC3 link={true} marginTop=".25rem" marginBottom=".3rem">
                  {venue.venueAddress}
                </BC3>
              </ItemImgLink>
              <ItemInfoContainer>
                <ItemExpandElement>Read More</ItemExpandElement>
                <Renderer node={venue.venueDescription} />
                <ItemImgLink
                  href={`${venue.venueWebsite}`}
                  target="_blank"
                  link={true}
             
                >
                  Visit {venue.venueName}
                </ItemImgLink>
              </ItemInfoContainer>
            </Item>
          ))}{" "}
        </Grid>
      </InnerContainer>
    </SectionContainer>
  )
}

export default Venues
