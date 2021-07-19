import React from 'react'
import styled from 'styled-components'
import { SectionFlex } from '../styles'
import AudioPlayer from './AudioPlayer'
import ButtonMain from './ButtonMain'
import Cards from './Cards'
import data from '../data/episodeList'

const TextWrapper = styled.div`
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

const LatestEpisodes = () => {
  return (
    <SectionFlex>
      <TextWrapper>
        <h2>latest episodes</h2>
        <ButtonMain btnLabel="view" link={`/${data[0].url}`} noMargin={true} />
      </TextWrapper>
      <AudioPlayer
        title={`#${data[0].id} ${data[0].firstName} ${data[0].surname}`}
        position={data[0].profession}
        src={data[0].src}
        body={data[0].body}
        audio={data[0].audio}
      />
      <TextWrapper>
        <h2>recent episodes</h2>
        <ButtonMain btnLabel="view all" link="/episodes" noMargin={true} />
      </TextWrapper>
      <CardWrapper>
        {data.slice(0, 8).map((item) => {
          const { id, url, firstName, surname, profession, src } = item
          return (
            <Cards
              key={id}
              title={`#${id} ${firstName} ${surname}`}
              subtitle={profession}
              src={src}
              url={url}
            />
          )
        })}
      </CardWrapper>
    </SectionFlex>
  )
}

export default LatestEpisodes
