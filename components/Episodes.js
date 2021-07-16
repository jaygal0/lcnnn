import React from 'react'
import styled from 'styled-components'
import { Heading, SectionFlex } from '../styles'
import AudioPlayer from './AudioPlayer'
import ButtonMain from './ButtonMain'
import Cards from './Cards'

const PopularEpisodesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.margin.small};
`
const CardWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  flex-wrap: wrap;
`

const Episodes = ({ title, position }) => {
  return (
    <SectionFlex>
      <h2>latest episodes</h2>
      <AudioPlayer title={title} position={position} />
      <PopularEpisodesWrapper>
        <h2>popular episodes</h2>
        <ButtonMain btnLabel="view all" link="#" noMargin={true} />
      </PopularEpisodesWrapper>
      <CardWrapper>
        <Cards title="heading" subtitle="subheading" />
        <Cards title="heading" subtitle="subheading" />
        <Cards title="heading" subtitle="subheading" />
        <Cards title="heading" subtitle="subheading" />
        <Cards title="heading" subtitle="subheading" />
        <Cards title="heading" subtitle="subheading" />
        <Cards title="heading" subtitle="subheading" />
        <Cards title="heading" subtitle="subheading" />
      </CardWrapper>
    </SectionFlex>
  )
}

export default Episodes
