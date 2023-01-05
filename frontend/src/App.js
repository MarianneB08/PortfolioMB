// Le composant global "App" contient l'ensemble des composants qui correspondent à chaque section du site. 
// L'architecture choisie pour ce site est une architecture one-page.

import globals from "./styles/globals.module.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Training from "./components/Training";
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from "./components/Footer";


function App() {

  return (
    <div className={globals.main}>
      <Navbar/>
      <Home />
      <Training />
      <Skills />
      <Work />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
