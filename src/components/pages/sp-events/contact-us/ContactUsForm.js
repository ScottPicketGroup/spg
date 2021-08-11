
import React, { useState } from "react"
import { Button } from "../../../global/GlobalStyles"
import {
  ContactUsFormContainer,
  TixboxContainer,
  ContactDetailsContainer,
  ContactFormRow,
  InputContainer,
  SignUp,
  Input,
  InputMessage,
  Label
} from "./contact-components"
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
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
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


  
  const handleSubmit = e => {
    e.preventDefault()
   const timestamp = Date.now()

   if((   inputs.fName 
    && inputs.sName 
    && inputs.email 
    && inputs.email.includes(".")) || inputs.email.includes("@"))   
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "spevents", ...inputs })
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

     
      
  }
  return (
    <ContactUsFormContainer>
        {!thankyou ? (
            <>
 <SignUp 
 name="spevents" 
 method="post" 
 data-netlify="true" 
 data-netlify-honeypot="bot-field" 
 >

<input type="hidden" name="bot-field" />
<input type="hidden" name="form-name" value="spevents" />

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
      <Label  style={{ marginTop: `1rem`, fontSize: `1rem`}}>
     {1000 - inputs.message.length} characters remaining
    </Label>
     ): error.message ? (<span></span>) : null}
  
   </InputContainer>
   <TixboxContainer >
     <div onClick={() => setInputs(inputs => ({ ...inputs, newsletter: true })) }>
     
    <CheckBox  />
    </div>
       <Label bc2 style={{width: `90%`}}>I would like to receive communications about Scott Pickett Group services, events and matters of relevant interest.</Label>
   </TixboxContainer>
   <Button onClick={handleSubmit} err={error.email} type="submit" width="25%" padding=".75rem 3.5rem">
   SUBMIT
 </Button> 
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

