import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Heading, SectionGrid } from '../styles'

const LogoWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 2;
  display: flex;
  gap: 3.2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    flex-wrap: wrap;
    gap: 1.6rem;
    justify-content: space-evenly;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  width: calc(100% / 5);
  padding-bottom: 18%;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    width: calc(100% / 4);
    padding-bottom: 25%;
  }

  &:hover {
    filter: brightness(105%);
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.fast};
  }
`

const Platforms = () => {
  return (
    <SectionGrid>
      <Heading>available on all major platforms</Heading>
      <LogoWrapper>
        <ImageWrapper>
          <a
            href="https://pca.st/9uslwdzr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/pocket-casts.svg"
              layout="fill"
              objectFit="cover"
              alt="pocket casts"
            />
          </a>
        </ImageWrapper>
        <Link href="/" passHref>
          <ImageWrapper>
            <Image
              src="/apple-podcast.svg"
              layout="fill"
              objectFit="cover"
              alt="apple podcast"
            />
          </ImageWrapper>
        </Link>
        <ImageWrapper>
          <a
            href="https://open.spotify.com/show/3NRhPBy3BRL4SyJmD0aEzw"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/spotify.svg"
              layout="fill"
              objectFit="cover"
              alt="spotify"
            />
          </a>
        </ImageWrapper>
        <ImageWrapper>
          <a
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82NGMzZTg1OC9wb2RjYXN0L3Jzcw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/google-podcast.svg"
              layout="fill"
              objectFit="cover"
              alt="google podcast"
            />
          </a>
        </ImageWrapper>
        <Link href="/" passHref>
          <ImageWrapper>
            <Image
              src="/overcast.svg"
              layout="fill"
              objectFit="cover"
              alt="overcast"
            />
          </ImageWrapper>
        </Link>
      </LogoWrapper>
    </SectionGrid>
  )
}

export default Platforms
