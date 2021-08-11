import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FormNew from "../components/pages/contact/ContactForm/ContactFormNew"
import ContactUsForm from "../components/pages/contact/contact-us/ContactUsForm"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
   <ContactUsForm/>
  </Layout>
)

export default SecondPage
