import React from 'react'
import {HeaderContainer, Logo, LogoLink} from './styles'

const Header = ({children}) => (
  <HeaderContainer>
    <LogoLink href="/">
      <Logo>Book Club</Logo>
    </LogoLink>
    {children}
  </HeaderContainer>
)

export default Header
