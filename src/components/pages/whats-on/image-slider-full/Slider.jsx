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

import img1 from "../../../../images/events-carousel/1.jpg"
import img2 from "../../../../images/events-carousel/2.jpg"
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
      if (activeImg < 1) {
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
        setImageNumber(imageNumber - 1)
      } else {
        setActiveImg(1)
        setImageNumber(2)
      }
    }, 200)
  }

  let tiltRef = useRef()
  return (
    <div {...handlers}>


      <SliderContainer ref={el => (title = el)}>
        {activeImg === 0 ? (
          <Image src={images[0]} alt="matilda" />
        ) : activeImg === 1 ? (
          <Image src={images[1]} alt="matilda" />
        
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
       {imageNumber}/2
       </ImageCaption>
     </MobileControls>
    </div>
  )
}

export default SliderFull
