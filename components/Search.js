import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { SectionGrid } from '../styles'
import TextAndBtn from './TextAndBtn'

const SearchWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px ${({ theme }) => theme.color.black} solid;
  border-radius: 8rem;
  padding: 1.6rem 4rem;
  background: ${({ theme }) => theme.color.grey};
`
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Content = styled.div`
  margin-left: 3.2rem;
  font-size: ${({ theme }) => theme.font.desktop.h2};
  line-height: ${({ theme }) => theme.font.desktop.h2};
`
const Highlight = styled.span`
  font-weight: 900;
  color: #2d5573;
`
const TextWrapper = styled.div`
  grid-column: 6 / span 4;
  grid-row: 2;
  margin-top: 4.8rem;
`
const Search = () => {
  return (
    <SectionGrid>
      {/* FIXME: Make this animated */}
      <SearchWrapper>
        <LeftWrapper>
          <Image
            src="/search-icon.svg"
            alt="search icon"
            width={48}
            height={48}
          />
          <Content>
            yourwebsite.com/<Highlight>now</Highlight>
          </Content>
        </LeftWrapper>
        <Image src="/mic-icon.svg" alt="search icon" width={48} height={48} />
      </SearchWrapper>
      <TextWrapper>
        <TextAndBtn
          title="got a /now page?"
          body="It’s fun reading your /now page, but I find that you learn more about a person when you sit down and have a chat with them."
          btnLabel="let's chat"
          link="#"
          scroll
        />
      </TextWrapper>
    </SectionGrid>
  )
}

export default Search
