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
} from "./slider-components"
import { BC1 } from "../global/fontStyles"
import NextIcon from "./control-elements/NextIcon"
import PreviousIcon from "./control-elements/PreviousIcon"

import img1 from "../../images/landing-carousel/matilda.jpg"
import img2 from "../../images/landing-carousel/chanceryLane.jpg"
import img3 from "../../images/landing-carousel/estelle.jpg"
import img4 from "../../images/landing-carousel/longgrain.jpg"

const Slider = ({ images }) => {
  const data = useStaticQuery(graphql`
    query Slider {
      allFile(
        filter: {
          extension: {}
          absolutePath: { regex: "/images/landing-carousel/" }
        }
      ) {
        edges {
          node {
            id
            childrenImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  let title = useRef(null)
  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => previousImage(),
  })
  const [imagesArr, setImagesArr] = useState([])
  const [activeImg, setActiveImg] = useState(0)

  // useEffect(() => {
  //   data.allFile.edges.map((item, i) =>
  //     setImagesArr(imagesArr => [...imagesArr, item.node.childrenImageSharp[0]])
  //   )
  // }, [])

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
      if (activeImg < 3) {
        setActiveImg(activeImg + 1)
      } else {
        setActiveImg(0)
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
      } else {
        setActiveImg(3)
      }
    }, 200)
  }

  let tiltRef = useRef()
  return (
    <div {...handlers}>
      <SliderContainer ref={el => (title = el)}>
        {activeImg === 0 ? (
          <Image src={img1} alt="matilda" />
        ) : activeImg === 1 ? (
          <Image src={img2} alt="matilda" />
        ) : activeImg === 2 ? (
          <Image src={img3} alt="matilda" />
        ) : activeImg === 3 ? (
          <Image src={img4} alt="matilda" />
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
    </div>
  )
}

export default Slider
