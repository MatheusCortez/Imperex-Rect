import styled from "styled-components";
import media from "styled-media-query";

export const PortifolioWrapper=styled.section`
    padding-left: 3rem;



`
export const PortifolioTitle=styled.h1`
margin-top: 2rem;

  color: #232367;
  font-weight: normal;
  font-size: clamp(3.5rem, 2rem + 2vw, 5rem);
  padding-bottom: 2rem;

  ${media.lessThan("medium")`
    font-size: clamp(2rem, 1.5rem + 2vw,3.5rem);
    width: 90vw;
   padding-bottom:2rem;
    line-height: 2.5rem;
    
    `}
    ${media.lessThan("small")`
    font-size: clamp(1.5rem, 1rem + 2vw,2.5rem);
    width: 90vw;
   padding-bottom:2rem;
    line-height: 2.5rem;
    
    `}
`

export const PotifolioSection=styled.section`
padding-left: 10rem;
padding-bottom: 5rem;


${media.lessThan("medium")`
padding-left: 5rem;
padding-bottom: 5rem;
`}

${media.lessThan("small")`
padding-left: 1rem;
padding-bottom: 5rem;
`}
`



export const SectionTitle=styled.h2`
font-size: clamp(1.25rem, 1rem + 2vw, 3rem);
width:30rem;
color: #232367;
  font-weight: normal;
 margin-left: 15rem;


 ${media.lessThan("medium")`
 margin-left: 10rem;
 font-size: clamp(1rem, 1rem + 1vw, 2rem);
`}
 ${media.lessThan("small")`
 font-size: clamp(0.8rem, 0.8rem + 1vw, 1.5rem);
 margin-left: 0;
`}
 
`

export const SectionGalery=styled.section`
  height: 25vh ;
  width: 70vw;
  display: grid;
    grid-template-columns: repeat(3,1fr);
  grid-gap: 1rem;

  ${media.lessThan("small")`
    display: block;


  
  
  `}
    
  
    
    `

