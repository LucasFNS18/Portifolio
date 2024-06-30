import React, { useState } from 'react';
import css from '../index.css';
import image from '../assets/Image/image.png';

const WorkExperience: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const openModal = (cardIndex: number) => {
    setSelectedCard(cardIndex);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-8">Experiencia</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((cardIndex) => (
          <div
            key={cardIndex}
            className="bg-orange-100 rounded-[30px] shadow-lg overflow-hidden cursor-pointer"
            onClick={() => openModal(cardIndex)}
          >
            <div className="bg-orange-100 h-13 p-5 flex items-center justify-center">
              <div>
                <img src={image} className="w-full h-auto rounded-[15px]" />
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Workplace {cardIndex}</h2>
              <h3 className="text-md font-light">June 2024</h3>
              <p className="text-gray-600 mt-2">
                This project used HTML, CSS, and JavaScript to create a portfolio website design that looks good.
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedCard !== null && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-lg relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-black focus:outline-none">
              ✕
            </button>
            <div className="flex flex-col items-center">
              <img src={image} className="w-full h-auto rounded-[15px] mb-4" />
              <h2 className="text-xl font-semibold">Workplace {selectedCard}</h2>
              <h3 className="text-md font-light">June 2024</h3>
              <p className="text-gray-600 mt-2 text-center">
                This project used HTML, CSS, and JavaScript to create a portfolio website design that looks good.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
