import React from "react"
import { ImageCaption } from "../../global/fontStyles"
import {
  ControlsSection,
  ControlsContainer,
  ControlButton,
  MobileControls,
  ControlButtonContainer,
} from "../slider-components"
import NextIcon from "./NextIcon"
import PreviousIcon from "./PreviousIcon"
const Controls = ({
  contentfulImages,
  imageNumber,
  imageCount,
  setImageNumber,
  activeImg,
  setActiveImg,
  sectionGallery,
  path,
}) => {
  const nextImage = () => {
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

  
  return (
    <>
      {contentfulImages.length > 1 ? (
        <>
          <ControlsContainer sectionGallery={sectionGallery}>
            <ControlsSection sectionGallery={sectionGallery}>
              <ImageCaption>
                {contentfulImages[imageNumber - 1].title}
              </ImageCaption>
              <ControlButtonContainer sectionGallery={sectionGallery}>
                <ControlButton onClick={previousImage}>
                  <PreviousIcon />
                </ControlButton>
                <ControlButton onClick={nextImage}>
                  <NextIcon />
                </ControlButton>
              </ControlButtonContainer>
            </ControlsSection>
          </ControlsContainer>
          <MobileControls marginBottom>
            <ImageCaption>
              {imageNumber} / {contentfulImages.length}
            </ImageCaption>
            <ImageCaption>
              {contentfulImages[imageNumber - 1].title}
            </ImageCaption>
          </MobileControls>
        </>
      ) : path && path.includes("pantry") ? (
        <>
          <ControlsContainer sectionGallery={sectionGallery}>
            <ControlsSection sectionGallery={sectionGallery}>
              <ImageCaption>
                {contentfulImages[imageNumber - 1].title}
              </ImageCaption>
             
            </ControlsSection>
          </ControlsContainer>
          <MobileControls marginBottom>
          
            <ImageCaption>
              {contentfulImages[imageNumber - 1].title}
            </ImageCaption>
          </MobileControls>
        </>
      ) : null}
    </>
  )
}

export default Controls
