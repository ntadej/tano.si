import {
  IconType,
  SiGithub,
  SiMastodon,
  SiTwitter,
} from '@icons-pack/react-simple-icons'
import { Navigation as NavigationCore } from '@ntadej/style'
import { createElement } from 'react'

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Particle Clicker', href: '/particle-clicker' },
]

export function Navigation() {
  return <NavigationCore items={navigation} />
}

export function SocialLink({
  name,
  href,
  icon,
}: {
  name: string
  href: string
  icon: IconType
}) {
  const iconElement = createElement(icon, { size: 24, title: name })
  return (
    <a
      className="group -m-1 p-1 transition-colors duration-300 hover:text-primary-700 dark:hover:text-primary-300"
      aria-label={name}
      href={href}
    >
      {iconElement}
    </a>
  )
}

export function Socials() {
  return (
    <div className="mt-4 flex gap-6">
      <SocialLink
        name="Follow on Mastodon"
        href="https://hep.social/tadej"
        icon={SiMastodon}
      />
      <SocialLink
        name="Follow on Twitter"
        href="https://twitter.com/ntadej"
        icon={SiTwitter}
      />
      <SocialLink
        name="Follow on GitHub"
        href="https://github.com/ntadej"
        icon={SiGithub}
      />
    </div>
  )
}
