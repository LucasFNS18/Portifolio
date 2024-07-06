import React from 'react';
import { motion } from 'framer-motion';
import Myimage from '../assets/Image/teste.png';
import Curriculo from '../assets/Image/Lucas Francisco  Currículo.pdf';

const Container: React.FC = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between max-w-screen-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {/* Seção de texto */}
      <div className="lg:w-1/2 text-left p-8 mt-20">
        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          Olá, sou o Lucas Santos
        </motion.h1>
        <motion.h2
          className="text-xl text-gray-700 mb-4"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.2 }}
        >
          Programador Front-end
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.4 }}
        >
          Lorem ipsum dolor sit amet consectetur. Ullamcorper nisl auctor nulla risus. Nunc id
          vulputate non platea nibh pretium. Quis feugiat tellus scelerisque velit massa.
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-customAzul hover:bg-customAzulhover text-white py-3 px-10 rounded-custom"
          >
            Contato
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-customLaranja hover:bg-customLaranjahover text-white py-2 px-10 rounded-custom"
          >
            <a href={Curriculo} target="_blank" rel="noopener noreferrer">Currículo</a>
          </motion.button>
        </motion.div>
      </div>
      {/* Seção de imagem */}
      <motion.div
        className="lg:w-1/2 flex justify-center mt-8 lg:mt-[-50px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.8 }}
      >
        <img src={Myimage} alt="Lucas Santos" className="rounded-xl" />
      </motion.div>
    </motion.div>
  );
};

export default Container;
