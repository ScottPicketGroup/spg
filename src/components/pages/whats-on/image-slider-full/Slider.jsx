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
} from "./slider-components"
import NextIcon from "./control-elements/NextIcon"
import PreviousIcon from "./control-elements/PreviousIcon"

import { ImageCaption } from "../../../global/fontStyles"

const SliderFull = ({ images }) => {
  const [imageNumber, setImageNumber] = useState(1)
 console.log(images)
  let title = useRef(null)
  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => previousImage(),
  })
  const [imageCount] = useState(images.length - 1)
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



  return images ? (
    <div {...handlers}>
<SliderContainer ref={el => (title = el)}>
  {images && images.map((image, i) => (
 
      <SliderImage
        image={getImage(image)}
        alt="matilda"
        id={i}
        activeImg={activeImg}
      />
   
  ))}
</SliderContainer>
{images.length > 1 ? (
  <>
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
  <ImageCaption>{imageNumber}/{images.length}</ImageCaption>
</MobileControls>
</>
) : null}

</div>
  ) : (
    <div></div>
  );
}

export default SliderFull
