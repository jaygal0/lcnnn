import React from 'react'
import styled from 'styled-components'
import ButtonMain from './ButtonMain'
import Newsletter from './Newsletter'

const Container = styled.div`
  grid-column: 3 / span 8;
  margin-bottom: ${({ theme }) => theme.verticleRythmn.desktop};
`
const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.font.subtitle};
  text-transform: capitalize;
`

const Hero = ({ title, subtitle, btnLabel, btnPink, link, newsletter }) => {
  return (
    <Container>
      <h1>{title}</h1>
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
