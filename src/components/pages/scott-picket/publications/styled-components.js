import styled from 'styled-components'

export const TimeLineGrid = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid rgba(51, 51, 51, 25%);
 padding-top: 2.25rem;
 padding-bottom: 3.5rem;
 @media screen and (max-width: 450px) {
   border-top: none;
   flex-direction: column;
 }
`;
export const LeftGrid = styled.div`
  padding: 0 1.5rem 0 0.5rem;

  width: 37.5%;
  @media screen and (max-width: 450px) {
   padding-bottom: 1.5rem;
 }
`;
export const RightGrid = styled.div`
  padding: 0 0.5rem;
  
  width: 62.5%;
`;

export const GridImg = styled.div`
  display: inline;
`;

export const EventImageContainer = styled.div`
  display: inline;
  width: 100%;
`;
export const EventImageView = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
`;

export const EventImageDiv = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  background-image: ${(props) => `url('${props.src}')`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.text};
  margin: 2.62rem 0;
  padding: 0.5em 3.5rem;
  background-color: ${(props) => props.theme.colors.body};
  border: ${(props) => `1px solid ${props.theme.colors.text}`};
  text-transform: uppercase;
  transition: all .2s ease-out;
  &:hover {
    background-color: #333333;
    color: #F9F9F4;
  }
`;
