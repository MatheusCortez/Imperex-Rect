import styled from "styled-components"
import media from "styled-media-query"
export const ServicosWrapper = styled.section`
  padding-top: 4rem;
  padding-left: 8vw;
  width: auto;
`

export const ServicosTitle = styled.h2`
  color: #232367;

  font-size: clamp(3.5rem, 2rem + 2vw, 5rem);
  width: 80vw;
  line-height: 4rem;

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
