import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavigationItem = ({ to, children }) => (
  <NavLink to="/" activeStyle={{ fontWeight: 'bold' }}>
    {children}
  </NavLink>
)

const Header = ({ children }) => {
  return (
    <Wrapper>
      <Logo>My Cool Project</Logo>
      <nav>
        <NavigationItem to="/">Home</NavigationItem>
        <NavigationItem to="/about">About</NavigationItem>
        <NavigationItem to="/contact">Contact</NavigationItem>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
`

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 3px;
`

const Nav = styled.nav``

export default Header
