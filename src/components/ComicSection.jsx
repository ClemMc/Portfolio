import "../styles/sections/ComicSection.scss";
import PropTypes from "prop-types";

const ComicSection = ({ items }) => {
    return (
      <div className="comic-section">
        {items.map((item, index) => (
          <div className={`comic-frame ${item.side}`} key={index}>
            <div className="comic-bubble">
              <p>{item.text}</p>
            <img src={item.image} alt={`Illustration for ${item.text}`} className="comic-image" />
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  
  ComicSection.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        side: PropTypes.oneOf(["left", "right"]).isRequired, // Nouvelle validation
      })
    ).isRequired,
  };
  
  
  export default ComicSection;