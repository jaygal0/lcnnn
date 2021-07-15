import React from 'react'
import styled from 'styled-components'
import { Heading, SectionFlex } from '../styles'
import AudioPlayer from './AudioPlayer'

const Episodes = ({ title, position }) => {
  return (
    <SectionFlex>
      <h2>Latest Episode</h2>
      <AudioPlayer title={title} position={position} />
      <h2>Popular Episode</h2>
    </SectionFlex>
  )
}

export default Episodes
