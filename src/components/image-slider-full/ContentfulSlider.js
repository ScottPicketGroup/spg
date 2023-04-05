import React, { useRef, useState, useEffect } from "react"
import { useSwipeable } from "react-swipeable"
import { getImage } from "gatsby-plugin-image"
import { SliderContainer, SliderImage } from "./slider-components"
import useNavigation from "./control-elements/useNavigation"
import gsap from "gsap"
import Controls from "./control-elements/Controls"
import { handlers } from "./control-elements/Controls"
const ContentfulSliderFullPage = ({
  contentfulImages,
  whatsOn,
  sectionGallery,
  marginBottom,
  path
}) => {
  const [imageNumber, setImageNumber] = useState(1)
  const [imageCount] = useState(contentfulImages.length - 1)
  const [activeImg, setActiveImg] = useState(0)

  let image = useRef(null)
  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => previousImage(),
  })
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
  useEffect(() => {
    gsap.fromTo(
      [image],
      0.3,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
      }
    )
    gsap.fromTo(
      [image],
      0.3,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        delay: 0.3,
      }
    )
  }, [imageNumber])

  return contentfulImages ? (
    <div
      {...handlers}
      style={{
        background: `#f9f9f4`,
      }}
    >
      <SliderContainer key={0} ref={el => (image = el)}>
        {contentfulImages &&
          contentfulImages.map((image, i) => (
            <>
              <SliderImage
                image={getImage(image)}
                alt="matilda"
                id={i}
                activeimg={activeImg}
                key={i}
                whatsOn={whatsOn}
              />
            </>
          ))}
      </SliderContainer>

      <Controls
       marginBottom
       path={path}
        contentfulImages={contentfulImages}
        sectionGallery={sectionGallery}
        imageNumber={imageNumber}
        imageCount={imageCount}
        activeImg={activeImg}
        setActiveImg={setActiveImg}
        setImageNumber={setImageNumber}
      />
    </div>
  ) : (
    <div></div>
  )
}

export default ContentfulSliderFullPage
