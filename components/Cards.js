import Image from 'next/image'
import Link from 'next/link'
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
  border-radius: ${({ theme }) => theme.borderRadius.small};
  position: relative;
  padding-bottom: 100%;
  background: ${({ theme }) => theme.color.grey};
  margin-bottom: ${({ theme }) => theme.margin.small};
  overflow: hidden;
`
const Title = styled.p`
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 0.8rem;
`
const Subtitle = styled.p`
  text-transform: capitalize;
`

const Cards = ({ title, subtitle, src, url }) => {
  return (
    <Link href={`/${url}`} passHref>
      <Wrapper>
        <ImageWrapper>
          <Image src={src} layout="fill" objectFit="cover" alt={title} />
        </ImageWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Wrapper>
    </Link>
  )
}

export default Cards
