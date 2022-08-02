import React, { useState } from "react"
import {
  Button,
  Item,
  Menu,
  MenuHeading,
  MenuItem,
  SubMenuHeading,
  Input,
} from "./Footer"
import styled from "styled-components"
import { BC2 } from "../../global/fontStyles"

const SubscribeForm = ({ theme }) => {
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState(false)
  const [signUp, setSignup] = useState(true)

  const handleChange = event => {
    setEmail(event.target.value)
    !email.includes(".") || !email.includes("@")
      ? setEmailErr(true)
      : setEmailErr(false)
    console.log("email", email)
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(email)
    const timestamp = Date.now()
    if ((email && email.includes(".")) || email.includes("@")) {
      let myHeaders = new Headers()
      myHeaders.append(
        "Authorization",
        "Bearer 25183d2e-1266-4207-a9d3-a5d9422d94b0"
      )
      myHeaders.append("Timestamp", { timestamp })
      myHeaders.append("Content-Type", "application/json")

      let raw = JSON.stringify({
        data: {
          email: email,
          tags: ["ScottPicketFooterSignup"],
        },
      })

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }

      fetch("https://api.sproutsend.com/contacts?", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .then(setSignup(false))

        .catch(error => console.log("error", error))
    } else {
      setEmailErr(true)
    }
  }

  return (
    <Item theme={theme}>
      {signUp ? (
        <Menu theme={theme}>
          <MenuHeading theme={theme}>Subscribe</MenuHeading>
          <MenuItem theme={theme}>
            Sign up for updates from the Scott Pickett Group and to be the first
            to know about events, new venues, collaborations and more.
          </MenuItem>
          <SubMenuHeading theme={theme}>EMAIL ADDRESS</SubMenuHeading>
          <form onSubmit={handleSubmit}>
            <StyledInput
              placeholder="Please enter your email address"
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
              err={emailErr}
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </Menu>
      ) : (
        <>
          <BC2 
          style={{
              color: 'white'
          }}
          >Thank you</BC2>
          <BC2
          style={{
            color: 'white'
        }}
          >You are now signed up to our mailing list.</BC2>
        </>
      )}{" "}
    </Item>
  )
}

export default SubscribeForm

const StyledInput = styled.input`
  color: ${props => props.theme.colors.body};
  background: ${props => props.theme.colors.text};
  border-bottom: ${props => `1px solid ${props.theme.colors.body}`};
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0.5rem 0;
  width: 100%;
  ::placeholder {
    color: ${props => props.theme.colors.body};
  }
`
