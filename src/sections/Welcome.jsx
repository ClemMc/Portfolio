// import { Typewriter } from 'react-simple-typewriter';
import '../styles/sections/about.scss';
import profileImage from '../assets/moi.png';
import Typewriter from 'typewriter-effect';

const Welcome = () => {
    return (

      <div id="Welcome">
        <section className="about">
          <div className="about-image">
            <img src={profileImage} alt="Clément" />
          </div>
          <div className="about-text">
            {/* <Typewriter
              words={[
                "Bien le bonjour, visiteur ! Je me présente : Clément Metral. Bienvenue dans mon univers !"
              ]}
              cursor 
              cursorStyle="_" 
              typeSpeed={50}
              deleteSpeed={0} 
            /> */}
              {/* <div className="typewriter">
                Bien le bonjour, visiteur ! Je me présente :
              </div>
              <div className="typewriter-2">
                <strong>Clément Metral</strong>. Bienvenue dans mon univers !
              </div> */}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString('Bien le bonjour, visiteur ! Je vous présente : <strong>Clément Metral</strong>. Bienvenue dans son univers !')
                  .start();
              }}
            />
          </div>
        </section>
      </div>

    );
  };
  
  export default Welcome;