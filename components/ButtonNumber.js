import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Btn = styled.button`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  padding: 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.desktop.h2};
  height: max-content;
  margin-top: 1.6rem;

  &.placed-side {
    grid-column: 1 / span 1;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakPoint.phoneMedium}) {
    width: 100%;
  }
`

const ButtonNumber = ({ btnLabelNo, link }) => {
  return (
    <Link href={link}>
      <Btn>{btnLabelNo}</Btn>
    </Link>
  )
}

export default ButtonNumber
