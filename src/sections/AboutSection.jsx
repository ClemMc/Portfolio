import ComicSection from "../components/ComicSection";
import ordi from "../assets/ordi.webp";
import magasin from "../assets/magasin.webp";
import loisir from "../assets/loisir.webp";

const aboutItems = [
  {
    text: "Après plusieurs années en grande distribution. Il a décidé de se réorienter vers le numérique.",
    image: magasin,
    side: "left",
  },
  {
    text: "Il a commencé une formation et, quelques mois plus tard, ses progrès étaient impressionnants.",
    image: ordi,
    side: "right",
  },
  {
    text: "Aujourd'hui, il continue à se perfectionner pour transformer sa passion en métier.",
    image: ordi,
    side: "right",
  },
  {
    text: "À côté de ça, Clément adore le sport, les jeux vidéo, la lecture et le cinéma.",
    image: loisir,
    side: "right",
  },
];

const AboutSection = () => {
  return (
    <section id="about">
      <h2 className="about-title">Son histoire</h2>
      <ComicSection items={aboutItems} />
    </section>
  );
};

export default AboutSection;
