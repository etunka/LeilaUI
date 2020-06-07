import Head from 'next/head'
import Link from 'next/link'
import Testimonial from '../components/testimonial/Testimonial'

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
        <ul>
          <li>
            <Link href="/components/testimonial">
              <a>Testimonial component page</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
