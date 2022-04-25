
import { gsap } from "gsap"
const useNavigation = (title, caption, imageNumber, setImageNumber, imageCount, activeImg, setActiveImg) =>  {
 
    const next = (val) => console.log(val)
    const nextImageExt = (title, caption) => {
    
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

      const previousImageExt = (title, caption) => {
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

    return previousImageExt, nextImageExt
  }

  export default useNavigation