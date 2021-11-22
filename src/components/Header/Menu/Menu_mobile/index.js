import React from "react";

import * as S from './styled'
import links from '../content'

const MenuMobile=()=>{


    return (
    <S.MenuWrapper>
        <S.MenuList>
            {links.map((link,i)=>(
                <S.MenuItem key={i}>
                     <S.MenuLink  to={link.url}>{link.label}</S.MenuLink>
                </S.MenuItem>
            ))}
        </S.MenuList>
    </S.MenuWrapper>


    )
}
export default MenuMobile