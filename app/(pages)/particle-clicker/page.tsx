import { siteName } from '@ntadej/style'
import { Metadata } from 'next'
import Image from 'next/legacy/image'
import particleClickerDetector from 'projects/particle-clicker-detector.png'

export const metadata: Metadata = {
  title: `Particle Clicker - ${siteName}`,
}

export default function ParticleClicker() {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <Image src={particleClickerDetector} alt="Particle Clicker" />
              </div>
              <div className="column has-text-centered-mobile">
                <h1>Particle Clicker</h1>
                <h3>
                  An addictive incremental game that teaches players the history of high
                  energy particle physics
                </h3>
                <a
                  href="http://cern.ch/partcle-clicker"
                  className="button is-large is-primary is-inverted"
                  target="_blank"
                  rel="noreferrer"
                >
                  Play now!
                </a>{' '}
                <a
                  className="button is-large is-primary"
                  href="https://github.com/particle-clicker/particle-clicker"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading">
            <h1>About</h1>
            <h2 className="subtitle">
              Particle Clicker is a simple but addictive incremental game, based on the
              idea of{' '}
              <a
                href="http://orteil.dashnet.org/cookieclicker/"
                target="_blank"
                rel="noreferrer"
              >
                Cookie Clicker
              </a>
              . It was created over a weekend during the{' '}
              <a href="https://webfest.web.cern.ch" target="_blank" rel="noreferrer">
                CERN Summer Student Webfest 2014
              </a>
              .
            </h2>
          </div>

          <div className="content">
            <div className="columns">
              <div className="column is-half">
                <h2>Authors</h2>
                <p>
                  We are a group of students from several different countries that met
                  at CERN either before as Summer Students or at the Webfest.
                </p>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="https://github.com/gbiro" target="_blank" rel="noreferrer">
                      Gabor Biro
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="https://github.com/ibab" target="_blank" rel="noreferrer">
                      Igor Babuschkin
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="https://github.com/kdungs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Kevin Dungs
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="https://github.com/ntadej"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tadej Novak
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="https://github.com/zhangjiannan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Jiannan Zhang
                    </a>
                  </li>
                </ul>
              </div>

              <div className="column is-half">
                <h2>Media response</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    <a
                      href="http://home.web.cern.ch/about/updates/2014/08/code-and-coffee-innovative-projects-cern-webfest"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CERN
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="http://www.sciencemag.org/content/345/6199/856.summary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Science Magazine (needs subscription)
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="http://www.symmetrymagazine.org/article/august-2013/new-game-trades-clicks-for-physics-discoveries"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Symmetry Magazine
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="http://www.popsci.com/article/gadgets/click-your-way-discovery-cerns-particle-clicker-game"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Popular Science
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="http://ecrans.liberation.fr/ecrans/2014/08/13/particle-clicker_1080078"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Libération (french)
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="http://boingboing.net/2014/08/11/particle-clicker-meth-addicti.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Boing Boing
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      href="http://jayisgames.com/archives/2014/08/particle_clicker.php"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Jay is games
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
