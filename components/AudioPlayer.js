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
  flex-grow: 1;
  padding-bottom: 35%;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
  margin-right: ${({ theme }) => theme.margin.medium};
`
const ContentWrapper = styled.div`
  flex-grow: 1;
`
const Position = styled.p`
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.margin.small};
`

const AudioPlayer = ({ title, position }) => {
  return (
    <AudioWrapper>
      <ImageWrapper>
        <Image src="/image.jpg" layout="fill" objectFit="cover" />
      </ImageWrapper>
      <ContentWrapper>
        <h3>{title}</h3>
        <Position>{position}</Position>
        <p>Lorem ipsum dolor sit amet.</p>
        <AudioBar />
      </ContentWrapper>
    </AudioWrapper>
  )
}

export default AudioPlayer
