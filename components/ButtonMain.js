import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Btn = styled.button`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  padding: 0.8rem 1.6rem;
  border-radius: 0.5rem;
  margin-top: 2.4rem;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    width: 100%;
  }
`

const ButtonMain = ({ btnLabel, link }) => {
  return (
    <Link href={link}>
      <Btn>{btnLabel}</Btn>
    </Link>
  )
}

export default ButtonMain
