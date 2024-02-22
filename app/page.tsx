import { Content, Section } from '@ntadej/style'
import { HorizontalGradient } from '@ntadej/style/components/decorations'
import Footer from 'components/Footer'
import { Navigation, Socials } from 'components/navigation'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <HorizontalGradient />

      <section className="container mx-auto flex flex-col p-6 sm:flex-row">
        <div className="me flex-shrink-0 max-sm:mx-auto sm:mr-6"></div>
        <div className="sm:max-w-2xl lg:max-w-5xl">
          <h1 className="mt-6 text-3xl font-bold text-primary-700 dark:text-primary-300 sm:text-5xl">
            Tadej Novak
          </h1>
          <p className="mt-2 text-xl text-zinc-600 dark:text-zinc-400">
            Physicist, Developer, Science Hack Day Ambassador, Creator of Particle
            Clicker
          </p>
          <Socials />
        </div>
      </section>

      <Navigation />

      <Section
        title="About me"
        subtitle="Some information compiling about my physics-related work"
      >
        <Content fullWidth={true}>
          <h2>Outreach</h2>
          <p>
            In summer 2014 I worked at CERN as a Summer Student on the ATLAS experiment.
            There I created a simple educational game called{' '}
            <Link href="/particle-clicker">Particle Clicker</Link>, together with{' '}
            <a href="http://babushk.in">Igor</a>, <a href="http://dun.gs">Kevin</a>, and{' '}
            <a href="https://github.com/gbiro">Gábor</a>.
          </p>
        </Content>
      </Section>

      <Footer />
    </>
  )
}
