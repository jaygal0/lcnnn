import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

const ImageWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  position: relative;
  padding-bottom: 25%;
  width: 70%;
  margin-bottom: ${({ theme }) => theme.margin.medium};
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    display: none;
  }
`
const TextWrapper = styled.div`
  margin-left: ${({ theme }) => theme.margin.medium};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    margin-left: 0;
    margin-bottom: ${({ theme }) => theme.margin.medium};
  }
`
const Release = styled.p`
  margin-bottom: 0.8rem;
`
const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 0.8rem;
`
const Subtitle = styled.p`
  font-weight: bold;
  margin-bottom: 0.8rem;
  text-transform: capitalize;
`

const CardEpisodes = ({ url, title, subtitle, release, body, src }) => {
  return (
    <Link href={`/${url}`} passHref>
      <CardWrapper>
        <ImageWrapper>
          <Image src={src} layout="fill" objectFit="cover" alt={title} />
        </ImageWrapper>
        <TextWrapper>
          <Release>{release}</Release>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <p>{`${body.substring(0, 210)}...`}</p>
        </TextWrapper>
      </CardWrapper>
    </Link>
  )
}

export default CardEpisodes
