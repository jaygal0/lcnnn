import Footer from '../components/Footer'
import Form from '../components/Form'
import Hero from '../components/Hero'
import ImageAndText from '../components/ImageAndText'
import ImageAndTextAlt from '../components/ImageAndTextAlt'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import Platforms from '../components/Platforms'
import Search from '../components/Search'
import data from '../data/episodeList'
import LatestEpisodes from '../components/LatestEpisodes'

export default function Home() {
  return (
    <>
      <Meta
        title="Let's Chat NowNowNow"
        desc="A podcast for people with a /now page"
      />
      <header>
        <Navbar />
      </header>
      <main>
        <Hero
          title="what are you doing now?"
          subtitle="a podcast for people with a /now page"
          btnLabel="latest episode"
          btnPink={true}
          link={`/${data[0].url}`}
        />
        <Search />
        <ImageAndText
          title="inspired &amp; approved by derek sivers"
          // body="Creator of NowNowNow.com, Derek sits down and joins the podcast."
          body="This is still pending approval. I left this here as a reminder for me to get Derek onto the podcast."
          btnLabel="listen now"
          btnLabelNo="#?"
          link="/#"
          src="https://sive.rs/images/DerekSivers-20141209a-1853.jpg"
        />
        <Platforms />
        <LatestEpisodes />
        <ImageAndTextAlt
          title="host &amp; creator"
          subheading="joshua galinato"
          body="I enjoy conversations and going through peoples /now page, so I built this site to kill two birds with one stone."
          btnLabel="what i'm doing now"
          btnLabelNo="#1"
          link="/joshua-galinato"
          ahref="https://joshuagalinato.com/now"
          src="https://www.gravatar.com/avatar/1e16e9934de7105de1325bd652a1faa8?s=900"
        />
        <Form />
      </main>
      <footer>
        <Footer footer />
      </footer>
    </>
  )
}
