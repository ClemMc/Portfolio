import '../styles/sections/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('about');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="side-header">
      <ul className="nav-links">
        <li>
          <a
            href="#about-container"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleSetActive('about')}
          >
            <FontAwesomeIcon icon={faUser} className="fa-icon" /> About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => handleSetActive('projects')}
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="fa-icon" /> Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => handleSetActive('contact')}
          >
            <FontAwesomeIcon icon={faEnvelope} className="fa-icon" /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
