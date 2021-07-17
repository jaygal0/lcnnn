import CardEpisodes from '../components/CardEpisodes'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import { SectionFlex } from '../styles'
import data from '../data/episodeList'
import uuid from 'react-uuid'

export const getStaticProps = async () => {
  return {
    props: {
      episodes: data,
    },
  }
}

export default function Episodes({ episodes }) {
  return (
    <>
      <Meta />
      <header>
        <Navbar />
      </header>
      <main>
        <Hero
          title="stay in the loop"
          subtitle="subscribe for the latest releases"
          newsletter
        />
        <SectionFlex>
          {episodes.map((item) => {
            const {
              id,
              firstName,
              surname,
              profession,
              src,
              uploadDate,
              body,
            } = item
            return (
              <CardEpisodes
                key={uuid()}
                url={id}
                title={`#${id} ${firstName} ${surname}`}
                subtitle={profession}
                src={src}
                release={uploadDate}
                body={body}
              />
            )
          })}
        </SectionFlex>
      </main>
      <footer>
        <Footer footer />
      </footer>
    </>
  )
}
