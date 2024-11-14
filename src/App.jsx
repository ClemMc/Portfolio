import About from './sections/About';
import Bio from './sections/Bio';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Projects from './sections/Projects';
import './styles/main.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Bio />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
