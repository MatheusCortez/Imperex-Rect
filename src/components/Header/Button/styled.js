import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"
export const Button = styled.button`
  background: linear-gradient(180deg, #3c97d2 0%, #374a91 100%);
  margin-top: 4rem;
  width: 15rem;
  height: 4rem;
  color: #fff;
  outline: none;
  text-transform: capitalize;

  ${media.lessThan("medium")`
    margin-top: 2rem;
    width:20rem;
    height: 3rem;
    margin-left:2rem;
    `}
  ${media.lessThan("medium")`
    margin-top: 2rem;
    width:50vw;
    height: 3rem;
    margin-left:2rem;
    `}
`
export const ButtonLink = styled(Link)``
