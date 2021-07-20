import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import AudioBar from './AudioBar'

const AudioWrapper = styled.div`
  width: 100%;
  display: flex;
  height: min-content;
  background-color: ${({ theme }) => theme.color.pink};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 3.2rem;
  align-items: center;
  margin-bottom: 8rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    flex-direction: column;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  width: 55%;
  padding-bottom: 33%;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
  margin-right: ${({ theme }) => theme.margin.medium};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    margin-right: 0;
    width: 100%;
    padding-bottom: 100%;
    margin-bottom: ${({ theme }) => theme.margin.small};
  }
`
const Date = styled.p`
  font: ${({ theme }) => theme.font.meta};
  margin-top: -0.8rem;
`
const ContentWrapper = styled.div``
const Position = styled.p`
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.margin.small};
  text-transform: capitalize;
`

const AudioPlayer = ({ title, position, src, body, audio, released }) => {
  return (
    <AudioWrapper>
      <ImageWrapper>
        <Image src={src} layout="fill" objectFit="cover" alt={title} />
      </ImageWrapper>
      <ContentWrapper>
        <h3>{title}</h3>
        <Date>{released}</Date>
        <Position>{position}</Position>
        <p>{`${body.substring(0, 120)}...`}</p>
        <AudioBar audio={audio} />
      </ContentWrapper>
    </AudioWrapper>
  )
}

export default AudioPlayer
