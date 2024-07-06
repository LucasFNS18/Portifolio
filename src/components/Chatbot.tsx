import React from 'react';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-4">Fale comigo</h1>
      <h5 className="text-center text-xl mb-8">Chatbot</h5>
      <div className="flex flex-col lg:flex-row bg-customAzul rounded-2xl p-6">
        {/* Chat Info Section */}
        <div className="flex-1 bg-customAzul text-white p-6 rounded-l-2xl">
          <h3 className="text-xl font-bold mb-4">Azure AI Chatbot</h3>
          <p className="mb-4">
            I'm a designer and developer who creates websites and applications on YouTube. These tutorials will help you learn how to use the latest frameworks!
          </p>
          <p className="mb-8">
            Designer and developer who creates and applications on YouTube. These tutorials will help you learn how to use the latest frameworks!
          </p>
          <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-full">Download Resume</a>
        </div>
        {/* Chat Box Section */}
        <div className="flex-1 bg-white text-black p-6 rounded-[25px]">
          <div className="scroll-area mb-4 h-64 overflow-y-auto">
            <ul id="chat-log">
              <li className="flex items-start mb-4 animate__animated animate__fadeInLeft">
                <span className="avatar bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">A</span>
                <div className="message bg-gray-100 p-4 rounded-lg">
                  Olá tudo bem? Eu sou uma IA, feita para responder todas as suas dúvidas sobre o Lucas. Pergunte quantos anos ele tem!
                </div>
              </li>
              <li className="flex items-start justify-end animate__animated animate__fadeInRight">
                <div className="message bg-gray-100 p-4 rounded-lg">
                  Qual a comida favorita do Lucas? O que ele mais gosta de jogar?
                </div>
                <span className="avatar bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center ml-4">C</span>
              </li>
              <li className="flex items-start mb-4 animate__animated animate__fadeInLeft p-4">
                <span className="avatar bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">A</span>
                <div className="message bg-gray-100 p-4 rounded-lg">
                  Olá tudo bem? Eu sou uma IA, feita para responder todas as suas dúvidas sobre o Lucas. Pergunte quantos anos ele tem!
                </div>
              </li>
            </ul>
          </div>
          <div className="chat-message flex">
            <input type="text" className="flex-1 p-2 rounded-l-lg border border-gray-300" placeholder="Digite sua mensagem aqui..." />
            <button className="bg-customOrange text-white p-2 rounded-r-lg">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
