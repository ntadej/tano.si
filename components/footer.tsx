import { Footer as FooterBase, FooterLink } from '@ntadej/style'

export default function Footer() {
  return (
    <FooterBase homeUrl="https://tano.si">
      <FooterLink href="https://vremenar.app" target="_blank" rel="noreferrer">
        Vremenar Weather
      </FooterLink>
    </FooterBase>
  )
}
