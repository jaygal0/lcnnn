import CardEpisodes from '../components/CardEpisodes'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import { SectionFlex } from '../styles'
import data from '../data/episodeList'

export default function Home() {
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
          {data.map((item) => {
            const {
              number,
              firstName,
              surname,
              profession,
              src,
              uploadDate,
              body,
            } = item
            return (
              <CardEpisodes
                title={`#${number} ${firstName} ${surname}`}
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
