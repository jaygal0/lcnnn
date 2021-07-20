import React from 'react'
import styled from 'styled-components'
import ButtonMain from './ButtonMain'
import Newsletter from './Newsletter'

const Container = styled.div`
  grid-column: 3 / span 8;
  margin-bottom: ${({ theme }) => theme.verticleRythmn.desktop};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`
const Heading = styled.h1`
  width: 80%;
`
const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.font.subtitle};
  text-transform: capitalize;
`
const Date = styled.p`
  font-size: ${({ theme }) => theme.font.meta};
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.color.black};
`

const Hero = ({
  title,
  subtitle,
  btnLabel,
  btnPink,
  link,
  newsletter,
  released,
}) => {
  return (
    <Container>
      <Date>{released}</Date>
      <Heading>{title}</Heading>
      <Subtitle>{subtitle}</Subtitle>
      {newsletter ? (
        <Newsletter />
      ) : (
        <ButtonMain btnLabel={btnLabel} link={link} btnPink={btnPink} />
      )}
    </Container>
  )
}

export default Hero
