import React from "react"

import Input from "./Input"
import ButtonFormulario from './Button'

import * as S from "./styled"
import TitleContato from './Title'

export const Formulario = () => (
  <S.FormWrapper>
      <TitleContato />
    <S.Form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
      <Input placeholder={"Seu Nome"} name="Nome" />
      <S.InputWrapper>
        <S.InputDouble placeholder="Seu Email" tyoe="email" name="Email"   />
        <S.InputDouble placeholder="Seu Telefone" name="telefone"   />
      </S.InputWrapper>
      <S.AreaForm  placeholder="Escreva aqui sua mensagem" name="Mensagem" />
      <ButtonFormulario/>
    </S.Form>
   
  </S.FormWrapper>
)

export default Formulario
