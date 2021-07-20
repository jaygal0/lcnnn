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
        {/* //FIXME: Add links once the sites are up */}
        <Link href="/" passHref>
          <ImageWrapper>
            <Image
              src="/pocket-casts.svg"
              layout="fill"
              objectFit="cover"
              alt="pocket casts"
            />
          </ImageWrapper>
        </Link>
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
        <Link href="/" passHref>
          <ImageWrapper>
            <Image
              src="/spotify.svg"
              layout="fill"
              objectFit="cover"
              alt="spotify"
            />
          </ImageWrapper>
        </Link>
        <Link href="/" passHref>
          <ImageWrapper>
            <Image
              src="/google-podcast.svg"
              layout="fill"
              objectFit="cover"
              alt="google podcast"
            />
          </ImageWrapper>
        </Link>
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
