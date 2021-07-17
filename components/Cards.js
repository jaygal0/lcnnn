import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 4.5);

  &:hover {
    cursor: pointer;
  }
`
const ImageWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  padding-bottom: 100%;
  background: red;
  margin-bottom: ${({ theme }) => theme.margin.small};
`
const Title = styled.p`
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 0.8rem;
`
const Subtitle = styled.p`
  text-transform: capitalize;
`

const Cards = ({ title, subtitle, src }) => {
  // FIXME: Figure this out. How to set this up properly.
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={src} layout="fill" objectFit="cover" />
      </ImageWrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}

export default Cards
