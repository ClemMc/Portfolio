import PropTypes from 'prop-types';
import Categories from './Categories';
import '../styles/card.scss';
import '../styles/sections/projects.scss';

const Card = ({ logo, category, description, link, title }) => {
    return (
        <article className="project-card" onClick={() => window.open(link, "_blank")}>
            <img src={logo} alt={`${title} logo`} className="card-logo" />
            <div className="card-info">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <Categories selectedCategories={category} />
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
