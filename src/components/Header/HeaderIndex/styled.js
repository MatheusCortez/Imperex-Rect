import styled from "styled-components"
import media from "styled-media-query"
export const HeaderWrapper = styled.section`
  height: 80vh;
  width: 99vw;
`

export const HeaderTop = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`

export const FooterSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 5rem 1rem 0 2rem;

  ${media.lessThan("medium")`
        padding-left:10rem;
        flex-direction:column;
    `}
  ${media.lessThan("small")`
        padding-left:10%;
        flex-direction:column;
    `}
`
