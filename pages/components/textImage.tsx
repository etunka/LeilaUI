import Head from 'next/head'
import TextImage from 'components/TextImage'
import Link from 'next/link'

const Text = () => {
  return (
    <>
      <h3>Cat ipsum dolor sit amet, I will be pet I will be pet</h3>
      <p>
        Vommit food and eat it again stare at wall turn and meow stare at wall
        some more meow again continue staring so enslave the hooman. Sleep on
        keyboard toy mouse squeak roll over.
      </p>
    </>
  )
}
export default function TextImagePage() {
  return (
    <div className="site">
      <Head>
        <title>Leila UI</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <section className="section">
          <Link href="/">
            <a>Home</a>
          </Link>
        </section>
        <section className="section">
          <h2 className="section__title">Text-Image Left</h2>
          <div className="section__content">
            <TextImage imageUrl="/images/sleepy-kitten.png">
              <Text />
            </TextImage>
          </div>
        </section>
        <section className="section">
          <h2 className="section__title">Text-Image Right</h2>
          <div className="section__content">
            <TextImage
              imageUrl="/images/sleepy-kitten.png"
              imageAlignment="right"
            >
              <Text />
            </TextImage>
          </div>
        </section>
      </main>
    </div>
  )
}
