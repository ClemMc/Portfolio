import Welcome from './sections/Welcome';
import Bio from './sections/Bio';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Projects from './sections/Projects';
import AboutSection from './sections/AboutSection';

import './styles/main.scss';


function App() {
  return (
    <div className="App">

      <Header />
      <main>
        <Welcome />
        <Bio />
        <AboutSection />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
