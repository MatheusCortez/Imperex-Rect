import styled from "styled-components"

import media from "styled-media-query"

export const MenuWrapper = styled.nav``


export const MobileWrapper=styled.div`
  display: flex;
  margin-right: 4rem;



`

export const MenuBtn = styled.span`
z-index: 3;
display: block;
margin-left: 5rem;
background: transparent;
 width: 20px;
 border-top: 2px solid;
 padding: 0px;
 color:white;

  &::after,&::before{
    content: '';
    height: 2px;
    width:20px;
    background: currentColor;
    display: block;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
   
  }
  &.active{
     border-top-color:transparent ;
    }
    &.active::after{
     transform: rotate(135deg);
     top:-7px
    }
    &.active::before{
     transform: rotate(-135deg);
    }

`

export const Menu_desktop = styled.nav`
  ${media.lessThan("medium")`
        display: none;
    `}
`
export const Menu_mobile = styled.nav`
  display: none;

  ${media.lessThan("medium")`
        display: block;
    `}

`

   