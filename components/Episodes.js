import React from 'react'
import styled from 'styled-components'
import { Heading, SectionFlex } from '../styles'
import AudioPlayer from './AudioPlayer'
import ButtonMain from './ButtonMain'

const PopularEpisodesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CardWrapper = styled.div`
  display: flex;
`

const Episodes = ({ title, position }) => {
  return (
    <SectionFlex>
      <h2>latest episodes</h2>
      <h2>latest episodes</h2>
      <AudioPlayer title={title} position={position} />
      <PopularEpisodesWrapper>
        <h2>popular episodes</h2>
        <ButtonMain btnLabel="view all" link="#" noMargin={true} />
      </PopularEpisodesWrapper>
      <CardWrapper></CardWrapper>
    </SectionFlex>
  )
}

export default Episodes
