import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !(modalRef.current as HTMLDivElement).contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between m-3 ml-12 px-4 py-2 bg-white">
      <div className="flex items-center space-x-2">
        <div className="bg-customLaranja text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-semibold">
          <span>L</span>
        </div>
        <span className="text-black text-lg font-semibold font-Fonte">Lucas Santos</span>
      </div>
      {!isMobile && (
        <div className="flex items-center space-x-4 mr-12">
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900 font-Fonte">Início</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 font-Fonte">Resumo</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 font-Fonte">Projetos</a>
          </nav>
          <button className="bg-customAzul text-white py-2 px-4 rounded-custom font-FonteBold hover:bg-customAzulhover">
            Meu contato
          </button>
        </div>
      )}
      {isMobile && (
        <div className="flex items-center">
          <motion.button
            onClick={toggleModal}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                initial="closed"
                animate={isModalOpen ? "open" : "closed"}
                variants={{
                  closed: { d: "M4 6h16", rotate: 0 },
                  open: { d: "M6 6L18 18", rotate: 45 },
                }}
                transition={{ duration: 0.3 }}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                initial="closed"
                animate={isModalOpen ? "open" : "closed"}
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 12h16"
              />
              <motion.path
                initial="closed"
                animate={isModalOpen ? "open" : "closed"}
                variants={{
                  closed: { d: "M4 18h16", rotate: 0 },
                  open: { d: "M6 18L18 6", rotate: -45 },
                }}
                transition={{ duration: 0.3 }}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>
      )}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white p-8 rounded-lg"
              initial={{ rotate: 90, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.8, opacity: 0 }}
            >
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 font-Fonte text-center">Início</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-Fonte text-center">Resumo</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-Fonte text-center">Projetos</a>
                <button className="bg-customAzulButton text-white py-2 px-4 rounded-custom font-FonteBold hover:bg-customAzulhover mt-4">
                  Meu contato
                </button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
