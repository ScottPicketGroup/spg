import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
const ContactFormSproutSend = () => {
  return (
    <div>
       <ExternalForm id="CONTACTA_62543a6a384e6b500a7d09fc" />

      <Helmet>
        <script type="text/javascript" async>
          var script = document.createElement("script"); script.type =
          "text/javascript"; script.src =
          "https://forms.contacta.io/62543a6a384e6b500a7d09fc.js";
          document.getElementsByTagName("head")[0].appendChild(script);
        </script>
      </Helmet>
    </div>
  )
}

export default ContactFormSproutSend

export const ExternalForm = styled.div`
  .checkbox-option {
    margin-top: -0.75rem;
    margin-left: -1rem;
    -webkit-appearance: none;
    background-color: transparent;
    border: 2.5px solid #333333;
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

  .contacta-webform-table .contacta-row,
  .contacta-webform-table .contacta-col {
    @media screen and (max-width: 450px) {
      flex-direction: column;
      padding: 0;
    }
  }
  .iti__selected-flag {
    @media screen and (max-width: 450px) {
      padding: 0;
    }
  }
  .iti--allow-dropdown input,
  .iti--allow-dropdown input[type="tel"],
  .iti--allow-dropdown input[type="text"],
  .iti--separate-dial-code input,
  .iti--separate-dial-code input[type="tel"],
  .iti--separate-dial-code input[type="text"] {
    m@media screen and (max-width: 450px) {
      padding-left: 40px;
    }
  }

  .contacta-webform-table .contacta-row,
  .contacta-webform-table .contacta-col {
    @media (max-width: 768px) {
      display: block;
      margin-top: 10px;
    //   margin-bottom: 1.25rem;
    }
  }

  .contacta-webform-table .error-msg {
    color: red;
    font-family: inherit;
    font-family: UntitledSansRegular;
  }

  .contacta-webform-table label:not(.no-full-width),
  .hXhshN .contacta-webform-table .heading,
  .hXhshN .contacta-webform-table .description {
    width: 100%;
    word-wrap: break-word;
    font-family: UntitledSansRegular;

    font-size: 1rem;
    font-family: UntitledSansRegular;
    line-height: 1.2;
    color: #333333;
    cursor: text;
    -webkit-transition: color 2s ease-out;
    transition: color 2s ease-out;
  }
  .contacta-webform-table {
    width: 100%;
    table-layout: fixed;
    display: flex;
    flex-wrap: wrap;
  }

  .contacta-row {
    width: 50%;
    margin-bottom: 2.25rem;
    :first-child {
      width: 0;
      margin: 0;
    }

    :nth-child(5) {
      width: 100%;
    }
    :nth-child(6) {
      width: 100%;
      display: flex;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
      margin: 0;
    }
  }

  .label-option {
    display: flex;
    gap: 1.5rem;
  }
  input {
    height: 2rem;
    background: rgba(255, 255, 255, 0);
    border: none;
    padding: 1.5rem 0;
    font-size: 0.75rem;
    line-height: none;
    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "#333333")};
    ::placeholder {
      color: ${props => (props.err ? "#CB0000" : "#B1B1B1")};
      font-size: 1rem;
      margin-bottom: 10rem;
      background: transperant;
      font-family: UntitledSansLight;
    }
    :focus {
      outline: none;
      background: transparent;
      font-family: UntitledSansLight;
      height: 3rem;
      font-size: 150%;
    }
    :valid {
      color: #333333;
      font-size: 1rem;
      background: transperant;
      font-family: UntitledSansLight;
      width: 12px;
    }
    ::-moz-focus-outer {
      color: #333333;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  label {
    color: #333333;
  }
  textarea {
    font-family: UntitledSansLight;
    width: 100%;
    height: 10rem;
    background: rgba(255, 255, 255, 0);
    border: none;
    padding: 1.5rem 0;
    color: #333333;
    font-size: 0.75rem;
    line-height: none;
    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "#B1B1B1")};
    overflow: hidden;
    ::placeholder {
      font-family: UntitledSansLight;

      font-size: 1rem;
      margin-bottom: 10rem;
      color: ${props => (props.err ? "#CB0000" : "#B1B1B1")};
    }
    :focus {
      outline: none;
      background: transparent;

      height: 3rem;
      font-size: 150%;
    }
    :valid {
      color: #333333;
      font-size: 1rem;
      font-family: Arial, Helvetica, sans-serif;
    }
    ::-moz-focus-outer {
      color: #333333;
    }
  }
  .contacta-webform-table label:not(.no-full-width),
  .contacta-webform-table .heading,
  .contacta-webform-table .description {
    width: 100%;
    word-wrap: break-word;
    font-family: UntitledSansRegular;
  }

  .contacta-webform-table .label-option {
    vertical-align: middle;
    word-break: break-word;
    font-family: UntitledSansRegular;
  }

  button .btn,
  .btn-primary {
    font-family: UntitledSansLight;
    font-size: 1rem !important;
    background: transparent !important;
    text-transform: uppercase !important;
    line-height: 46px !important;
    border-radius: 0px !important;
    border: 1px solid #333333;
    width: 225px !important;
    color: #333333;
    padding: 0rem 2.75rem !important;
    transition: all 0.2s ease-in-out;
    :hover {
      color: #f9f9f4 !important;
      background: #333333 !important;
    }
  }
  .submission-message .valign{
    font-family: UntitledSansRegular;
    font-size: 1.25rem !important;
    color: #333333;
  }
`
