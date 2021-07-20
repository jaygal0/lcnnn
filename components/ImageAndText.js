import React from 'react'
import styled from 'styled-components'
import { SectionGrid } from '../styles'
import ButtonNumber from './ButtonNumber'
import TextAndBtn from './TextAndBtn'
import Image from 'next/image'

const TextWrapper = styled.div`
  grid-column: 7 / span 4;
  grid-row: 2;
  margin-top: -16rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    grid-column: 1 / -1;
    margin-top: ${({ theme }) => theme.margin.medium};
  }
`
const ImageWrapper = styled.div`
  grid-column: 2 / span 4;
  grid-row: 1;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  position: relative;
  padding-bottom: 100%;
  background: ${({ theme }) => theme.color.grey};
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    grid-column: 1 / -1;
  }
`

const ImageAndText = ({
  title,
  body,
  btnLabel,
  btnLabelNo,
  link,
  src,
  subheading,
}) => {
  return (
    <SectionGrid>
      <ButtonNumber
        className="placed-side"
        link={link}
        btnLabelNo={btnLabelNo}
      />
      <ImageWrapper>
        <Image src={src} layout="fill" objectFit="cover" alt={title} />
      </ImageWrapper>
      <TextWrapper>
        <TextAndBtn
          title={title}
          body={body}
          btnLabel={btnLabel}
          link={link}
          subheading={subheading}
        />
      </TextWrapper>
    </SectionGrid>
  )
}

export default ImageAndText
