import Image from 'next/image'
import Episodes from '../components/episodes'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Hero from '../components/Hero'
import ImageAndText from '../components/ImageAndText'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import Platforms from '../components/Platforms'
import Search from '../components/Search'

export default function Home() {
  return (
    <>
      <Meta />
      <header>
        <Navbar />
      </header>
      <main>
        <Hero
          title="what are you doing now?"
          subtitle="a podcast for people with a /now page"
          btnLabel="listen now"
          btnPink={true}
          link="#"
        />
        <Search />
        <ImageAndText
          title="inspired &amp; approved by derek sivers"
          body="Creator of NowNowNow.com, Derek sits down and joins the podcast."
          btnLabel="listen now"
          btnLabelNo="#1"
          link="#"
          src="/profile.jpg"
        />
        <Platforms />
        <Episodes title="#1 lorem ipsum" position="lorem ipsum" />
        <ImageAndText
          title="inspired &amp; approved by derek sivers"
          body="Creator of NowNowNow.com, Derek sits down and joins the podcast."
          btnLabel="listen now"
          btnLabelNo="#2"
          link="#"
          src="/profile.jpg"
          subheading="joshua galinato"
        />
        <Form />
      </main>
      <footer>
        <Footer footer />
      </footer>
    </>
  )
}
