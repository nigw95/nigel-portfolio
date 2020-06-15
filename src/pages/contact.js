import React from "react"

import ContactMe from "../components/contactme"
import Layout from "../components/layout"

import { Helmet } from "react-helmet"

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <title>NigelW.tech | Contact </title>
      </Helmet>
      <ContactMe></ContactMe>
    </Layout>
  )
}
