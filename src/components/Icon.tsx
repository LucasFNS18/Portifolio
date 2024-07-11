import React from 'react';
import Vscodeimage from '../assets/Image/Icon/vs-code-original 3.png';
import Azureimage from '../assets/Image/Icon/azure-original 3.png';
import Ccs4image from '../assets/Image/Icon/css-original 3.png';
import Htmlimage from '../assets/Image/Icon/html5-original 3.png';
import Taiwild from '../assets/Image/Icon/Tailwind-original 3.png';
import Botstrap from '../assets/Image/Icon/Botstrap-original 3.png';
import Reactimg from '../assets/Image/Icon/React-Original 3.png';
import vite from '../assets/Image/Icon/Vite-original 3.png';
import next from '../assets/Image/Icon/nextjs-original 3.png';
import figma from '../assets/Image/Icon/Figma-logo 1.png';
import node from '../assets/Image/Icon/Node-original 3.png';
import mongodb from '../assets/Image/Icon/Mongo-original 3.png';
import Wordpress from '../assets/Image/Icon/Wordpress-original 3.png';
import Python from '../assets/Image/Icon/python-original 3.png';
import java from '../assets/Image/Icon/Java-original 3.png';

import '../components/navbarchrome.css'; // Certifique-se de que o caminho está correto

const Icon: React.FC = () => {
  return (
    <div className="containerr w-full">
      <div className="logos">   
        <div className="marque">
          <div className="track">
            <img src={Vscodeimage} alt="VSCode" className="w-24 h-24" />
            <img src={Azureimage} alt="Azure" className="w-24 h-24" />
            <img src={Ccs4image} alt="CSS3" className="w-24 h-24" />
            <img src={Htmlimage} alt="HTML5" className="w-24 h-24" />
            <img src={Taiwild} alt="Taiwinld" className="w-24 h-24" />
            <img src={Botstrap} alt="Botstrap" className="w-24 h-24" />
            <img src={Reactimg} alt="React" className="w-24 h-24" />
            <img src={vite} alt="Vite.js" className="w-24 h-24" />
            <img src={next} alt="Next.js" className="w-24 h-24" />
            <img src={figma} alt="Figma" className="w-24 h-24" />
            <img src={node} alt="Node.js" className="w-24 h-24" />
            <img src={mongodb} alt="MOngodb" className="w-32 h-24" />
            <img src={Wordpress} alt="Wordpress" className="w-24 h-24" />
            <img src={Python} alt="Python" className="w-24 h-24" />     
            <img src={java} alt="Java" className="w-24 h-24" />    
            <img src={Vscodeimage} alt="VSCode" className="w-24 h-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icon;
