import React, { memo, useState } from 'react'
import logo from '../../assets/images/logo.png'
import menu from '../../assets/images/menu.svg'
import {
  HeaderStyled,
  LogoStyled,
  MenuContentStyled,
  MenuIconStyled,
  MenuStyled,
} from './style'

function Header() {
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    setShow(!show)
  }
  
  return (
    <HeaderStyled>
      <LogoStyled>
        <a href="#">
          <img src={logo} alt="Logo Marvel" width="36px" />
        </a>
      </LogoStyled>

      <MenuContentStyled>
        <MenuIconStyled onClick={toggleMenu} src={menu} width="24px" />
      </MenuContentStyled>

      <MenuStyled show={show}>
        <li>
          <a href="#heroes">Heróis</a>
        </li>
        <li>
          <a href="#comics">HQ's</a>
        </li>
        <li>
          <a href="#movies">Filmes</a>
        </li>
        <li>
          <a href="#games">Jogos</a>
        </li>
        <li>
          <a href="#news">Notícias</a>
        </li>
      </MenuStyled>
    </HeaderStyled>
  )
}

export default memo(Header)