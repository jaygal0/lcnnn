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
`
const ImageWrapper = styled.div`
  position: relative;
  width: calc(100% / 5);
  padding-bottom: 18%;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
`

const Platforms = () => {
  return (
    <SectionGrid>
      <Heading>available on all major platforms</Heading>
      <LogoWrapper>
        {/* //FIXME: Add links once the sites are up */}
        <Link href="/">
          <ImageWrapper>
            <Image src="/pocket-casts.svg" layout="fill" objectFit="cover" />
          </ImageWrapper>
        </Link>
        <Link href="/">
          <ImageWrapper>
            <Image src="/apple-podcast.svg" layout="fill" objectFit="cover" />
          </ImageWrapper>
        </Link>
        <Link href="/">
          <ImageWrapper>
            <Image src="/spotify.svg" layout="fill" objectFit="cover" />
          </ImageWrapper>
        </Link>
        <Link href="/">
          <ImageWrapper>
            <Image src="/google-podcast.svg" layout="fill" objectFit="cover" />
          </ImageWrapper>
        </Link>
        <Link href="/">
          <ImageWrapper>
            <Image src="/overcast.svg" layout="fill" objectFit="cover" />
          </ImageWrapper>
        </Link>
      </LogoWrapper>
    </SectionGrid>
  )
}

export default Platforms
