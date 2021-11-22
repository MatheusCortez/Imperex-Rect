import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/style.css'

import HeaderIndex from '../components/Header/HeaderIndex'
import Servicos from '../components/Servicos'


const IndexPage = () => (
  <Layout className="container">
    <Seo title="Home" />
      <HeaderIndex/>
      <Servicos/>
  </Layout>
)

export default IndexPage
