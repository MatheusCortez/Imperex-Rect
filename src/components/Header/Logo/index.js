import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(
          relativePath: { eq: "logo_transparente_superior.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <Img fluid={logoImage.childImageSharp.fluid} style={{ width: "200px" }} />
  )
}

export default Logo
