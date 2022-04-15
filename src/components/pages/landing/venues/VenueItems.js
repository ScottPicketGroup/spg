import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { useVenueItems } from "./venue-items"

import {
  FullImageContainer,
  SectionContainer,
  InnerContainer,
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
const VenueItems = ({venues}) => {


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
                key={i}
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
                  key={i}
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

export default VenueItems
