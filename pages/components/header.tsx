import Head from 'next/head'
import Link from 'next/link'
import Header from 'components/header/Header'
import Logo from 'components/Logo'
import NavigationMenu from 'components/NavigationMenu'

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
                  theme="text"
                  imageUrl="/images/leila-logo-horizontal.png"
                  size="large"
                />
              }
              primaryMenu={
                <NavigationMenu
                  menuItems={[
                    {
                      label: 'Smelly cat',
                      children: [
                        {
                          label: 'Smelly cat',
                        },
                        {
                          label: 'Smelly cat',
                        },
                        {
                          label: "It's not your fault",
                        },
                      ],
                    },
                    { label: 'Smelly cat' },
                    { label: 'What are they' },
                    { label: 'Feeding you' },
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
                  theme="text"
                  imageUrl="/images/leila-logo-horizontal.png"
                  size="large"
                />
              }
              primaryMenu={
                <NavigationMenu
                  menuItems={[
                    {
                      label: 'Smelly cat',
                      children: [
                        {
                          label: 'Smelly cat',
                        },
                        {
                          label: 'Smelly cat',
                        },
                        {
                          label: "It's not your fault",
                        },
                      ],
                    },
                    { label: 'Smelly cat' },
                    { label: 'What are they' },
                    { label: 'Feeding you' },
                  ]}
                />
              }
              secondaryMenu={
                <NavigationMenu
                  menuItems={[
                    {
                      label: 'Login',
                    },
                    { label: 'EN / NL' },
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
