import React, { useState } from "react"
import styled from "styled-components"


import {
  SignUp,
  Input,
  SignUpSubmit,
  InputMessage,
} from "./subscript-components"
import CheckBox from "./CheckBox"
const ContactFormNew = () => {
  const [error, setError] = useState({
    fName: false
  })


  const [form, setForm] = useState(true)
  const [thankyou, setThankyou] = useState(false)


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
 
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })
  
 
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...inputs })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e => setInputs({ [e.target.name]: e.target.value });
  console.log(inputs)
  return (
<form onSubmit={handleSubmit}>
          <p>
            <label>
              Your Name: <input type="text" name="name" value={inputs.name} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={inputs.email} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={inputs.message} onChange={handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>


  )
}

export default ContactFormNew

export const ContactUsFormContainer = styled.div`
  width: 58%;
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



export const Label = styled.p `
font-size: ${props => props.thankyou ? '1.5rem' : `1.25rem`};
@media screen and (max-width: 450px) {
  font-size: ${props => props.thankyou ? '1rem' : `1.25rem`};
}
`