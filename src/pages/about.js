import React from 'react'
import Empresa from '../components/Empresa'
import HeaderOtherPages from '../components/Header/Header_otherspage'
import Layout from '../components/layout'
import Seo from "../components/seo"

const AboutPage=()=>(

    <Layout>
        <Seo title="Sobre Nós"/>
       <HeaderOtherPages />
       <Empresa/>
    </Layout>


)


export default AboutPage