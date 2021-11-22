import React from "react"

import "./style.css"

import Logo from "../Logo"
import TitleIndex from "./TitleIndex"
import TextIndex from "./TextIndex"

import * as S from "./styled"
import Button from "../Button"
import Menu from "../Menu"


const HeaderIndex = () => (
  <S.HeaderWrapper className="bg">
    <S.HeaderTop>
      <Logo />
      <Menu />
  
    
    </S.HeaderTop>
    <TitleIndex />

    <S.FooterSection>
      <TextIndex />
      <Button />     
    </S.FooterSection>
  </S.HeaderWrapper>
)

export default HeaderIndex
