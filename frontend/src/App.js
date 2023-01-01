import globals from "./styles/globals.module.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {

  return (
    <div className={globals.main}>
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
