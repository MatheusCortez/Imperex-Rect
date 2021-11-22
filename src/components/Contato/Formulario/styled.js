import styled from "styled-components"
import media from "styled-media-query"

export const FormWrapper = styled.section`

  width: 100vw;
  height: 75vh;
  background-color: #232367;
  padding-bottom: 5rem;

  ${media.lessThan("medium")`

  margin-top:5rem;
  
  `

  }
`
export const Form = styled.form`
  padding-left: 25vw;
  padding-top: 3rem;
  ${media.lessThan("small")`
  padding-top: 1rem;
  padding-left: 3rem;
  `

  }
`

export const InputWrapper = styled.div`
  display: flex;
  width: 50vw;
  flex-wrap: wrap;



  ${media.lessThan("medium")`
  flex-direction: column;
  `

  }
`
export const InputDouble = styled.input`
  margin-top: 1rem;
  outline: none;
  border: none;
  background: #ffff;
  height: 1.8rem;
  
  max-width: 20vw;

  border-radius: 5px;

  &:first-child {
    margin-right: 4rem;
    width: 40vw;
  }
  &:last-child {
    width: 100%;
  }
  &:focus::-webkit-input-placeholder
  {
    color: transparent;
  }

  ${media.lessThan("medium")`
  max-width: 20rem;


  &:first-child {
    margin-right: 0px;
    width: 20rem;
  }

  `

  }

${media.lessThan("small")`
  max-width: 80vw;

  &:first-child {
    margin-right: 0px;
    width: 11rem;
  }
  &:last-child {
    margin-right: 0px;
    width: 11rem;
  }


  `

  }



`
export const AreaForm=styled.textarea`
  resize: none;
  height: 20vh;
  margin-top: 2rem;
  outline: none;
  border: none;
  background: #ffff;
  max-width: 45vw;
  width: 100%;
  border-radius: 5px;

 padding-left: 15px;
 &:focus::-webkit-input-placeholder
  {
    color: transparent;
  }



  ${media.lessThan("medium")`
  max-width: 19rem;
  margin-top: 1rem;

  `

  }

${media.lessThan("small")`
  max-width: 10rem;
  `

  }
`


