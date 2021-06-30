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
background-color: #f9f9f4;
@media screen and (max-width: 450px) {
    display: none;
} 
`
export const Controls = styled.div`
position: absolute;
right: 0;
display: flex;

`

export const ControlButton = styled.div`
margin-top: 2.25rem;
margin-bottom: 2.25rem;
cursor: pointer;
:first-child {
    margin-right: 1rem;
}
`

export const MobileControls = styled.div`
padding: 1rem 18px 0 18px;
float: right;
margin-bottom: -12rem;
@media screen and (min-width: 451px) {
    display: none;
}
`

export const SliderImage = styled(GatsbyImage)`
aspect-ratio: 3/2;
display: ${props => props.activeImg === props.id ? 'block' : 'none'};
`