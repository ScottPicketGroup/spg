import { number } from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"


import {
  SignUp,
  Input,
  SignUpSubmit,
  InputMessage,
} from "./subscript-components"
import CheckBox from "./CheckBox"
const ContactUsForm = () => {
  const [error, setError] = useState({
    fName: false
  })
  const [inputs, setInputs] = useState({
    fName: "",
    sName: "",
    email: "",
    number: "",
    message: "",
    messageLength: 0,
    newsletter: false,
  })

  const [form, setForm] = useState(true)
  const [thankyou, setThankyou] = useState(false)
  const handleChange = e => {
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
    
 
    !inputs.email.includes(".") || !inputs.email.includes("@") 
      ? setError(error => ({ ...error, email: true}) )
      : setError(error => ({ ...error, email: false}) )

  }

  const checkForm = () => {
    
    !inputs.fName ? setError(error => ({ ...error, fName: true}) )
    : setError(error => ({ ...error, fName: false}) )
    inputs.sName.length === 0 ? setError(error => ({ ...error, sName: true}) )
    : setError(error => ({ ...error, sName: false}) )
    inputs.email.length === 0 || !inputs.email.includes(".") || !inputs.email.includes("@") ? setError(error => ({ ...error, email: true}) )
    : setError(error => ({ ...error, email: false}) )
    inputs.number.length === 0 ? setError(error => ({ ...error, number: true}) )
    : setError(error => ({ ...error, number: false}) )
    inputs.message.length === 0 ? setError(error => ({ ...error, message: true}) )
    : setError(error => ({ ...error, message: false}) )
  }

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  
  const handleSubmit = e => {
   const timestamp = Date.now()
   checkForm()
   if((   inputs.fName 
    && inputs.sName 
    && inputs.email 
    && inputs.email.includes(".")) || inputs.email.includes("@"))   
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...inputs })
    })
      .then(
     
          setThankyou(true)
     

      )
      .catch(error => alert(error));
    
      if ( inputs.newsletter === true && (inputs.email && inputs.email.includes(".")) || inputs.email.includes("@")) {
        var myHeaders = new Headers()
        myHeaders.append(
          "Authorization",
          "Bearer 25183d2e-1266-4207-a9d3-a5d9422d94b0"
        )
        myHeaders.append("Timestamp", {timestamp})
        myHeaders.append("Content-Type", "application/json")
  
        var raw = JSON.stringify({
          data: {
            email: inputs.email,
          },
        })
  
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        }
  
        fetch("https://api.sproutsend.com/contacts?", requestOptions)
          .then(response => response.json())
          .then(result => console.log('result', result))
       
  
          .catch(error => console.log("error", error))
      } 

      e.preventDefault()
      
  }
  return (
    <ContactUsFormContainer>
        {!thankyou ? (
            <>
 <SignUp 
 name="contact" 
 method="post" 
 data-netlify="true" 
 data-netlify-honeypot="bot-field" 
 >

<input type="hidden" name="bot-field" />
<input type="hidden" name="form-name" value="contact" />

 <ContactDetailsContainer>
     <ContactFormRow>
     <InputContainer>
     <Label>NAME</Label>
     <Input
       placeholder="Please enter your first name"
       name="fName"
       type="text"
       value={inputs.fName}
       onChange={handleChange}
       err={error.fName}
     />
     
   </InputContainer>
   <InputContainer>
     <Label>SURNAME</Label>
     <Input
       placeholder="Please enter your surname"
       name="sName"
       type="text"
       value={inputs.sName}
       onChange={handleChange}
       err={error.sName}
     />
    
   </InputContainer>
     </ContactFormRow>
     <ContactFormRow>
     <InputContainer>
     <Label>EMAIL ADDRESS</Label>
     <Input
       placeholder="Please enter your email address"
       name="email"
       type="text"
       value={inputs.email}
       onChange={handleChange}
       err={error.email}
     />
    
   </InputContainer>
   <InputContainer>
     <Label>CONTACT NUMBER</Label>
     <Input
       placeholder="Please enter your contact number"
       name="number"
       type="text"
       value={inputs.number}
       onChange={handleChange}
       err={error.number}
     />
    
   </InputContainer>
     </ContactFormRow>
   

 <InputContainer>
     <Label>MESSAGE</Label>
     <InputMessage
       placeholder="Please enter your enquiry (1000 characters remaining)"
       name="message"
       type="text"
       value={inputs.message}
       onChange={handleChange}
       err={error.message}
       scroll="disable"
     />
     {inputs.message.length >=1 ? (
      <p  style={{ marginTop: `1rem`, fontSize: `1rem`}}>
     {1000 - inputs.message.length} characters remaining
    </p>
     ): error.message ? (<span></span>) : null}
  
   </InputContainer>
   <TixboxContainer >
     <div onClick={() => setInputs(inputs => ({ ...inputs, newsletter: true })) }>
     
    <CheckBox  />
    </div>
       <Label bc2 style={{width: `90%`}}>I would like to receive communications about Scott Pickett Group services, events and matters of relevant interest.</Label>
   </TixboxContainer>
   <SignUpSubmit onClick={handleSubmit} err={error.email} type="submit">
   SUBMIT
 </SignUpSubmit> 
 </ContactDetailsContainer>



</SignUp>

 </>
        ) :
        (
            <>
            <Label thankyou> Thank you for submitting your enquirey.</Label>
            <Label thankyou> A member of our staff will be in contact shortly.</Label>
            </>
        )
        }
     
    
    </ContactUsFormContainer>
  )
}

export default ContactUsForm

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