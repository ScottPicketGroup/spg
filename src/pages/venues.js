import React from 'react'
import styled from 'styled-components';
import { Header1 } from '../components/global/fontStyles';
const venues = ({VenuesData}) => {

    console.log(VenuesData.allContentfulVenueIconAndUrl)
    return (
        <PageWrapper>
            <LogoWrapper>
              TO MAIN SITE
            </LogoWrapper>

            <CenterWrapper>

            <Header1>
                List of venues
            </Header1>

            </CenterWrapper>
        </PageWrapper>
    )
}

export default venues

export const VenuesData = graphql`
query venuesList {
    allContentfulVenueIconAndUrl {
      edges {
        node {
          url
          logo {
            gatsbyImageData
            title
          }
        }
      }
    }
  }
  
`

export const PageWrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  
`;

export const TitleWrapper = styled.div`
  
`;



export const BottomLogo = styled.div`
  
`;