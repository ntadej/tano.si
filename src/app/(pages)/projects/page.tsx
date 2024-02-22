import { Section, siteName } from '@ntadej/style'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Projects - ${siteName}`,
}

export default function Projects() {
  return (
    <>
      <Section title="Projects" subtitle="Some subtitle">
        FOO
      </Section>
    </>
  )
}
