import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <hr />
        <About />
        <hr />
        <Skills />
        <hr />
        <Services />
        <hr />
        <Projects />
        <hr />
        <Contact />
        
      </main>
      <Footer />
    </>
  );
}

export default App;
