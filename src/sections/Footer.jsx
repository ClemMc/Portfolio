import '../styles/sections/footer.scss';
import goodbyeImage from '../assets/bye.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={goodbyeImage} alt="Bye" className="goodbye-image" />
        <p className="goodbye-text">Merci de votre visite. À bientôt !</p>
        <div className="separator" />
        <p className="site-credit">© 2024 Clément Metral - Tous droits réservés.</p>
        <p className="gpt-credit">Illustrations generated using ChatGPT powered by DALL·E.</p>
      </div>
    </footer>
  );
};

export default Footer;