import styled from "styled-components";
import media from "styled-media-query";

export const footerWrapper=styled.footer`

    background: #232367;
    color:#ffff;
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 25vh;


    ${media.lessThan("medium")`
    margin-top:5rem;

    
    `

    }
    
    ${media.lessThan("small")`
    flex-direction: column;
    padding-top:2rem;
    padding-bottom:2rem;
    `

    }
    
`
export const footerLogo=styled.span`
    padding-right: 5rem;

    ${media.lessThan("small")`
    padding-right: 2rem;
    
    `

    }

`

export const footerContentWrapper=styled.div`

padding-left: 5rem;

${media.lessThan("small")`
    padding:0px;
  


`

}

`

export const footerContent=styled.p`

padding-left: 5rem;
padding-top: 0.5rem;

`