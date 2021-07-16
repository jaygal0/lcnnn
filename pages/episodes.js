import CardEpisodes from '../components/CardEpisodes'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import { SectionFlex } from '../styles'

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
          <CardEpisodes
            title="#1 lorem ipsum"
            subtitle="ux/ui designer"
            release="01/01/21"
            body="lorem ipsum hela sallei"
          />
          <CardEpisodes
            title="#1 lorem ipsum"
            subtitle="ux/ui designer"
            release="01/01/21"
            body="lorem ipsum hela sallei"
          />
          <CardEpisodes
            title="#1 lorem ipsum"
            subtitle="ux/ui designer"
            release="01/01/21"
            body="lorem ipsum hela sallei"
          />{' '}
          <CardEpisodes
            title="#1 lorem ipsum"
            subtitle="ux/ui designer"
            release="01/01/21"
            body="lorem ipsum hela sallei"
          />{' '}
          <CardEpisodes
            title="#1 lorem ipsum"
            subtitle="ux/ui designer"
            release="01/01/21"
            body="lorem ipsum hela sallei"
          />{' '}
          <CardEpisodes
            title="#1 lorem ipsum"
            subtitle="ux/ui designer"
            release="01/01/21"
            body="lorem ipsum hela sallei"
          />{' '}
          <CardEpisodes
            title="#1 lorem ipsum"
            subtitle="ux/ui designer"
            release="01/01/21"
            body="lorem ipsum hela sallei"
          />
        </SectionFlex>
      </main>
      <footer>
        <Footer footer />
      </footer>
    </>
  )
}
