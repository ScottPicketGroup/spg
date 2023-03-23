import styled from "styled-components"
import { BC3 } from "../../components/global/fontStyles"
import { LeftContainer } from "../../components/global/GlobalStyles"
export const InnerContainer = styled.div`
  margin-top: ${props =>
    props.top === true
      ? "1rem"
      : props.theme.name === "Desktop"
      ? "9rem"
      : "6rem"};
  display: ${props => (props.displayBlock === true ? "block" : "flex")};

  width: 100%;
`

export const RightContainer = styled.div`

  margin-top: ${props =>
  props.none ? '0' :
  props.product ? '6rem' :
    props.top === true
      ? "1rem"
      : props.theme.name === "Desktop"
      ? "9rem"
      : "6rem"};
  padding-bottom: ${props => (props.product ? "2rem" : "")};
  display: ${props =>
    props.displayBlock === true
      ? "block"
      : props.device === "Mobile"
      ? "flex"
      : "inline"};
  width: ${props => (props.theme.name === "Desktop" ? "66%" : "100%")};
  justify-content: ${props =>
    props.device === "Mobile" ? "flex-end" : "flex-start"};
  border-bottom: ${props => props.product && `1px solid rgba(51, 51, 51, 25%)`};
  
`
export const FullContainer = styled.div`
  display: ${props => (props.device === "Mobile" ? "flex" : "inline")};
  width: 58%;
  justify-content: ${props =>
    props.device === "Mobile" ? "flex-end" : "flex-start"};
`
export const MenuBtn = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fontFamily.UntitledSansMedium};
  cursor: ${props => (props.link ? "pointer" : "text")};
  &:hover {
    color: ${props =>
      props.link ? props.theme.colors.hoverText : props.theme.colors.text};
  }
`
export const LogoImg = styled.img`
  display: inline;
  padding: ${props => (props.signUp ? "3rem" : "0px")};

  width: ${props =>
    props.signUp ? "275px" : props.theme.name === "Mobile" && "100px"};
`
export const Header1 = styled.h1`
  font-size: ${props => (props.theme.name === "Desktop" ? "64px" : "28px")};
  font-family: ${props => props.theme.fontFamily.Times};
  font-weight: bold;
  line-height: 0.94;
  color: ${props => props.theme.colors.text};
