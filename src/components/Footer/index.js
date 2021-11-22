import React from "react";
import Logo from "../Header/Logo";


import * as S from './styled'



const Footer=()=>(
    <S.footerWrapper>
        <S.footerContentWrapper>
            <S.footerContent>
            Imperex Impermeailização e Construção © 2017 - 2021.
            </S.footerContent>
            <S.footerContent>
                 
         Todos os direitos reservados. CNPJ: 29.254.043/0001-85
            </S.footerContent>
        </S.footerContentWrapper>
        <S.footerLogo>
            <Logo/>
        </S.footerLogo>
    </S.footerWrapper>
)

export default Footer