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
        title={`#${data[0].id} ${data[0].firstName} ${data[0].surname}`}
        position={data[0].proffession}
        src={data[0].src}
        body={data[0].body}
      />
      <PopularEpisodesWrapper>
        <h2>popular episodes</h2>
        <ButtonMain btnLabel="view all" link="#" noMargin={true} />
      </PopularEpisodesWrapper>
      <CardWrapper>
        {data.map((item) => {
          const { id, firstName, surname, profession, src } = item
          return (
            <Cards
              key={id}
              title={`#${id} ${firstName} ${surname}`}
              subtitle={profession}
              src={src}
              url={id}
            />
          )
        })}
      </CardWrapper>
    </SectionFlex>
  )
}

export default Episodes
