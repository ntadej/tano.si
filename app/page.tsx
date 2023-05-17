import { Section } from '@ntadej/style'
import Footer from 'components/Footer'
import Link from 'next/link'
import Navigation from 'components/Navigation'

export default function Page() {
  return (
    <>
      <section className="section section-me">
        <div className="container content">
          <div className="columns is-vcentered has-text-centered-mobile">
            <div className="column column-me">
              <div className="me"></div>
            </div>
            <div className="column">
              <h1>Tadej Novak</h1>
              <h2 className="subtitle">
                Finding new particles, coping with pile-up,
                <br />
                researcher with ATLAS at CERN
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Navigation />

      <Section
        title="About me"
        subtitle="Some information compiling about my physics-related work"
      >
        <h2>Outreach</h2>
        <p>
          In summer 2014 I worked at CERN as a Summer Student on the ATLAS experiment.
          There I created a simple educational game called{' '}
          <Link href="/particle-clicker">Particle Clicker</Link>, together with{' '}
          <a href="http://babushk.in">Igor</a>, <a href="http://dun.gs">Kevin</a>, and{' '}
          <a href="https://github.com/gbiro">Gábor</a>.
        </p>
      </Section>

      <Footer />
    </>
  )
}
