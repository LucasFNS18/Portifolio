import React from 'react';
import Myimage from '../assets/Image/image.png'

const Container: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between max-w-screen-lg">
    {/* Seção de texto */}
    <div className="lg:w-1/2 text-left p-8 mt-20">
      <h1 className="text-4xl font-bold mb-2">Olá, sou o Lucas Santos</h1>
      <h2 className="text-xl text-gray-700 mb-4">Programador Front-end</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Ullamcorper nisl auctor nulla risus. Nunc id
        vulputate non platea nibh pretium. Quis feugiat tellus scelerisque velit massa.
      </p>
      <div className="flex space-x-4">
        <button className="bg-customAzul hover:bg-customAzulhover text-white py-3 px-10 rounded-custom">Contato</button>
        <button className="bg-customLaranja hover:bg-customLaranjahover text-white py-2 px-10 rounded-custom">Currículo</button>
      </div>
    </div>
    {/* Seção de imagem */}
    <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-10">
      <img src={Myimage} alt="Lucas Santos" className="rounded-xl w-full h-auto" />
    </div>
  </div>
  );
};

export default Container;
