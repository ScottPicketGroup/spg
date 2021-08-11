import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FormNew from "../components/pages/contact/ContactForm/ContactFormNew"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
   <FormNew />
  </Layout>
)

export default SecondPage
