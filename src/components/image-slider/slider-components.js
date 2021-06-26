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
`
export const Controls = styled.div`
position: absolute;
right: 0;
padding-right: 81px;
display: flex;
@media screen and (max-width: 450px) {
    display: none;
} 
`

export const ControlButton = styled.div`
margin-top: 2.25rem;
margin-bottom: 2.25rem;
cursor: pointer;
:first-child {
    margin-right: 1rem;
}
`