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
import LoadingSpinner from './components/LoadingSpinner'


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Tempo de carregamento de 4 segundos = 4000
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  

  return (
    <div>
      <Navbar />
      <Container />
      <Icon />
      <AboutMe />
      <Skills />
      <Experiencia />
      <Projeto />
      <Chatbot />
    </div>
  );
}

export default App;
