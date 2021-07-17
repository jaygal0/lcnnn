import styled from 'styled-components'
import AudioPlayer from '../../components/AudioPlayer'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar'
import Platforms from '../../components/Platforms'
import { SectionFlex } from '../../styles'
import data from '../../data/episodeList'

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Heading = styled.h3`
  margin-top: ${({ theme }) => theme.margin.small};
`
const List = styled.li`
  list-style: square;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
`

export default function Home() {
  return (
    <>
      <Meta />
      <header>
        <Navbar />
      </header>
      <main>
        <Hero
          title={`#${data}`}
          subtitle="subscribe to the newsletter for more episodes"
          newsletter
        />
        <SectionFlex>
          <AudioPlayer
            title="#1 first name"
            position="position"
            src="/card.jpg"
            // FIXME: Make this dynamic
          />
          <Platforms />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quod
            alias fugit labore dicta porro repudiandae numquam perspiciatis
            accusantium veritatis?
          </p>
          <Heading>useful links</Heading>
          <ListWrapper>
            <List>link 1</List>
            <List>link 2</List>
            <List>link 3</List>
          </ListWrapper>
          <Heading>topics discussed</Heading>
          <ListWrapper>
            <List>link 1</List>
            <List>link 2</List>
            <List>link 3</List>
          </ListWrapper>
          <Heading>tools mentioned</Heading>
          <ListWrapper>
            <List>link 1</List>
            <List>link 2</List>
            <List>link 3</List>
          </ListWrapper>
          <Heading>books mentioned</Heading>
          <ListWrapper>
            <List>link 1</List>
            <List>link 2</List>
            <List>link 3</List>
          </ListWrapper>
        </SectionFlex>
      </main>
      <footer>
        <Footer footer />
      </footer>
    </>
  )
}
