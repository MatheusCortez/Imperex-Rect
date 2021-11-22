import styled from "styled-components"
import media from "styled-media-query"

export const title = styled.h1`
  color: #ffff;
  font-size: clamp(1.5rem, 1rem + 2vw, 3rem);
  margin-top: 10vh;
  font-weight: 500;
  line-height: 3rem;
  padding-left: 2rem;
  width: 15rem;

  ${media.between("small","large")`
    font-size: clamp(1.5rem, 0.8rem + 1vw,2rem);
    margin-top: 5vh;
    line-height: 2rem;
    padding-left: 12rem;
    width: 25rem;
    `}

  ${media.lessThan("small")`
    font-size: clamp(0.8rem, 1.5rem + 1vw,2rem);
    margin-top: 5vh;
    line-height: 1.5rem;
    padding-left:20% ;
    width: 10rem;
    
    `}
`
