import ImageAndText from '../components/ImageAndText'
import Meta from '../components/Meta'

export default function Home() {
  return (
    <>
      <Meta />
      <header></header>
      <main>
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
