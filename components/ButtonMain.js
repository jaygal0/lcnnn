import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Btn = styled.button`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  padding: 0.8rem 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-top: 2.4rem;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast};
  }

  &.width {
    @media screen and (max-width: ${({ theme }) =>
        theme.breakPoint.phoneLarge}) {
      width: 40%;
    }
  }

  &.hotpink {
    background-color: ${({ theme }) => theme.color.hotPink};
    color: ${({ theme }) => theme.color.black};

    &:hover {
      filter: brightness(110%);
      cursor: pointer;
      transition: ${({ theme }) => theme.transition.fast};
    }
  }

  &.no-margin {
    margin-top: 0;
    @media screen and (max-width: ${({ theme }) =>
        theme.breakPoint.phoneLarge}) {
      width: 40%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    width: 100%;
  }
`

const ButtonMain = ({ btnLabel, link, btnPink, noMargin, width }) => {
  return (
    <Link href={link} passHref>
      <Btn className={btnPink ? 'hotpink' : noMargin ? 'no-margin' : null}>
        {btnLabel}
      </Btn>
    </Link>
  )
}

export default ButtonMain
