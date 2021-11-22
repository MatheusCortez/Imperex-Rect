import React from "react"

import * as S from "./styled"
import servicos from "./content"
const Box = () => (
  <S.BoxWrapper>
    <S.BoxVertical>
      <S.BoxTitle>Impermeabilização</S.BoxTitle>
      <S.BoxContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
        nibh id nulla consectetur tempus. Fusce eget diam quis tellus.
      </S.BoxContent>
    </S.BoxVertical>

    <S.BoxHorizontalWrapper>
      {servicos.map((servico, i) => (
        <S.BoxItem key={i}>
          <S.BoxTitle>{servico.label}</S.BoxTitle>

          <S.BoxContent>{servico.description}</S.BoxContent>
        </S.BoxItem>
      ))}
    </S.BoxHorizontalWrapper>
  </S.BoxWrapper>
)
export default Box
