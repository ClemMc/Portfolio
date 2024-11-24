import '../styles/sections/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faProjectDiagram, faLink, faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false); 

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible); 
  };

  return (
    <>
      <button className="menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="fa-icon" />
      </button>

      {isMenuVisible && (
        <nav className={`side-header ${isMenuVisible ? 'visible' : ''}`}>
        <ul className="nav-links">
            <li>
              <a
                href="#Welcome"
                className={activeSection === 'welcome' ? 'active' : ''}
                onClick={() => handleSetActive('welcome')}
              >
                <FontAwesomeIcon icon={faHome} className="fa-icon" /> Bienvenue
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => handleSetActive('about')}
              >
                <FontAwesomeIcon icon={faUser} className="fa-icon" /> Histoire
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
            <li
              className="social-menu"
              onMouseEnter={() => setShowSocialMenu(true)}
              onMouseLeave={() => setShowSocialMenu(false)}
            >
              <a href="#social">
                <FontAwesomeIcon icon={faLink} className="fa-icon" /> Réseaux
              </a>
              {showSocialMenu && (
                <ul className="social-dropdown">
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
              )}
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;
