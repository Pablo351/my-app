import './App.scss';
import Header from './Componentes/Header/Header.js';
import Home from './Componentes/Home/Home.js';
import About from './Componentes/About/About.js';
import Skills from './Componentes/Skills/Skills.js';
import Contact from './Componentes/Contact/Contact.js';

const App = () => {
  return (
    <div className="App">
      < Header />
      < Home />
      < About />
      < Skills />
      < Contact />
    </div>
  );
}

export default App;
