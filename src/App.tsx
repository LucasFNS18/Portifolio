import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Icon from './components/Icon';
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
import Experiencia from './components/Experiencia';
import Projeto from './components/Projects';
import Chatbot from './components/Chatbot';

function App() {
  const [count, setCount] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      // Bloquear a rolagem automática no carregamento inicial
      setIsInitialLoad(false);
    } else {
      // Código para rolar ou realizar outras ações após o carregamento inicial
    }
  }, [isInitialLoad]);

  return (
    <div>
      <Navbar />
      
      <Container />
      <Icon />
      <AboutMe />
      <Skills />
      <Experiencia />
      <Projeto />
      <Chatbot/>
      
    </div>
  );
}

export default App;
