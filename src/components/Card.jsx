import PropTypes from 'prop-types';
import Categories from './Categories';
import '../styles/card.scss';

const Card = ({ logo, category, description, link, title }) => {
    return (
        <article className="card shadow" onClick={() => window.open(link, "_blank")}>
            <img src={logo} alt={`${title} logo`} className="card-logo" />
            <div className="card-info">
                <Categories selectedCategories={category} />
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </article>
    );
};

Card.propTypes = {
    logo: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Card;
