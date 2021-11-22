import styled from "styled-components";
import { Link } from "gatsby";
import media from "styled-media-query";


export const MenuWrapper=styled.nav`
    background-color: #020056E8;
    width: 10rem;
    height: 65vh;
    padding-top: 50px;
    z-index:2;
    padding-right: 0px;
    position:absolute;

    ${media.lessThan("small")`
    width: 6rem;
    padding-right: 15vw;
    `

    }
   
    
`

export const MenuList=styled.ul`
   padding-right: 10px;
`

export const MenuItem=styled.li`
   padding-right: 10px;
   margin-top: 1rem;
   border-bottom: 1px solid white;

`
export const MenuLink = styled(Link)`
    text-transform: capitalize;
    padding-left: 5px;
    padding-right: 10px;
    text-decoration: none;
    color:#ffff;

`


