import React from 'react'
import styled from 'styled-components'
import { SectionFlex } from '../styles'

const Nav = styled.nav`
  grid-column: 2 / span 10;
  height: min-content;
  display: flex;
  justify-content: space-between;
`
const LogoWrapper = styled.div``
const LinksWrapper = styled.div``
const CTA = styled.li`
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme }) => theme.color.hotPink};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-transform: uppercase;
`

const Navbar = () => {
  return (
    <Nav>
      <LogoWrapper></LogoWrapper>
      <LinksWrapper>
        <ul>
          <li>episodes</li>
          <CTA>listen now</CTA>
        </ul>
      </LinksWrapper>
    </Nav>
  )
}

export default Navbar
