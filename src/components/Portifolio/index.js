import React from "react"
import Galery from "./Galery"

import * as S from "./styled"

const Portifolio= () => (
  <S.PortifolioWrapper>
    <S.PortifolioTitle>Portifólio</S.PortifolioTitle>
    
    <S.PotifolioSection>
      <S.SectionTitle>Impermeabilizações</S.SectionTitle>
      <S.SectionGalery>
          <Galery/>
      </S.SectionGalery>
      <S.SectionTitle>
          Tratamento Anticorrosivo
      </S.SectionTitle>
      <S.SectionGalery>
          <Galery/>
      </S.SectionGalery>
      <S.SectionTitle>
          Elétrica e Manutenção
      </S.SectionTitle>
      <S.SectionGalery>
        <Galery/>
      </S.SectionGalery>

    </S.PotifolioSection>
  </S.PortifolioWrapper>
)
export default Portifolio