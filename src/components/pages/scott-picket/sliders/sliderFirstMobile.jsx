import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Slider from '../../../image-slider-full/Slider'

const SliderFirstMobile = () => {
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
    
   
    return (
        <Slider images={data} captions={captions}/>
    )
}

export default SliderFirstMobile