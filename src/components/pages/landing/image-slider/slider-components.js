import styled from 'styled-components'

export const SliderContainer = styled.div`
padding-top: 6.25rem;
width: 100%;
aspect-ratio: 4/3;
background-color: #f9f9f4;

z-index: 100;
`

export const SlideContainer = styled.div`

height: 100%;
width: 100%;
`

export const Image = styled.img`
width: 100%;
aspect-ratio: 4/3;
`

export const ControlsContainer = styled.div`
width: 100%;
position: relative;
display: flex;
background-color: #f9f9f4;
height: 10vh;
@media screen and (max-width: 451px) {
    display: none;
}
`
export const Controls = styled.div`
position: absolute;
right: 0;
padding-right: 81px;
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