import '../styles/sections/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <nav className="side-header">
      <ul className="nav-links">
        <li><a href="#about-container"><FontAwesomeIcon icon={faUser} className="fa-icon" /> About</a></li>
        <li><a href="#projects"><FontAwesomeIcon icon={faProjectDiagram} className="fa-icon" /> Projects</a></li>
        <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} className="fa-icon" /> Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;