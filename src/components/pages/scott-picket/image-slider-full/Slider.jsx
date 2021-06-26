import React, { useRef, useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { gsap } from "gsap"
import { useSwipeable } from "react-swipeable"
import {
  Image,
  Controls,
  SliderContainer,
  ControlsContainer,
  ControlButton,
  MobileControls,
} from "./slider-components"
import NextIcon from "./control-elements/NextIcon"
import PreviousIcon from "./control-elements/PreviousIcon"

import img1 from "../../../../images/sp-full/1.jpg"
import img2 from "../../../../images/sp-full/2.jpg"
import img3 from "../../../../images/sp-full/3.png"
import { ImageCaption } from "../../../global/fontStyles"

const SliderFull = ({ images }) => {
  const [imageNumber, setImageNumber] = useState(1)

  let title = useRef(null)
  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => previousImage(),
  })
  const [imagesArr, setImagesArr] = useState([])
  const [activeImg, setActiveImg] = useState(0)


  console.log(`imagesArr`, imagesArr)

  const nextImage = () => {
    gsap.fromTo(
      title,
      0.1,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
      }
    )
    gsap.fromTo(
      title,
      0.3,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        delay: 0.3,
      }
    )

    setTimeout(() => {
      if (activeImg < 2) {
        setActiveImg(activeImg + 1)
        setImageNumber(imageNumber + 1)
      } else {
        setActiveImg(0)
        setImageNumber(1)
      }
    }, 200)
  }

  const previousImage = () => {
    gsap.fromTo(
      title,
      0.1,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
      }
    )
    gsap.fromTo(
      title,
      0.3,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        delay: 0.3,
      }
    )
    setTimeout(() => {
      if (activeImg > 0) {
        setActiveImg(activeImg - 1)
        setImageNumber(imageNumber + 1)
      } else {
        setActiveImg(2)
        setImageNumber(3)
      }
    }, 200)
  }

  let tiltRef = useRef()

  return (
    <div {...handlers}
    
    >
      <SliderContainer ref={el => (title = el)}>
        {activeImg === 0 ? (
          <Image src={img1} alt="matilda" />
        ) : activeImg === 1 ? (
          <Image src={img2} alt="matilda" />
        ) : activeImg === 2 ? (
          <Image src={img3} alt="matilda" />
      
        ) : null}
      </SliderContainer>
      <ControlsContainer>
        <Controls>
          <ControlButton onClick={previousImage}>
            {" "}
            <PreviousIcon />
          </ControlButton>
          <ControlButton onClick={nextImage}>
            {" "}
            <NextIcon />
          </ControlButton>
        </Controls>
      </ControlsContainer>
      <MobileControls>
       <ImageCaption>
       {imageNumber}/3
       </ImageCaption>
     </MobileControls>
    </div>
  )
}

export default SliderFull
