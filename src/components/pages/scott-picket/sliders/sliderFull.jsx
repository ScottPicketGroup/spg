import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import Slider from '../../../image-slider-full/Slider'
const captions = [
  "Lamb ribs: ‘Matilda 159 Domain’",
  "Betel leaf: ‘Longrain Melbourne’ ",
  "Spread with salmon in middle ‘Chancery Lane Bistro’",
  "Salmon with orange sauce’: Estelle’ ",
]
const SliderFull = () => {
    const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {extension: {}, absolutePath: {regex: "/images/sp-full-carousel/"}}
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
    return (
        <Slider images={data} captions={captions}/>
    )
}

export default SliderFull