import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Gambiarra from './components/gambiarra';
import Container from './components/Container';
import Logos from './components/Logos';
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
import Experiencia from './components/Experiencia';
import Projeto from './components/Projects';
import Chatbot from './components/Chatbot';

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Navbar />
    <Gambiarra />
    <Container />
    <Logos />
   <AboutMe/>
   <Skills />
   <Experiencia />
   <Projeto/>
   <Chatbot/>
   

    
  </div>
  )
}

export default App
