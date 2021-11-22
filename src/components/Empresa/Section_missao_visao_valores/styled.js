import styled from "styled-components"
import media from "styled-media-query"

export const MissaoWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(2,1fr);

  margin-top: 2rem;
  background: rgba(35, 35, 103, 0.24);
  width: 95vw;
  height: 50vh;
  padding-left: 3rem;


  ${media.lessThan("medium")`
  display: block;
  height: 100%;
  width: 80vw;
  padding-bottom:20px ;
  padding-left:10rem ;

  
  `

  }
   ${media.lessThan("small")`
  display: block;
  height: 100%;
  padding-bottom:20px ;
  width: 95vw;
  padding-left:2rem;

  
  `

  }
`

export const MissaoTitle = styled.h2`
margin-top: 2rem;
grid-column: 2/4;
grid-row: 1/1;
color: #232367;
  font-size: clamp(1.8rem, 1.2rem + 1vw, 2.5rem);


  ${media.lessThan("medium")`
  font-size: clamp(1.5rem, 1rem + 1vw, 2rem);
  padding-bottom: 2rem;
  padding-top: 2rem;
  
  `

  }

`
export const BoxWrapper=styled.section`
margin-left: 2rem;
grid-row: 2;

${media.lessThan("medium")`
  margin: 0;
  
  `

  }

`

export const Box = styled.div`
  margin-bottom: 3rem;
 
  background-color: #fff;
  max-width: 15rem;
  height: 12rem;

  box-shadow: 10px 11px 16px 1px rgba(0, 0, 0, 0.25);
`

export const BoxTitle = styled.h3`
  color: #232367;
  font-size: clamp(1rem, 0.8rem + 1vw, 1.5rem);
  padding-top: 1rem;
  text-align: center;

`

export const BoxContent = styled.p`
  font-size: clamp(0.8rem, 0.5rem + 1vw, 1rem);
  padding: 10px;
  text-align: center;
`
