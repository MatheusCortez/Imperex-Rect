import * as React from "react"
import GlobalStyles from '../styles/global'
import Footer from "./Footer"



const Layout = ({ children }) => {


  return (
    <>
        <GlobalStyles />
        <main>{children}</main>
        <Footer />
    </>
  )
}


export default Layout
