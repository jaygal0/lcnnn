import Hero from '../components/Hero'
import ImageAndText from '../components/ImageAndText'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'

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
        <ImageAndText
          title="inspired &amp; approved by derek sivers"
          body="Creator of NowNowNow.com, Derek sits down and joins the podcast."
          btnLabel="listen now"
          btnLabelNo="#1"
          link="#"
          src="/profile.jpg"
        />
        <ImageAndText
          title="inspired &amp; approved by derek sivers"
          body="Creator of NowNowNow.com, Derek sits down and joins the podcast."
          btnLabel="listen now"
          btnLabelNo="#2"
          link="#"
          src="/profile.jpg"
        />
      </main>
      <footer></footer>
    </>
  )
}
