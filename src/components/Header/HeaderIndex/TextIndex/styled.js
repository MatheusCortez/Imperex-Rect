import styled from "styled-components"
import media from "styled-media-query"

export const TextWrapper = styled.article`
  display: flex;
  flex-direction: column;
`

export const TextPhrase = styled.p`
  color: #ffff;
  font-size: clamp(0.8rem, 0.8rem + 1vw, 1.5rem);

  &:nth-child(2) {
    margin-left: 30%;
  }

  ${media.lessThan("medium")`
    &:nth-child(2){
        margin-left: 0;
        margin-top:1rem
    }
    `}
`
