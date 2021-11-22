import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderOtherPages from "../components/Header/Header_otherspage"
import   Formulario  from "../components/Contato/Formulario"
const ContactPage = () => (
  <Layout>
    <Seo title="Contato"/>
    <HeaderOtherPages />
    <Formulario/>
   
  </Layout>
)

export default ContactPage
