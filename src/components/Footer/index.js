// Icons
import { ReactComponent as Facebook } from "assets/Facebook.svg";
import { ReactComponent as GitHub } from "assets/GitHub.svg";
import { ReactComponent as Logo } from "assets/Logo.svg";
import { ReactComponent as Twitter } from "assets/Twitter.svg";
import { Description } from "../index";
// Components (styles)
import { Container } from "./footer.styles";

// Remove default margins
const descriptionStyles = {
  marginTop: 0,
  marginBottom: 0,
};

function Footer() {
  return (
    <Container>
      {/* Left → Logo */}
      <div className="footer__left">
        <Logo />
      </div>

      {/* Middle → Copyright */}
      <div className="footer__middle">
        <Description style={descriptionStyles}>© EDITE 2020 - Present</Description>
      </div>

      {/* Right → Social media */}
      <div className="footer__right">
        <ul>
          <li>
            <a
              aria-label="GitHub"
              href="http://github.com/esau-morais/edite.js"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
          </li>
          <li>
            <a
              aria-label="Facebook"
              href="http://facebook.com/editeapp/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
          </li>
          <li>
            <a
              aria-label="Twitter"
              href="http://twitter.com/_3morais/"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Footer;
