import styled from "styled-components"
import media from "styled-media-query"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const MenuWrapper = styled.nav``

export const MenuList = styled.ul`
  margin-right: 2rem;
  display: flex;
  border: none;
  border-bottom: 1px solid #ffff;

  ${media.lessThan("medium")`
        display: none;
    `}
`

export const MenuItem = styled.li`
  color: #ffff;

  text-transform: uppercase;
  font-size: 1rem;
`

export const MenuLink = styled(AniLink)`
  color: #ffff;
  text-decoration: none;
  padding: 0 15px;

  &:active {
    border: none;
  }
`
