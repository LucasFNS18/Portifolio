import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-white w-full mt-4 shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center max-w-screen-lg">
          <div className="flex items-center">
            <div className="bg-customLaranja text-white rounded-full w-8 h-8 flex items-center justify-center text-xl semi-bold">
              <h1>L</h1>
            </div>
            <h1 className="ml-2 text-black text-lg font-semibold font-Fonte">Lucas Santos</h1>
          </div>
          <div className="flex items-center lg:hidden">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-black focus:outline-none">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
          <nav className="hidden lg:flex lg:items-center space-x-6">
            <a href="#home" className="text-gray-500 hover:text-black font-Fonte px-2">Início</a>
            <a href="#resume" className="text-gray-500 hover:text-black font-Fonte px-2">Resumo</a>
            <a href="#projects" className="text-gray-500 hover:text-black font-Fonte px-2">Projetos</a>
            <a href="#contact" className="bg-customAzul text-white py-2 px-3 rounded-custom hover:bg-customAzulhover font-Fonte">Meu contato</a>
          </nav>
        </div>
        <hr className='mt-2'></hr>
      </header>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-lg" onClick={(e) => e.stopPropagation()}>
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-500 hover:text-black focus:outline-none">
              ✕
            </button>
            <nav className="flex flex-col items-center space-y-4">
              <a href="#home" className="text-gray-500 hover:text-black font-Fonte">Início</a>
              <a href="#resume" className="text-gray-500 hover:text-black font-Fonte">Resumo</a>
              <a href="#projects" className="text-gray-500 hover:text-black font-Fonte">Projetos</a>
              <a href="#contact" className="bg-customAzul text-white py-2 px-3 rounded-custom hover:bg-customAzulhover font-Fonte">Meu contato</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
