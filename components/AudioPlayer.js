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
`
const ImageWrapper = styled.div`
  position: relative;
  width: 55%;
  padding-bottom: 33%;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
  margin-right: ${({ theme }) => theme.margin.medium};
`
const ContentWrapper = styled.div``
const Position = styled.p`
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.margin.small};
  text-transform: capitalize;
`

const AudioPlayer = ({ title, position, src, body, audio }) => {
  return (
    <AudioWrapper>
      <ImageWrapper>
        <Image src={src} layout="fill" objectFit="cover" />
      </ImageWrapper>
      <ContentWrapper>
        <h3>{title}</h3>
        <Position>{position}</Position>
        <p>{`${body.substring(0, 120)}...`}</p>
        <AudioBar audio={audio} />
      </ContentWrapper>
    </AudioWrapper>
  )
}

export default AudioPlayer
