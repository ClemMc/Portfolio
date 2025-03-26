import '../styles/sections/projects.scss';
import BookiLogo from '../assets/BookiLogo.png';
import ohmyfoodLogo from '../assets/ohmyfood2.png';
import SophieBluelLogo from '../assets/SophieBluelLogo.png';
import KasaLogo from '../assets/KasaLogo.png';
import Card from '../components/Card';

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
    tags: ['javascript'],
    link: 'https://clemmc.github.io/ohmyfood/'
  },

  {
    id: 4,
    logo: KasaLogo,
    title: 'Kasa',
    description: 'Créez une application web de location immobilière avec React',
    tags: ['react','sass'],
    link: 'https://clemmc.github.io/ohmyfood/'
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">Ses Projets</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <Card logo={project.logo} category={project.tags} description={project.description} link={project.link}  key={project.id} />

        ))}
      </div>
    </section>
  );

  // return (
  //   <>
  //   <h1>Projets</h1>
  //   <Card logo={ohmyfoodLogo} category={['react', 'sass']} description="Un site personnel pour présenter mes compétences et projets." link="#" title="Portfolio" />
  //   </>

  // )
};

export default Projects;