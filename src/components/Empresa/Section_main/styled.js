import styled from "styled-components"
import media from "styled-media-query"
export const SectionWrapper = styled.section`
  padding-left: 3rem;
`

export const TitleSection = styled.h1`
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
export const ContentSection = styled.article``
