import React, { useState } from "react"; // Importa React e useState para gerenciar o estado do componente
import css from "../index.css"; // Importa o arquivo CSS (substitua pelo caminho correto do seu CSS)
import image from "../assets/Image/image.png"; // Importa a imagem a ser usada nos cards

const WorkExperience: React.FC = () => {
  // Define um estado para controlar se o modal está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Modal 2    
  const openModal2 = () => {
    setIsOpen2(true);
  };

  const closeModal2 = () => {
    setIsOpen2(false);
  };

  // Modal 3  
  const openModal3 = () => {
    setIsOpen3(true);
  };

  const closeModal3 = () => {
    setIsOpen3(false);
  };

  return (
    <div className="container mx-auto px-4 py-14">
      {/* Título da seção principal */}
      <h1 className="text-center text-3xl font-bold mb-8">Experiencia</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {/* Section 1 */}
        <div className="bg-customOrange rounded-[30px] shadow-lg overflow-hidden cursor-pointer" onClick={openModal}>
          <div className="bg-customOrange  h-13 p-5 flex items-center justify-center">
            <img src={image} className="w-full h-auto rounded-[15px]" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">ZBRA QA</h2>
            <h3 className="text-md font-light">June 2024</h3>
            <p className="text-gray-600 mt-2">QA</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-customOrange  rounded-[30px] shadow-lg overflow-hidden cursor-pointer" onClick={openModal2}>
          <div className="bg-customOrange h-13 p-5 flex items-center justify-center">
            <img src={image} className="w-full h-auto rounded-[15px]" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">JumpGeek</h2>
            <h3 className="text-md font-light">June 2022-2024</h3>
            <p className="text-gray-600 mt-2">Ecommerce DropShipping</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-customOrange  rounded-[35px] shadow-lg overflow-hidden cursor-pointer" onClick={openModal3}>
          <div className="bg-customOrange  h-13 p-5 flex items-center justify-center">
            <img src={image} className="w-full h-auto rounded-[15px]" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Vendetuonline</h2>
            <h3 className="text-md font-light">June 2023-2024</h3>
            <p className="text-gray-600 mt-2">E-comerce</p>
          </div>
        </div>
        
      </div>
      <hr className="my-8 w-" />

      {/* Modal 1*/}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-lg" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-black focus:outline-none">✕</button>
            <h2 className="text-xl font-semibold mb-4">ZBRA QA</h2>
            <img src={image} className="w-full h-auto rounded-[15px] mb-4" />
            <h3 className="text-md font-light">June 2024</h3>
            <p className="text-gray-600 mt-2">QA</p>
            <p className="text-gray-600 mt-2">Detalhes adicionais sobre o projeto, realizações, tecnologias utilizadas, etc.</p>
          </div>
        </div>
      )}

      {/* Modal 2*/}
      {isOpen2 && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal2}>
          <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-lg" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal2} className="absolute top-4 right-4 text-gray-500 hover:text-black focus:outline-none">✕</button>
            <h2 className="text-xl font-semibold mb-4">JumpGeek</h2>
            <img src={image} className="w-full h-auto rounded-[15px] mb-4" />
            <h3 className="text-md font-light">June 2022-2024</h3>
            <p className="text-gray-600 mt-2">E-commerce</p>
            <p className="text-gray-600 mt-2">Detalhes adicionais sobre o projeto, realizações, tecnologias utilizadas, etc.</p>
          </div>
        </div>
      )}

      {/* Modal 3*/}
      {isOpen3 && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal3}>
          <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-lg" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal3} className="absolute top-4 right-4 text-gray-500 hover:text-black focus:outline-none">✕</button>
            <h2 className="text-xl font-semibold mb-4">Vendetuonline</h2>
            <img src={image} className="w-full h-auto rounded-[15px] mb-4" />
            <h3 className="text-md font-light">June 2023-2024</h3>
            <p className="text-gray-600 mt-2">E-commerce</p>
            <p className="text-gray-600 mt-2">Detalhes adicionais sobre o projeto, realizações, tecnologias utilizadas, etc.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
