import styled from 'styled-components'
import { BC1 } from "../../../global/GlobalStyles"
export const ContactUsFormContainer = styled.div`

margin-bottom: 6.75rem;
@media screen and (max-width: 800px) {
  width: 100%;
}
`

export const ContactDetailsContainer = styled.div`
display: flex;
flex-direction: column;
min-width: 100%;
padding: 0;
`
export const ContactFormRow = styled.div`
min-width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-bottom: 2.25rem;
@media screen and (max-width: 450px) {
margin-bottom: 0;
}
`
export const InputContainer = styled.div`
min-width: 48%;
background: transperant;
@media screen and (max-width: 800px) {
  width: 100%;
  margin-bottom: 1.25rem;
}
`
export const TixboxContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 2.25rem;
margin-bottom: 1.75rem;
`



export const Label = styled.p`
margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : `.5rem`)};
font-size: ${(props) => (props.theme.name === "Desktop" ? "14pt" : "1rem")};
font-family: ${(props) => props.theme.fontFamily.UntitledSansRegular};
line-height: 1.2;
color: ${(props) => props.theme.colors.text};
cursor: ${(props) => (props.link ? "pointer" : "text")};
transition: color 2s ease-out;
li {
  list-style-type: none;
}

&:hover {
  color: ${(props) =>
    props.link ? props.theme.colors.hoverText : props.theme.colors.text};
}
`;


export const SubContainer = styled.div`
width: 100%;

overflow: visible;
margin-top: 1rem;
p {
  font-size: 1rem;
}
`

export const SignUp = styled.form`
font-size: 1.25rem;

@media screen and (max-width: 450px) {
font-size: 0.75rem;
}

display: flex;

`
export const Input = styled.input `
width: 100%;
height: 2rem;
background: rgba(255,255,255,0);
border: none;
padding: 1.5rem 0;
font-size: 0.75rem;
line-height: none;
border-bottom: 1px solid ${props => props.err ? '#CB0000' : '#153e35'};
::placeholder {
  color: ${props => props.err ? '#CB0000' : 'rgba(21, 62, 53, 50%)'};
  font-size: 1rem;
  margin-bottom: 10rem;
  background: transperant;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
}
:focus {
  outline: none;
  background: transparent;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  height: 3rem;
  font-size: 150%;
}
:valid {
  font-size: 1rem;
  background: transperant;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
}
::-moz-focus-outer {
  color: white;
}
@media screen and (max-width: 450px) {
  width: 100%;
}
`

export const InputMessage = styled.textarea `
width: 100%;
height: 10rem;
background: rgba(255,255,255,0);
border: none;
padding: 1.5rem 0;
font-size: 0.75rem;
line-height: none;
border-bottom: 1px solid ${props => props.err ? '#CB0000' : '#153e35'};
overflow: hidden;

::placeholder {

  font-size: 1rem;
  margin-bottom: 10rem;
  color: ${props => props.err ? '#CB0000' : 'rgba(21, 62, 53, 50%)'}
}
:focus {
  outline: none;
  background: transparent;
  
  height: 3rem;
  font-size: 150%;
}
:valid {
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
::-moz-focus-outer {
  color: white;
}
`

export const SignUpSubmit = styled.button`
background: none;
height: 46px;
font-family: tTNormsProNormal;
padding: 0.5rem 2.5rem;
border: 1px solid ${props => props.err ? 'red' : '#153e35'};
color: ${props => props.err ? 'red' : '#153e35'};
margin-top: 1.75rem;
font-size: 1rem;
transition: all 0.2s ease;
width: 13rem;
:hover {
  opacity: 75%;
  background: ${props => props.err ? 'red' : '#153e35'};
  color: ${props => props.err ? 'white' : 'white'};
} 
p {
  font-family: tTNormsPro;
}
`
