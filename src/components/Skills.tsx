import React from 'react';
import css from '../index.css'

const Skills: React.FC = () => {
  return (
    <div className='text-3xl font-bold mb-2 font-Fonte text-center mt-10'>
      Habilidades
      <div className='container mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-between max-w-screen-lg bg-customAzul rounded-[75px] mt-8'>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full p-6">
          <div className="text-white text-left w-full lg:w-1/2 space-y-4">
            <div className="mt-6">
              <h4 className="text-xl font-semibold">Frontend</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-500 text-white rounded-full py-1 px-3 text-sm">HTML</span>
                <span className="bg-blue-500 text-white rounded-full py-1 px-3 text-sm">CSS</span>
                <span className="bg-blue-500 text-white rounded-full py-1 px-3 text-sm">JS</span>
                <span className="bg-blue-500 text-white rounded-full py-1 px-3 text-sm">React</span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Backend</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-500 text-white rounded-full py-1 px-3 text-sm">Node JS</span>
                <span className="bg-blue-500 text-white rounded-full py-1 px-3 text-sm">Next JS</span>
                <span className="bg-blue-500 text-white rounded-full py-1 px-3 text-sm">MongoDB</span>
                <span className="bg-blue-500 text-white rounded-full py-1 px-3 text-sm">Microsoft Azure</span>
              </div>
            </div>
          </div>
          <div className="text-white w-full lg:w-1/2 mt-6 lg:mt-0 space-y-4">
            <h2 className="text-2xl font-bold text-left">Escrever algo aqui</h2>
            <p className="text-sm text-left">
              I'm a designer and developer who creates websites and applications on YouTube. These tutorials will help you learn how to use the latest frameworks!
            </p>
            <p className="text-sm text-left">
              Designer and developer who creates and applications on YouTube. These tutorials will help you learn how to use the latest frameworks!
            </p>
          </div>
        </div>
      </div>
      <hr className='my-14'/>
    </div>
  );
};

export default Skills;
