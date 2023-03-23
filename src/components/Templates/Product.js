import React, { useState } from "react"
import { useTheme } from "styled-components"
import { Container } from "../../components/global/GlobalStyles"
import DesktopHome from "../Common/DesktopHome"

// import Introduction from "./Introduction/Introduction"
import Footer from "../Common/Footer/Footer"
import MobileHome from "../Common/MobileHome"
import RightAligned from "../pages/whats-on/rightAligned"
import Introduction from "./Introduction/Introduction"
import ProductDetails from "./ProductDetails/ProductDetails"
import ProductRange from "./ProductRange/ProductRange"
import RestaurantFeature from "./RestaurantFeature/RestaurantFeature"
import SignUpModal from "./SignUpModal"

const Product = ({ pageContext, location }) => {
  const [signUp, setSignUp] = useState(false)
  const theme = useTheme()
  const path = location
  // const contentfulImages = useLandingData().landingGallery
  // const image = useLandingData().heroImage
  
  const {
    heroImage,
    introduction,
    productDetails,
    productName,
    restaurantSource,
    restaurantVerticalImage,
    restaurantAddress,
    restaurantDescription,
    buttonLabel,
    buttonUrl,
  } = pageContext.productData
  return theme ? (
    <div>
      <Container theme={theme}>
        {theme.name === "Desktop" ? (
          <DesktopHome HomeImage={heroImage} path={path} />
        ) : (
          <MobileHome HomeImage={heroImage} path={path} old={false} />
        )}
      </Container>
      <Container>
        <Introduction
          introduction={introduction}
          productName={productName}
          restaurantSource={restaurantSource}
        />
      </Container>
      <Container theme={theme}>
        {/* <ProductsIntroduction/>
        <ProductsGrid/> */}
        <ProductDetails productDetails={productDetails} />
        <ProductRange location={location}/>
        <RestaurantFeature
          restaurantSource={restaurantSource}
          restaurantVerticalImage={restaurantVerticalImage}
          restaurantAddress={restaurantAddress}
          restaurantDescription={restaurantDescription}
          buttonLabel={buttonLabel}
          buttonUrl={buttonUrl}
          location={location}
        />
      </Container>
      <Footer />
      <SignUpModal signUp={signUp} setSignUp={setSignUp} />
    </div>
  ) : (
    <div></div>
  )
}

export default Product
