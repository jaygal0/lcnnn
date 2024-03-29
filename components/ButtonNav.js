import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Btn = styled.button`
  background-color: ${({ theme }) => theme.color.blue};
  padding: 0.8rem 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  text-transform: uppercase;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    width: 100%;
  }
`

const ButtonNav = ({ btnLabel, link }) => {
  return (
    <Link href={link} passHref>
      <Btn>{btnLabel}</Btn>
    </Link>
  )
}

export default ButtonNav
