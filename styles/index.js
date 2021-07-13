import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  margin: 3.2rem auto;
  margin-bottom: 9.6rem;
  max-width: 128rem;
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    margin-bottom: 4.8rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
  }
`

