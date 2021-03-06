import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import image1 from '../../../../images/timeline/image1.png'

import { TweenLite, Power3 } from "gsap";
const HoverImage1 = ({Image, display, id}) => {
    let imageList = useRef(null);
    useEffect(() => {
        TweenLite.fromTo(imageList, 1, {
          opacity: 0
        }, 
        {
          opacity: 1
        });
      });

    return (
        <div ref={el => (imageList = el)}>{
      display && id === display ? (
            <div >
            <Img src={image1} alt='image1'  />
         </div>) : null}
 
     
       </div>
    )
}

export default HoverImage1

export const Img = styled.img`
width: 80%;
aspect-ratio: 3/2;
`