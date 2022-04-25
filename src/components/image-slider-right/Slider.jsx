import React, { useRef, useState } from "react"


import { gsap } from "gsap"
import { useSwipeable } from "react-swipeable"
import { getImage } from "gatsby-plugin-image"
import {
  Controls,
  SliderContainer,
  ControlsContainer,
  ControlButton,
  MobileControls,
  SliderImage,
  ControlButtonContainer,
} from "./slider-components"
import {
  RightContainer,
  LeftContainer
} from "../global/GlobalStyles"
import NextIcon from "./control-elements/NextIcon"
import PreviousIcon from "./control-elements/PreviousIcon"

import { ImageCaption } from "../global/fontStyles"

const SliderFull = ({ images, captions }) => {
  const [imageNumber, setImageNumber] = useState(1)
  let title = useRef(null)
  let caption = useRef(null)
  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => previousImage(),
  })
  const [imageCount] = useState(images.allFile.edges.length - 1)
  const [activeImg, setActiveImg] = useState(0)

  const nextImage = () => {
    gsap.fromTo(
      [title, caption],
      0.1,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
      }
    )
    gsap.fromTo(
      [title, caption],
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
      if (activeImg < imageCount) {
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
        setActiveImg(imageCount)
      }
    }, 200)
  }

console.log(captions)

  return (
    <div {...handlers}
    
    style={{
      background: `#f9f9f4`
    }}>
      <SliderContainer ref={el => (title = el)}>
        {images.allFile.edges.map((image, i) => (
          <>
            <SliderImage
              image={getImage(image.node)}
              alt="matilda"
              id={i}
              activeImg={activeImg}
              key={i}
            />
          </>
        ))}
      </SliderContainer>
     
      <ControlsContainer>
       
        
        <Controls right={true}> 
        <ImageCaption ref={el => (caption = el)}>{captions[imageNumber - 1]}</ImageCaption>
        <ControlButtonContainer>
          <ControlButton onClick={previousImage}>
            <PreviousIcon />
          </ControlButton>
          <ControlButton onClick={nextImage}>
            <NextIcon />
          </ControlButton>
          </ControlButtonContainer>
        </Controls>
        
      </ControlsContainer>
      <MobileControls>
        <ImageCaption>{imageNumber}/2</ImageCaption>
      </MobileControls>
    </div>
  )
}

export default SliderFull
