import styled from "styled-components"
import media from "styled-media-query"

export const InputSingle = styled.input`
  outline: none;
  border: none;
  background: #ffff;
  height: 1.8rem;
  max-width:29rem;
  width: 100%;
  border-radius: 5px;
  margin: 0 auto;
 padding-left: 15px;
 &:focus::-webkit-input-placeholder
  {
    color: transparent;
  }



  ${media.lessThan("medium")`
  width: 19rem;

  `

  }

${media.lessThan("small")`
  max-width: 10rem;
  `

  }
`
