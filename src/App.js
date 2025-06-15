import logo from './logo.svg';
import './App.css';
import Headers from './components/Headers';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return(
    <>
        <Headers/>
        <Home />
        <Skills />
        <Projects/>
        <Contact/>
        <Footer/>
    </>

  )
}



export default App;
