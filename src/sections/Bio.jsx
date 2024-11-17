import "../styles/sections/bio.scss";
import Coder from "../assets/coder.png";

const Bio = () => {
    return (
        <div id="biographie">
            <h2 className="bio-title">Présentation</h2>
            <div className="bio-container">
                <div className="bio-paragraphs">
                    <div className="top-group">
                        <p className="paragraph 1">Voici Clément Metral, 30 ans, venu tout droit de Peltre en Moselle. Actuellement en plein apprentissage du développement web,
                            il transforme sa passion pour la technologie en un avenir prometteur. Armé de HTML, Sass (son préféré), JavaScript et React, il crée un portfolio 
                            qui reflète à la fois ses compétences et son univers créatif. Avec son ordinateur récemment boosté, il n’y a plus de limites à ce qu’il peut accomplir.</p>
                        <p className="paragraph 2">Clément, c’est aussi un passionné de challenges. Ancien chef cuistot dans la vie quotidienne, il explore aujourd’hui un tout autre menu :
                            celui du code et de la conception. Toujours curieux, il est prêt à expérimenter de nouveaux projets, à repousser ses limites et à s’inspirer d’autres 
                            créateurs pour faire évoluer son style unique, entre sobriété et technologie.</p>
                    </div>
                    <div className="bottom-group">
                        <p className="paragraph 3">Côté loisirs, Clément aime les randonnées en pleine nature, même si une périostite lui impose parfois des pauses. Grand amateur de Coca, 
                            il opte pour la version zéro en attendant de nouvelles résolutions plus saines. Avec un équilibre entre apprentissage, vie active et moments de détente, 
                            il avance sereinement vers ses objectifs.</p>
                        <div className="bio-image">
                            <img src={Coder} alt="Clément" />
                        </div>
                        <p className="paragraph 4">En parallèle, Clément se prépare pour un nouveau poste chez Amazon en tant que préparateur de commandes. Toujours motivé et ambitieux, 
                            il a fait de “chaque étape est une progression” son credo. Qu’il s’agisse de coder, d’apprendre ou de relever de nouveaux défis, Clément est prêt à montrer 
                            de quoi il est capable.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bio;
