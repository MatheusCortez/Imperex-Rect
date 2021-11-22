import styled from "styled-components";
import media from "styled-media-query";

export const Button =styled.button`
 background: linear-gradient(180deg, #3C97D2 0%, #374A91 100%);
    margin-top: 1.5rem;
    margin-left: 3rem;
    max-width: 40vw;
    width: 100%;
    height: 2.5rem;
    color:#FFF;
    outline: none;
    text-transform: capitalize;

    ${media.lessThan("medium")`
    margin-left: 3rem;
    max-width: 15rem;
    `

    }
      ${media.lessThan("small")`
    margin-left:2rem;
    max-width: 8rem;
    `

    }
`
