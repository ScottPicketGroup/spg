import React from "react"
import styled from "styled-components"
import {

  BC1Form,
  InnerContainer,
  IntroWrapper,
  LeftContainer,
  LeftModalContainer,
  LogoImg,
  ModalCloseButton,
  RightContainer,
  RightModalContainer,
  SignUpModalContainer,
} from "./styled-components"
import { Helmet } from "react-helmet"
import logo from "../../../images/logoWhite.svg"
import { CloseX } from "../../Common/SubMenue"
import CloseButton from "../../Common/CloseButton"
import { BC2, BC1 } from "../../global/fontStyles"
const SignUpModal = ({ setSignUp, signUp }) => {
  const [firstLoad, setFirstLoad] = React.useState(true)

  setTimeout(() => {
    firstLoad && setSignUp(true)
    setFirstLoad(false)
  }, 1000)
  return (
    <SignUpModalContainer signUp={signUp}>
      
      <LeftModalContainer>
        <LogoImg src={logo} signUp />
      </LeftModalContainer>

      <RightModalContainer >
        <IntroWrapper>
          <BC1Form marginTop="sm">
            Subscribe for the latest news, stories and invitations from the
            Scott Pickett Group.
          </BC1Form>
        </IntroWrapper>

        <ExternalForm id="CONTACTA_623c0b66420fd80bf19717eb" />
        <Helmet>
          <script type="text/javascript" async>
            var script = document.createElement("script"); script.type =
            "text/javascript"; script.src =
            "https://forms.contacta.io/623c0b66420fd80bf19717eb.js";
            document.getElementsByTagName("head")[0].appendChild(script);
          </script>
        </Helmet>
        <ModalCloseButton onClick={() => setSignUp(false)}>
          <CloseButton />
        </ModalCloseButton>
      </RightModalContainer>
    </SignUpModalContainer>
  )
}

export default SignUpModal

export const ExternalForm = styled.div`

width: 92.5%;
margin-right: .85rem;
@media (max-width: 450px) {
  width: 100%;
  margin: 0;
  
  }
.submitBtn  {
   button {
    @media (max-width: 450px) {
      float: left;
      font-size: 12px !important;
      padding: .5rem .75rem !important;
      margin-top: 1rem;
        }
     margin-bottom: -2rem;
     border-radius: 1px !important;
     line-height: 1 !important;
    font-family: UntitledSansLight;
    padding: .75rem 1.75rem !important;
    background: transperant !important;
  text-transform: uppercase !important;
  color: white !important;
  font-size: .9rem !important;
   }
  transition: all 0.2s ease-in-out;
  :hover {
    color: white !important; 
  }
 
}
.contacta-webform-table > .contacta-row ~ .contacta-row {
  width: 50% !important;
  margin-bottom: 0;
  @media (max-width: 450px) {
    width: 100% !important;
    margin: 0;
      }
}


.contacta-webform-table .contacta-col {
  padding: 0 !important;
}
:last-child {
  100%;
}

  .checkbox-option {
    margin-top: -0.75rem;
    margin-left: -1rem;
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid black;
    transform: scale(0.4);
    padding: 25px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
  }

  .checkbox-option:checked {
    background-color: #0f231d;
    border: none;
  }

  select {
    :focus {
      outline: none;
      background: transparent;
    }
  }

  .no-full-width {
    font-family: PitchRegular;
    color: black;
  }

  .contacta-webform-table {
    width: 100%;
    table-layout: fixed;
    display: flex;
    flex-wrap: wrap;
  }
.contacta-webform-table .error-msg {
 
  font-size: 12px;
  color: red;
  font-family: UntitledSansLight;
}

  .contacta-row {
    width: 100%;
    margin-bottom: 2.25rem;
    :first-child {
      width: 0;
    }

    :nth-child(5) {
      width: 100%;
    }
    :nth-child(6) {
      width: 100%;
      display: flex;
    }
  }

  .submission-message {
    font-family: PitchRegular;
  }

  .label-option {
    display: flex;
    gap: 1.5rem;
  }
  input {
    @media (max-width: 450px) {
      width: 100% !important;
        }
    height: 2rem;
    background: rgba(255, 255, 255, 0);
    padding: 1.5rem 0;
    font-size: 0.75rem;
    line-height: none;
    border: none;
    border-bottom: 1px solid ${props => (props.err ? "blue !important" : "white")};
    width: 140% !important;
    ::placeholder {
      color: ${props => (props.err ? "#CB0000" : "white")};
      font-size: 1rem;
      margin-bottom: 10rem;
      background: transperant;
      font-family: UntitledSansLight;
      @media (max-width: 450px) {
        font-size: 12px;
          }
    }
    :focus {
      outline: none;
      background: transparent;
      font-family: UntitledSansLight;
      height: 3rem;
      font-size: 150%;
      @media (max-width: 450px) {
        font-size: 12px;
          }
    }
    :valid {
      color: white !important;
      font-size: 1rem;
      background: transperant;
      
      color: black;
      font-family: UntitledSansLight;
      @media (max-width: 450px) {
      font-size: 12px;
        }
    }
    ::-moz-focus-outer {
      color: white;
    }
    @media (max-width: 450px) {
      width: 97% !important;
      margin: 0;
     padding: 0;
      max-width: 100% !important;
      }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  label {
    color: white;
  }
  textarea {
    font-family: PitchRegular;
    width: 100%;
    height: 10rem;
    background: rgba(255, 255, 255, 0);
    border: none;
    padding: 1.5rem 0;
    color: white;
    font-size: 0.75rem;
    line-height: none;
    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "black")};
    overflow: hidden;
    ::placeholder {
      font-family: PitchRegular;

      font-size: 1rem;
      margin-bottom: 10rem;
      color: ${props => (props.err ? "#CB0000" : "black")};
    }
    :focus {
      outline: none;
      background: transparent;
      font-size: 150%;
    }
    :valid {
      color: black;
      font-size: 1rem;
      font-family: PitchRegular;
    }
    ::-moz-focus-outer {
      color: white;
    }
  }

  .contacta-webform-form .valign-wrapper .valign {
    font-family: UntitledSansLight;
    font-size: .9rem !important;
    color: white !important;
    padding-bottom: 3rem;
    @media (max-width: 450px) {
      padding-top: .25rem;
      font-size: 12px !important;
      }
  }
`
