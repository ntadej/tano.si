import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function NavSocial() {
  return (
    <div className="navbar-end is-hidden-touch">
      <div className="navbar-item brand-only-touch">
        <a
          className="social-icon is-twitter"
          href="https://twitter.com/ntadej"
          target="_blank"
          rel="noreferrer"
          title="Twitter @ntadej"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="navbar-item brand-only-touch">
        <a
          className="social-icon is-github"
          href="https://github.com/ntadej"
          target="_blank"
          rel="noreferrer"
          title="Github @ntadej"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  )
}
