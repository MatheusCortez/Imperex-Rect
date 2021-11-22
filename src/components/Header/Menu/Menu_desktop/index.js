import React from "react"
import links from "../content"
import * as S from "./styled"
const MenuDesktop = () => (
  <S.MenuWrapper>
    <S.MenuList>
      {links.map((link, i) => (
        <S.MenuItem key={i}>
          <S.MenuLink cover direction="right" bg="#232367" duration={0.6}  to={link.url}>{link.label}</S.MenuLink>
        </S.MenuItem>
      ))}
    </S.MenuList>
  </S.MenuWrapper>
)

export default MenuDesktop
