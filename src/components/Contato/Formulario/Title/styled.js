import styled from "styled-components";
import media from "styled-media-query";

export const TitleContact = styled.h1`
padding-left:25rem;
padding-top: 3rem;
  color: #ffff;
  font-weight: normal;
  font-size: clamp(3.5rem, 2rem + 2vw, 5rem);

  ${media.lessThan("medium")`
    font-size: clamp(2rem, 1.5rem + 2vw,3.5rem);
    width: 90vw; 
   padding-left:20rem;
    line-height: 2rem;
    
    `}
  ${media.lessThan("small")`
  padding-left:5rem;
    font-size: clamp(1.5rem, 1rem + 2vw,2.5rem);
    width: 90vw;
    line-height: 2.5rem;
    
    `}

`