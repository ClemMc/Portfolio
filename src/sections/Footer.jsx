import '../styles/sections/footer.scss';
import goodbyeImage from '../assets/bye.png'; // Assurez-vous que cette image existe

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={goodbyeImage} alt="Bye" className="goodbye-image" />
        <p className="goodbye-text">Merci d&apos;avoir visité mon site. À bientôt !</p>
        <div className="separator" />
        <p className="site-credit">© 2024 Clément Metral - Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;