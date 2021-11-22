import styled from "styled-components"
import media from "styled-media-query"

export const BoxWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  height: 70vh;
  width: 70vw;

  ${media.lessThan("medium")`
  flex-direction: column;
  margin-left:5rem;


  `}
  ${media.lessThan("small")`
  flex-direction: column;
  margin-left:2rem;


  `}
`
export const BoxVertical = styled.div`
  height: 60vh;
  width: 55vw;
  margin-right: 5vw;
  box-shadow: 10px 11px 16px 1px rgba(0, 0, 0, 0.25);

  &:nth-child(1) {
    padding-top: 50px;
    text-align: center;
    font-size: clamp(0.8rem, 0.5rem + 1vw, 1.5rem);
  }

  ${media.lessThan("medium")`
  margin-top:2rem;
  height: 30vh;
  width: 60vw;
  margin-right: 0;

  `}
  ${media.lessThan("small")`
  margin-right: 0;
  margin-top:1rem;
  height: 10vh;
  width: 60vw;
  margin-right: 0;

  &:nth-child(1) {
    padding-top: 0;
    text-align: center;
    font-size: clamp(0.8rem, 0.5rem + 1vw, 1.5rem);
  }
  `}
`

export const BoxHorizontalWrapper = styled.div`
  width: 70vw;
`

export const BoxItem = styled.div`
  width: 50vw;
  height: 20vh;
  margin-top: 2vh;

  box-shadow: 10px 11px 16px 1px rgba(0, 0, 0, 0.25);

  &:nth-child(1) {
    font-size: clamp(0.8rem, 0.5rem + 1vw, 1.5rem);
  }

  ${media.lessThan("medium")`
  margin-top: 0px;
  height: 20vh;
  width: 60vw;
  margin-right: 0;
  
  `}
  ${media.lessThan("small")`
  margin-top: 0px;
  margin-right: 0;
  margin-top:1rem;
  height: 10vh;
  width: 60vw;
  margin-right: 0;
  
  `}
`

export const BoxTitle = styled.h3`
  text-align: center;
  padding: 10px 0;
  font-size: clamp(1.2rem, 0.8rem + 1vw, 2rem);
  color: #232367;
`
export const BoxContent = styled.p`
  ${media.lessThan("small")`
  display: none;
  `}
`
