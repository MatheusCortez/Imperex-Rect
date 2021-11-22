import React from "react"

import * as S from "./styled"
import missoes from "./content"

const Missao = () => (
  <S.MissaoWrapper>
    <S.MissaoTitle>Missao Visao e Valores</S.MissaoTitle>
    {missoes.map((missao, i) => (
      <S.BoxWrapper>
        <S.Box>
          <S.BoxTitle>{missao.label}</S.BoxTitle>
          <S.BoxContent>{missao.description}</S.BoxContent>
        </S.Box>
      </S.BoxWrapper>
    ))}
  </S.MissaoWrapper>
)

export default Missao
