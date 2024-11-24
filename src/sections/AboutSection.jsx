import ComicSection from "../components/ComicSection";
import ordi from "../assets/ordi.webp";
import magasin from "../assets/magasin.webp";
import sport from "../assets/sport.webp";

const aboutItems = [
  {
    text: "Je m'appelle Clément et je suis passionné par le développement web.",
    image: magasin,
  },
  {
    text: "J'adore apprendre de nouvelles technologies comme React et Sass.",
    image: ordi,
  },
  {
    text: "Mon objectif est de devenir un développeur full-stack compétent.",
    image: sport,
  },
];

const AboutSection = () => {
  return (
    <section id="about">
      <h2>À propos de moi</h2>
      <ComicSection items={aboutItems} />
    </section>
  );
};

export default AboutSection;
