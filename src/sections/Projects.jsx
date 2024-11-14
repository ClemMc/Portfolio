import '../styles/sections/projects.scss';
import BookiLogo from '../assets/BookiLogo.png';
import ohmyfoodLogo from '../assets/ohmyfood.png';
import SophieBluelLogo from '../assets/SophieBluelLogo.png';
import KasaLogo from '../assets/KasaLogo.png';

const projects = [
  {
    id: 1,
    logo: BookiLogo,
    title: 'Booki',
    description: 'Créez la page d\'accueil d\'une agence de voyage avec HTML & CSS',
    tags: ['HTML', 'CSS'],
    link: 'https://clemmc.github.io/P3-Booki/',
  },

  {
    id: 2,
    logo: ohmyfoodLogo,
    title: 'Ohmyfood',
    description: 'Améliorez l\'interface d\'un site mobile avec des animations CSS',
    tags: ['html','css','sass'],
    link: 'https://clemmc.github.io/ohmyfood/'
  },

  {
    id: 3,
    logo: SophieBluelLogo,
    title: 'SophieBluel',
    description: 'Créez une page web dynamique avec JavaScript',
    tags: ['html','css','sass'],
    link: 'https://clemmc.github.io/ohmyfood/'
  },

  {
    id: 4,
    logo: KasaLogo,
    title: 'Kasa',
    description: 'Créez une application web de location immobilière avec React',
    tags: ['html','css','sass'],
    link: 'https://clemmc.github.io/ohmyfood/'
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <a href={project.link} key={project.id} className="project-card" target="_blank" rel="noopener noreferrer">
            <img src={project.logo} alt={`${project.title} logo`} className="card-logo" />
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;