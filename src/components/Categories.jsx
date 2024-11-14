import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSass, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import '../styles/categories.scss';

const categoriesList = {
    html: { icon: faHtml5 },
    css: { icon: faCss3Alt },
    sass: { icon: faSass },
    javascript: { icon: faJs },
    react: { icon: faReact },
};

const Categories = ({ selectedCategories = [] }) => {
    return (
        <div className="categories">
            {selectedCategories.map((catKey) =>
                categoriesList[catKey.toLowerCase()] ? (
                    <div key={catKey} className="category">
                        <FontAwesomeIcon icon={categoriesList[catKey.toLowerCase()].icon} />
                    </div>
                ) : null
            )}
        </div>
    );
};

Categories.propTypes = {
    selectedCategories: PropTypes.arrayOf(PropTypes.string),
};

export default Categories;
