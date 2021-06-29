import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import image1 from '../../../../images/timeline/image1.png'
import { TweenLite, Power3 } from "gsap";
const HoverImage = ({Image, display, id, mouseOut}) => {
    let imageList = useRef(null);
   useEffect(() => {
   if(display === 0) {
     TweenLite.fromTo(imageList, 0, {
       autoAlpha: 1
     },{
       autoAlpha: 0
     })

   } else if (display === id) {
    TweenLite.fromTo(imageList, 1, {
      autoAlpha: 0
    },{
      autoAlpha: 1,
      delay: .3
    })
   }
   }, [display])

  return (
    <ImgContainer ref={el => (imageList = el)}>
    {display === id ? (
      <div >
      <Img src={image1} />
      </div>
    ) : <div ></div> }
    </ImgContainer>
  )
}

export default HoverImage

export const ImgContainer = styled.div`
position: relative;
width: 100%;

`

export const Img = styled.img`
width: 80%;
aspect-ratio: 3/2;
position: absolute

`

