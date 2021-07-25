import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Slider from '../../../image-slider-right/Slider'
const captions = [
  "caption eg 1",
  "caption eg 2",
  "caption eg 3",
  "caption eg 4",
  
  
]
const SliderFull = () => {
  const captions = [
    "Opening night at Chancery Lane",
    "Estelle's 10th Birthday",
    "Estelle's 10th Birthday"
  ]
    const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {extension: {}, absolutePath: {regex: "/images/sp-carousel/"}}
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
    
    console.log(`data`, data)
    return (
        <Slider images={data} captions={captions}/>
    )
}

export default SliderFull