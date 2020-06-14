import Head from 'next/head'
import Link from 'next/link'
import Header from 'components/header/Header'
import Logo from 'components/Logo'
import NavigationMenu from 'components/NavigationMenu'
import ToggleLanguage from 'components/ToggleLanguage'
import { languages } from 'components/constants'

export default function HeaderPage() {
  return (
    <div className="site">
      <Head>
        <title>Leila UI</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <section className="section">
          <Link href="/">
            <a>Home</a>
          </Link>
        </section>
        <section className="section">
          <h2 className="section__title">Header Single Menu</h2>
          <div className="section__content">
            <Header
              logo={
                <Logo
                  imageUrl="/images/leila-logo-horizontal.png"
                  size="large"
                />
              }
              primaryMenu={
                <NavigationMenu
                  menuItems={[
                    {
                      type: 'data',
                      label: 'Smelly cat',
                      children: [
                        {
                          type: 'data',
                          label: 'Smelly cat',
                        },
                        {
                          type: 'data',
                          label: 'Smelly cat',
                        },
                        {
                          type: 'data',
                          label: "It's not your fault",
                        },
                      ],
                    },
                    { type: 'data', label: 'Smelly cat' },
                    { type: 'data', label: 'What are they' },
                    { type: 'data', label: 'Feeding you' },
                  ]}
                />
              }
            />
          </div>
        </section>
        <section className="section">
          <h2 className="section__title">Header Double Menu</h2>
          <div className="section__content">
            <Header
              logo={
                <Logo
                  imageUrl="/images/leila-logo-horizontal.png"
                  size="large"
                />
              }
              primaryMenu={
                <NavigationMenu
                  menuItems={[
                    {
                      type: 'data',
                      label: 'Smelly cat',
                      children: [
                        { type: 'data', label: 'Smelly cat' },
                        { type: 'data', label: 'Smelly cat' },
                        { type: 'node', content: <div>Smelly cat</div> },
                      ],
                    },
                    { type: 'data', label: 'Smelly cat' },
                    { type: 'data', label: 'What are they' },
                    { type: 'data', label: 'Feeding you' },
                  ]}
                />
              }
              secondaryMenu={
                <NavigationMenu
                  menuItems={[
                    {
                      type: 'data',
                      label: 'Login',
                    },
                    {
                      type: 'node',
                      content: (
                        <ToggleLanguage languages={languages} selected="en" />
                      ),
                    },
                  ]}
                />
              }
            />
          </div>
        </section>
      </main>
    </div>
  )
}
