import PropTypes from 'prop-types';
import Categories from './Categories';
import '../styles/card.scss';
import '../styles/sections/projects.scss';

const Card = ({ logo, category, description, link }) => {
    return (
        <article className="project-card" onClick={() => window.open(link, "_blank")}>
            <img src={logo}  className="card-logo" />
            <div className="card-info">
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
};

export default Card;
