import styled from 'styled-components'
import AudioPlayer from '../components/AudioPlayer'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import Platforms from '../components/Platforms'
import { SectionFlex } from '../styles'
import data from '../data/episodeList'
import uuid from 'react-uuid'

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

export default function Detail({ episode }) {
  return (
    <>
      <Meta />
      <header>
        <Navbar />
      </header>
      <main>
        <Hero
          title={`${episode.firstName} ${episode.surname}`}
          subtitle="subscribe to the newsletter for more episodes"
          newsletter
        />
        <SectionFlex>
          <AudioPlayer
            title={`#${episode.id} ${episode.firstName} ${episode.surname}`}
            position={episode.profession}
            src={episode.src}
            body={episode.body}
          />
          <Platforms />
          <p>{episode.body}</p>
          <Heading>useful links</Heading>
          <ListWrapper>
            {episode.links.map((item) => {
              const { link, list } = item
              return (
                <List key={uuid()}>
                  <a href={link} target="_blank">
                    {list}
                  </a>
                </List>
              )
            })}
          </ListWrapper>
          <Heading>tools mentioned</Heading>
          <ListWrapper>
            {episode.tools.map((item) => {
              const { link, tool } = item
              return (
                <List key={uuid()}>
                  <a href={link} target="_blank">
                    {tool}
                  </a>
                </List>
              )
            })}
          </ListWrapper>
          <Heading>books mentioned</Heading>
          <ListWrapper>
            {episode.books.map((item) => {
              const { link, book } = item
              return (
                <List key={uuid()}>
                  <a href={link} target="_blank">
                    {book}
                  </a>
                </List>
              )
            })}
          </ListWrapper>
        </SectionFlex>
      </main>
      <footer>
        <Footer footer />
      </footer>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const episodes = data.filter((item) => item.id.toString() === params.id)
  // const episodes = data.filter((item) => item.id.toString() === params.id)
  return {
    props: {
      episode: episodes[0],
    },
  }
}
export const getStaticPaths = async () => {
  // const url = `${episode.FirstName}-${episode.surname}`
  const paths = data.map((episode) => ({
    // params: { id: episode.url.toString() },
    // params: { id: episode.id.toString() },
    params: { id: episode.id.toString() },
    // FIXME: Make url the first and last name
  }))
  return {
    paths,
    fallback: false,
  }
}
