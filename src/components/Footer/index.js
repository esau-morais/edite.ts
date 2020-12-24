// Components (children)

// Icons
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { ReactComponent as GitHub } from '../../assets/GitHub.svg';
import { ReactComponent as Instagram } from '../../assets/Instagram.svg';
import { ReactComponent as Twitter } from '../../assets/Twitter.svg';
// Components (styles)
import { Container } from './footer.styles';
import { Description } from '../index';

// Remove default margins
const descriptionStyles = {
  marginTop: 0,
  marginBottom: 0
}

function Footer() {
  return (
    <Container>
      {/* Left → Logo */}
      <div className="footer__left">
        <Logo />
      </div>

      {/* Middle → Copyright */}
      <div className="footer__middle">
        <Description style={descriptionStyles}>
          © EDITE 2020
        </Description>
      </div>

      {/* Right → Social media */}
      <div className="footer__right">
        <ul>
          <li>
            <a
              href="http://github.com/Edite-App"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
          </li>
          <li>
            <a
              href="http://instagram.com/esau_morais/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a
              href="http://twitter.com/esau_morais/"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Footer;
