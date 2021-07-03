import React, {useState, useEffect} from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import { venues } from './venue-items'

import { FullImageContainer, SectionContainer, InnerContainer, LeftContainer, RightContainer } from '../../../global/GlobalStyles'
import { Grid, Item, ItemImgLink, ItemInfoContainer } from '../styled-components'
import { BC3, Header2 } from "../../../global/fontStyles"
const Venues = () => {
  const data = useStaticQuery(graphql`
  {
    allFile(
      filter: {extension: {}, absolutePath: {regex: "/images/venue-desc/"}}
    ) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.5)
          }
        }
      }
    }
  }
     
    `)
console.log(`data.allFile.edges.map(data)`, data.allFile.edges.map((item, i) => {console.log(i, item)}))
const [open, setOpen] = useState({})
const [images, setImages] = useState(data.allFile.edges)

useEffect(() => {
    venues.map(venue=> {
        setOpen(open => ({ ...open, [venue.name.toLocaleLowerCase().replace(/\s/g, '')]: false}))
    })
   
}, [venues])

console.log(`images`, images)
    return (
        <SectionContainer>
            <InnerContainer marginTop="6rem">
            <LeftContainer></LeftContainer>
            <RightContainer>
     {
         venues.map((venue, i) => (
            <Grid cols={2}>
            <Item link={true}>
              <ItemImgLink href={`${venue.url}`} target="_blank" link={true}>
                <FullImageContainer>
                <GatsbyImage  
                image={getImage(data.allFile.edges[i].node)}
                alt={venue.name} />
                </FullImageContainer>
                <Header2 style={{ marginTop: `1.25rem` }}>
                  {venue.name}
                </Header2>
                <BC3 link={true}>{venue.address}</BC3>
              </ItemImgLink>
              <ItemInfoContainer>
                  {venue.info}
              </ItemInfoContainer>
            </Item>
            </Grid>
         ))
     }
              </RightContainer>
              </InnerContainer>
         </SectionContainer>   
    )
}

export default Venues