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
}) => {
  const [imageNumber, setImageNumber] = useState(1)
  const [imageCount] = useState(contentfulImages.length - 1)
  const [activeImg, setActiveImg] = useState(0)

  let image = useRef(null)

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
