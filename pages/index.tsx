import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
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
        <h1 className="site__title">Welcome to Leila UI</h1>
        <h2 className="site__intro">
          ~a highly opinionated UI library made with React and some catnip~
        </h2>
        <ul>
          <li>
            <Link href="/components/testimonial">
              <a>Testimonial components</a>
            </Link>
          </li>
          <li>
            <Link href="/components/header">
              <a>Header components</a>
            </Link>
          </li>
          <li>
            <Link href="/components/hero">
              <a>Hero components</a>
            </Link>
          </li>
          <li>
            <Link href="/components/text-image">
              <a>Text-Image components</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
