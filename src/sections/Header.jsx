import '../styles/sections/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
            className={activeSection === 'welcome' ? 'active' : ''}
            onClick={() => handleSetActive('welcome')}
            >
            <FontAwesomeIcon icon={faUser} className="fa-icon" /> Bienvenue
          </a>
        </li>
        <li>
          <a
            href="#biographie"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleSetActive('about')}
          >
            <FontAwesomeIcon icon={faUser} className="fa-icon" /> À propos
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => handleSetActive('projects')}
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="fa-icon" /> Projets
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
      <div className="socialSection">
        <ul className="socialLinks">
          <li>
            <a href="https://www.linkedin.com/in/cl%C3%A9ment-metral-charvet-109543264/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ClemMc" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="fa-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/clem_mc21/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
