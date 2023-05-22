import { siteName } from '@ntadej/style'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Projects - ${siteName}`,
}

export default function Projects() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="heading">
            <h1>Projects</h1>
            <h2 className="subtitle">Some subtitle</h2>
          </div>
        </div>
      </section>
    </>
  )
}
