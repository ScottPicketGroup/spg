import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { useTheme } from "styled-components"
import { BC1, BC2, Header1, Header2 } from "../components/global/fontStyles"
import logo from '../images/logo.svg'
const SecondPage = ({ data }) => {
  const logos = data.allContentfulLogoSplashPage.edges[0].node.logosList
  console.log(logos)
  const theme = useTheme()

  return theme ? (
    <div>
      <PageWrapper>
        <TopLogoWrapper to="/">TO MAIN SITE</TopLogoWrapper>

        <CenterWrapper>
          <TitleWrapper>
            <Header2 marginBottom="2rem">Our Venues</Header2>
            <BC2 marginTop="2rem">Click to discover more</BC2>
          </TitleWrapper>
          <LogosWrapper>
            {logos.map((logo, i) => (
              <LogoWrapper href={logo.url} target="_blank">
                <GatsbyImage image={getImage(logo.logo.gatsbyImageData)} />
              </LogoWrapper>
            ))}
          </LogosWrapper>
        </CenterWrapper>
        <BottomLogo>
          <img src={logo}
               
            />
        </BottomLogo>
      </PageWrapper>
    </div>
  ) : (
    <div></div>
  )
}

export default SecondPage

export const logosAndUrlsData = graphql`
query logosInfo {
  allContentfulLogoSplashPage {
    edges {
      node {
        logosList {
          url
          logo {
            gatsbyImageData
            title
          }
        }
      }
    }
  }
}
`

export const PageWrapper = styled.div`
  height: 100vh;
  min-width: 100%;
  padding: 2rem 7.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    padding: 3rem 1rem;
`
export const LogosWrapper = styled.div`
  padding: 2rem 0;
  width: 80vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const TopLogoWrapper = styled(Link)`
  align-self: flex-start;
  text-decoration: none;
  font-weight: bold;
  font-family: UntitledSansRegular;
  color: black;
  @media (max-width: 600px) {
    margin-bottom: 3rem;
  }
`
export const LogoWrapper = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-family: UntitledSansRegular;
  color: black;
  max-height: 2rem;
  width: 12rem;
  margin: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    min-height: 1.25rem;
    max-height: 4rem;
  }
  @media (max-width: 600px) {
   margin: 2rem 2.5rem;
   padding: .5rem;
   img {
     max-height: 3rem;
   }
   :last-child {
     margin-bottom: 3rem;
   }
`



export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const BottomLogo = styled.div`
  width: 100%;
  img {
    width: 10%;
  }
  @media (max-width: 600px) {
   img {
     width: 30%;
     margin-bottom: 3rem;
   }
  }
`
