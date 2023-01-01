import globals from "./styles/globals.module.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from "./components/Footer";

function App() {

  return (
    <div className={globals.main}>
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
