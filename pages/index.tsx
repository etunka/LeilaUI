import Head from 'next/head'
import Testimonial from '../components/testimonial/Testimonial'

export default function Home() {
  return (
    <div className="site">
      <Head>
        <title>Leila UI</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <h1 className="site__title">
          Welcome to Leila UI
        </h1>
        <section className="section">
          <h2 className="section__title">Testimonial</h2>
          <div className="section__content">
            <Testimonial 
            quote="Nap all day cat dog hate mouse eat string barf pillow no baths hate everything but kitty poochy. Sleep on keyboard toy mouse squeak roll over. Mesmerizing birds. Poop on grasses licks paws destroy couch intently sniff hand. The dog smells bad gnaw the corn cob." 
            name="Leila Whitepanther" 
            position="Director of Naps"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
