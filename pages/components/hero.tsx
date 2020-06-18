import Head from 'next/head'
import Link from 'next/link'
import Hero from 'components/Hero'
import CTA from 'components/CTA'

export default function HeroPage() {
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
          <h2 className="section__title">Hero Right</h2>
          <div className="section__content">
            <Hero
              backgroundImageUrl="/images/cat-grey.png"
              title="lorem ipsum"
              content="Lorem ipsum dolor sit amet miyav miyav"
              button
              buttonText="miyav"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
