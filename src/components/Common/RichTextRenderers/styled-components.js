import styled from "styled-components"

export const IntroductionRendererContainer = styled.div`
width: ${props => props.product === true && '60%'};
margin-top: ${props =>
    props.sp === "true"
       
      ? "3.5rem"
      : 
      props.textUnderGallery === "true" ? "9rem"
      : "0rem"};
margin-bottom: ${props =>
    props.sp === true
       
      ? "3.5rem"
      
      : "0rem"};
       @media (max-width: 450px) {
    width: ${props => props.product === true && '100%'};
    margin-bottom: ${props => props.product === true && '3rem'};
       }
`;