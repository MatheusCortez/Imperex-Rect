import React from "react"

import * as S from "./styled.js"
import MenuDesktop from "./Menu_desktop/index.js"
import MenuMobile from "./Menu_mobile/index"
import useMedia from "../../Hook/useMedia.js"


const Menu = media => {
  const mobile = useMedia("(max-width:48rem)")
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const handleMenu = () => {
    setMobileMenu(!mobileMenu);
    const btnMobile =  window.document.querySelector('#btn_mobile');
    btnMobile.setAttribute('aria-expanded',!mobileMenu)
  }

  return (
    <S.MenuWrapper>
      <S.MobileWrapper>
      {mobile && <S.MenuBtn id="btn_mobile" aria-expanded={false} onClick={handleMenu} className={mobileMenu !=true ?'':'active'}>
      </S.MenuBtn>}
      {mobileMenu && <MenuMobile/>}
      </S.MobileWrapper>
    
      <S.Menu_desktop>
        <MenuDesktop />
      </S.Menu_desktop>
    </S.MenuWrapper>
  )
}

export default Menu
