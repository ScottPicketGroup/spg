import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
export const SliderContainer = styled.div`

width: 100%;
background-color: #f9f9f4;

z-index: 100;
`

export const SlideContainer = styled.div`

height: 100%;
width: 100%;
`

export const Image = styled.img`
width: 100%;

`

export const ControlsContainer = styled.div`
width: 100%;
position: relative;
display: flex;
justify-content: flex-end;
margin-top: 1.5rem;
padding-right: 75px;
@media screen and (max-width: 450px) {
    display: none;
} 
`
export const Controls = styled.div`
width: ${props => props.right ? '100%' : '64%'};
display: flex;
justify-content: space-between;
align-items: center;
`

export const ControlButtonContainer = styled.div`
display: inline;
cursor: pointer;

`
export const ControlButton = styled.div`
display: inline;
cursor: pointer;

:first-child {
    margin-right: .75rem;
}
`

export const MobileControls = styled.div`
padding: 1rem 18px 0 18px;
display: flex;
justify-content: space-between;

@media screen and (min-width: 451px) {
    display: none;
}
`

export const SliderImage = styled(GatsbyImage)`
aspect-ratio: 3/2;
display: ${props => props.activeImg === props.id ? 'block' : 'none'};
`