import React from 'react'

import Logo from '../Logo'
import Menu from '../Menu'
import './style.css'
import * as S from './styled'

const HeaderOtherPages=()=>(
    <S.HeaderOtWrapper className="bgOT">
        <S.HeaderTop>
        <Logo/>
        <Menu />

        </S.HeaderTop>
        
    </S.HeaderOtWrapper>
)

export default HeaderOtherPages