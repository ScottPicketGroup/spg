import React, { useRef, useState } from "react"
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
import NextIcon from "./control-elements/NextIcon"
import PreviousIcon from "./control-elements/PreviousIcon"

import { ImageCaption } from "../global/fontStyles"
import useNavigation from "./control-elements/useNavigation"
import gsap from "gsap"


const ContentfulSliderFullPage = ({ contentfulImages, sectionGallery }) => {
  const [imageNumber, setImageNumber] = useState(1)
  let title = useRef(null)
  let caption = useRef(null)
  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(title, caption),
    onSwipedRight: () => previousImage(title, caption),
  })
  const [imageCount] = useState(contentfulImages.length - 1)
  const [activeImg, setActiveImg] = useState(0)

const nextImageExt = useNavigation(title, caption, imageNumber, setImageNumber, imageCount, activeImg, setActiveImg)
const previousImageExt = useNavigation(title, caption, imageNumber, setImageNumber, imageCount, activeImg, setActiveImg)

const nextImage = (title, caption) => {
    
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

const previousImage = (title, caption) => {
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
      setImageNumber(imageCount + 1)
    }
  }, 200)
}




  return contentfulImages ? (
    <div
      {...handlers}
      style={{
        background: `#f9f9f4`,
      }}
    >
      <SliderContainer ref={el => (title = el)} key={0}>
        {contentfulImages &&
          contentfulImages.map((image, i) => (
            <>
              <SliderImage
                image={getImage(image)}
                alt="matilda"
                id={i}
                activeimg={activeImg}
                key={i}
              />
           
            </>
          ))}
      </SliderContainer>
  
      <ControlsContainer>
        <Controls sectionGallery={sectionGallery}>
          <ImageCaption ref={el => (caption = el)}>
            {contentfulImages[imageNumber - 1].title}
          </ImageCaption>
          <ControlButtonContainer>
            <ControlButton onClick={() => previousImageExt(title, caption)}>
              <PreviousIcon />
            </ControlButton>
            <ControlButton onClick={() => nextImageExt(title, caption)}>
              <NextIcon />
            </ControlButton>
          </ControlButtonContainer>
        </Controls>
      </ControlsContainer>
      <MobileControls>
        <ImageCaption>{imageNumber} / {contentfulImages.length}</ImageCaption>
        <ImageCaption>
        {contentfulImages[imageNumber - 1].title}
        </ImageCaption>
      </MobileControls>
    </div>
  ) : (
    <div></div>
  )
}

export default ContentfulSliderFullPage
