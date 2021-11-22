import React from 'react'
import Layout from '../components/layout'
import HeaderOtherPages from '../components/Header/Header_otherspage'
import Seo from "../components/seo"
import Portifolio from '../components/Portifolio'
const PortifolioPage=()=>(

<Layout>
<Seo title="Portifolio"/>
   <HeaderOtherPages />
    <Portifolio />
    </Layout>
)

export default PortifolioPage