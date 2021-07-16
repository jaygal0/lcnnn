import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

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
  border-radius: ${({ theme }) => theme.borderRadius.small};
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.white};
    transition: ${({ theme }) => theme.transition.fast};
  }
`

const Navbar = () => {
  const router = useRouter()
  return (
    <Nav>
      <LogoWrapper></LogoWrapper>
      <LinksWrapper>
        <ul>
          <Link href="/episodes">
            <li
              className={`${
                router.pathname == '/episodes' ? 'active' : ''
              } nav`}
            >
              episodes
            </li>
          </Link>
          <Link href="/">
            <CTA className="nav">listen now</CTA>
          </Link>
        </ul>
      </LinksWrapper>
    </Nav>
  )
}

export default Navbar
