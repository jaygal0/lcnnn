import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Btn = styled.button`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  padding: 0.8rem 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-top: 2.4rem;

  &.hotpink {
    background-color: ${({ theme }) => theme.color.hotPink};
    color: ${({ theme }) => theme.color.black};
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    width: 100%;
  }
`

const ButtonMain = ({ btnLabel, link, btnPink }) => {
  return (
    <Link href={link}>
      <Btn className={btnPink ? 'hotpink' : null}>{btnLabel}</Btn>
    </Link>
  )
}

export default ButtonMain
