import React from 'react';
{/* Aqui colocarei o CSS */}
{/* Aqui colocarei as imagens */}
import myimage from '../assets/Image/Lucas_principal.png'
const About: React.FC = () => {
  return (
    <div className="container mx-auto px-10  flex flex-col lg:flex-row items-center justify-between max-w-screen-lg">
    {/* Seção de imagem */}
    <div className="lg:w-1/2 flex justify-center mt-8  lg:mt-10">
      <img src={myimage} alt="Lucas Santos" className="rounded-xl w-full h-full" />
    </div>

     {/* Seção de texto */}
     <div className="lg:w-1/2 text-left p-8 mt-20 font-Fonte">
      <h1 className="text-3xl font-bold  font-Fonte">Um pouco sobre mim</h1>
      <h2 className="text-xl text-gray-700 mb-4 font-Fonte">Quem é Lucas Francisco</h2>
      <p className="text-gray-600 mb-6 leading-relaxed font-Fonte">
        Lorem ipsum dolor sit amet consectetur. Ullamcorper nisl auctor nulla risus. Nunc id
        vulputate non platea nibh pretium. Quis feugiat tellus scelerisque velit massa.
      </p>
      <div className="flex space-x-4">
        <button className="bg-customLaranja hover:bg-customLaranjahover text-white py-2 h-11 px-10 rounded-custom font-Fonte">Currículo</button>
      </div>
      
      
    </div>
    
    
  </div>
   
   
  );
};

export default About;
