import React from "react";
import { motion } from 'framer-motion';
import Curriculo from '../assets/Image/Lucas Francisco  Currículo.pdf';
import Myimage from "../assets/Image/Lucas_principal.png";

const About: React.FC = () => {
  return (
    <motion.div 
      className="container mx-auto px-10 flex flex-col lg:flex-row items-center justify-between max-w-screen-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {/* Seção de imagem */}
      <motion.div 
        className="lg:w-1/2 flex justify-center mt-8 lg:mt-10"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={Myimage}
          alt="Lucas Santos"
          className="rounded-xl w-full h-full"
        />
      </motion.div>

      {/* Seção de texto */}
      <motion.div 
        className="lg:w-1/2 text-left p-8 mt-20 font-Fonte"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <h1 className="text-3xl font-bold font-Fonte">Um pouco sobre mim</h1>
        <h2 className="text-xl text-gray-700 mb-4 font-Fonte">
          Quem é Lucas Francisco
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed font-Fonte">
          Lorem ipsum dolor sit amet consectetur. Ullamcorper nisl auctor nulla
          risus. Nunc id vulputate non platea nibh pretium. Quis feugiat tellus
          scelerisque velit massa.
        </p>
        <div className="flex space-x-4">
          <motion.button 
            className="bg-customLaranja hover:bg-customLaranjahover text-white py-2 h-11 px-10 rounded-custom font-Fonte"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={Curriculo} target="_blank" rel="noopener noreferrer">Currículo</a>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
