import React from 'react'
import styled from 'styled-components'
import { SectionFlex } from '../styles'
import AudioPlayer from './AudioPlayer'
import ButtonMain from './ButtonMain'
import Cards from './Cards'
import data from '../data/episodeList'

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

const Episodes = () => {
  return (
    <SectionFlex>
      <h2>latest episodes</h2>
      <AudioPlayer
        title={`#${data[0].number} ${data[0].firstName} ${data[0].surname}`}
        position={data[0].proffession}
        src={data[0].src}
      />
      <PopularEpisodesWrapper>
        <h2>popular episodes</h2>
        <ButtonMain btnLabel="view all" link="#" noMargin={true} />
      </PopularEpisodesWrapper>
      <CardWrapper>
        {data.map((item) => {
          const { number, firstName, surname, profession, src } = item
          return (
            <Cards
              title={`#${number} ${firstName} ${surname}`}
              subtitle={profession}
              src={src}
              // FIXME: Add url link as well
              // FIXME: Add unique key UUID thingy
            />
          )
        })}
      </CardWrapper>
    </SectionFlex>
  )
}

export default Episodes