`
export const Header2 = styled.h2`
  font-size: ${props => (props.theme.name === "Desktop" ? "36px" : "1.5rem")};
  margin-bottom: 1rem;
  line-height: ${props => (props.theme.name === "Desktop" ? "" : "1.11")};
  font-family: ${props => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`

export const ProdcutHeader = styled(Header2)`
  margin-top: 1.75rem;
  margin-bottom: 0;
  font-size: 135%;
`
export const BC1 = styled.p`
  margin-top: 3.5rem;
  font-size: ${props => (props.theme.name === "Desktop" ? "36px" : "20px")};
  font-family: ${props => props.theme.fontFamily.UntitledSansLight};
  line-height: 1.22;
  color: ${props => props.theme.colors.text};
  cursor: ${props => (props.link ? "pointer" : "text")};
  &:hover {
    color: ${props =>
      props.link ? props.theme.colors.hoverText : props.theme.colors.text};
  }
`

export const CloseBtn = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.body};
  font-family: ${props => props.theme.fontFamily.UntitledSansMedium};
`
export const MenuHeader = styled.div`
  display: flex;
  width: 100%;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: ${props =>
    props.theme.name === "Desktop" ? "3.5rem 1rem" : "3.5rem 0"};
  align-items: center;
  align-items: start;
   @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  grid-gap: ${props =>
    props.device === "Mobile" ? "6rem 1rem" : "1.5rem 3.25rem"};
  margin-top: ${props => (props.first !== 0 ? "3.25rem" : "")};
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const Item = styled.div`
  padding: 0 0.5rem;
  display: block;
  transition: opacity 0.2s ease-out;
`
export const RestaurantItem = styled.div`
  padding: 0 0.5rem;
  display: block;

  background-image: ${props => `url('${props.src}')`};
  background-repeat: no-repeat;
  background-size: cover;
`
export const ItemImgLink = styled.a`
  margin-top: 0.5rem;
  display: block;
  text-decoration: none;
  font-family: ${props => props.theme.fontFamily.UntitledSansRegular};
  color: #333333;
  &:hover {
    opacity: ${props => (props.link ? 0.5 : 1)};
  }
`
export const ItemImg = styled.div`
  min-height: 250px;
  min-width: 150px;
  background-image: ${props => `url('${props.src}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2.25 rem;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 0.25;
  }
`
export const ItemImgCaption = styled.div`
  margin-top: ${props =>
    props.theme.name === "Desktop" ? "3.5rem" : "1.5rem"};
  font-size: ${props => (props.theme.name === "Desktop" ? "36px" : "20px")};
  font-family: ${props => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  &:hover {
    color: ${props => props.theme.colors.hoverText};
  }
`

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #f9f9f4;
`

export const Footer = styled.div`
  min-height: 100px;
  min-width: 100%;
  padding: 20px;
  background-color: ${props => props.theme.colors.text};
`

export const FooterLogoGrid = styled.div`
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const FooterLogoContainer = styled.div`
  flex: 0 0 200px;
  padding: 1rem;
`
export const FooterLogo = styled.img``

export const ItemExpandElement = styled(BC3)`
  margin-top: 0;
  font-size: 87%;
  padding-left: 0.05rem;
  opacity: 0.9;
  transition: all 0.2 ease-in-out;
  :hover {
    opacity: 1;
    font-size: 90%;
  }
`
export const ItemInfoContainer = styled.div`
  max-height: ${props => (props.element == props.active ? "500px" : "1.3rem")};
  overflow: hidden;
  transition: max-height 0.25s ease-out;
  width: 100%;

  @media (max-width: 450px) {
    margin-top: 0.25rem;
    font-size: 1rem;
    max-height: ${props =>
      props.element === props.active ? "900px" : "1.3rem"};
  }
`

export const SignUpModalContainer = styled.div`
  padding: 0 3.84rem;
  margin-top: ${props => (props.marginTop ? props.marginTop : `0`)};
  position: fixed;
  bottom: 0;
  max-height: ${props => (props.signUp ? "13.5rem" : "0px")};

  display: flex;
  justify-content: space-between;
  overflow: hidden;

  width: 100%;
  background: #333333;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  -webkit-transition: 0.3s;
  transition: 0.3s;

  @media (max-width: 450px) {
    margin-top: 0.25rem;
    font-size: 1rem;
    max-height: ${props => (props.signUp ? "23.5rem" : "0px")};
    height: 180px;
    transition: max-height 0.25s ease-in-out;
  }
`

export const ModalCloseButton = styled.div`
  position: absolute;
  top: 30px;
  right: 10px;
  transform: scale(1.5);
  margin-bottom: 2rem;
  @media (max-width: 450px) {
    position: absolute;
    top: 10px;
    right: -5px;
    transform: scale(0.75);
    margin-bottom: 2rem;
  }
`

export const RightModalContainer = styled(RightContainer)`
  display: flex;
  width: 77%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  margin-top: 0;
  @media (max-width: 450px) {
    width: 100%;
    margin: 0;
    padding: 1.75rem 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`
export const LeftModalContainer = styled(LeftContainer)`
  width: 38%;
  @media (max-width: 450px) {
    display: none;
  }
`

export const IntroWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  @media (max-width: 450px) {
    width: 90%;
  }
`

export const BC1Form = styled(BC1)`
  color: white;
  margin-top: 0;
  font-size: 24px;
  :hover {
    color: white;
  }
  @media (max-width: 450px) {
    font-size: 12px;
    padding-top: 0;
    margin: 0;
  }
`

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid rgba(51, 51, 51, 25%);
  padding-top: 2.25rem;
  padding-bottom: 3.5rem;
  @media screen and (max-width: 450px) {
    border-top: none;
    flex-direction: column;
    padding: 0;
  }
`
