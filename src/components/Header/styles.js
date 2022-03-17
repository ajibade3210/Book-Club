import styled from 'styled-components'

export const LogoLink = styled.a`
  text-decoration: none;
`

export const Logo = styled.h1`
  font-size: 2.5em;
  margin: 5px 0;

  @media (max-width: 800px) {
    font-size: 2em;
  }
`

export const HeaderContainer = styled.header`
  background: #ffbccc;
  border-bottom: 2px solid #000;
  padding: 20px 40px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  display: flex;
  position: fixed;
  z-index: 3;

  @media (max-width: 800px) {
    padding: 20px;
  }
`
