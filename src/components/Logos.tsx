import React from 'react';
import Vscodeimage from '../assets/Image/vscode-original 1.png';
import Azureimage from '../assets/Image/azure-original 1.png';
import Ccs4image from '../assets/Image/css3-original 1.png';
import Htmlimage from '../assets/Image/html5-original 1.png';
import Javaimage from '../assets/Image/javascript-original 1.png';
import Nextjsimage from '../assets/Image/nextjs-original 1.png';
import Pythonimage from '../assets/Image/python-original 1.png';
import ReactImage from '../assets/Image/react-original 1.png';
import '../components/navbarchrome.css'; // Certifique-se de que o caminho está correto

const Logos: React.FC = () => {
  return (
    <div className="containerr w-full">
      <div className="logos">
        <div className="marque">
          <div className="track">
            <img src={Vscodeimage} alt="VSCode" className="w-24 h-24" />
            <img src={Azureimage} alt="Azure" className="w-24 h-24" />
            <img src={Ccs4image} alt="CSS3" className="w-24 h-24" />
            <img src={Htmlimage} alt="HTML5" className="w-24 h-24" />
            <img src={Javaimage} alt="JavaScript" className="w-24 h-24" />
            <img src={Nextjsimage} alt="Next.js" className="w-24 h-24" />
            <img src={Pythonimage} alt="Python" className="w-24 h-24" />
            <img src={ReactImage} alt="React" className="w-24 h-24" />

            <img src={Vscodeimage} alt="VSCode" className="w-24 h-24" />
            <img src={Azureimage} alt="Azure" className="w-24 h-24" />
            <img src={Ccs4image} alt="CSS3" className="w-24 h-24" />
            <img src={Htmlimage} alt="HTML5" className="w-24 h-24" />
            <img src={Javaimage} alt="JavaScript" className="w-24 h-24" />
            <img src={Nextjsimage} alt="Next.js" className="w-24 h-24" />
            <img src={Pythonimage} alt="Python" className="w-24 h-24" />
            <img src={ReactImage} alt="React" className="w-24 h-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
