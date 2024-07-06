import React, { useState } from "react";
import css from "../index.css"; 
import image from "../assets/Image/image.png"; 

const WorkExperience: React.FC = () => {
  const [openModalId, setOpenModalId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  const projects = [
    {
      id: 1,
      title: "Projeto 1",
      date: "June 2024",
      description: "QA",
      technologies: [
        { name: "HTML", color: "bg-orange-500" },
        { name: "CSS", color: "bg-blue-500" },
        { name: "React", color: "bg-purple-500" },
        { name: "TypeScript", color: "bg-teal-500" },
      ],
      modalContent: "Detalhes adicionais sobre o Projeto 1, realizações, tecnologias utilizadas, etc."
    },
    {
      id: 2,
      title: "Projeto 2",
      date: "June 2022-2024",
      description: "Ecommerce DropShipping",
      technologies: [
        { name: "HTML", color: "bg-orange-500" },
        { name: "CSS", color: "bg-blue-500" },
        { name: "React", color: "bg-purple-500" },
        { name: "TypeScript", color: "bg-teal-500" },
      ],
      modalContent: "Detalhes adicionais sobre o Projeto 2, realizações, tecnologias utilizadas, etc."
    },
    {
      id: 3,
      title: "Projeto 3",
      date: "June 2023-2024",
      description: "E-commerce",
      technologies: [
        { name: "HTML", color: "bg-orange-500" },
        { name: "CSS", color: "bg-blue-500" },
        { name: "React", color: "bg-purple-500" },
        { name: "TypeScript", color: "bg-teal-500" },
      ],
      modalContent: "Detalhes adicionais sobre o Projeto 3, realizações, tecnologias utilizadas, etc."
    },
    {
      id: 4,
      title: "Projeto 4",
      date: "June 2023-2024",
      description: "E-commerce",
      technologies: [
        { name: "HTML", color: "bg-orange-500" },
        { name: "CSS", color: "bg-blue-500" },
        { name: "React", color: "bg-purple-500" },
        { name: "TypeScript", color: "bg-teal-500" },
      ],
      modalContent: "Detalhes adicionais sobre o Projeto 4, realizações, tecnologias utilizadas, etc."
    },
    {
      id: 5,
      title: "Projeto 5",
      date: "June 2023-2024",
      description: "E-commerce",
      technologies: [
        { name: "HTML", color: "bg-orange-500" },
        { name: "CSS", color: "bg-blue-500" },
        { name: "React", color: "bg-purple-500" },
        { name: "TypeScript", color: "bg-teal-500" },
      ],
      modalContent: "Detalhes adicionais sobre o Projeto 5, realizações, tecnologias utilizadas, etc."
    },
    {
      id: 6,
      title: "Projeto 6",
      date: "June 2023-2024",
      description: "E-commerce",
      technologies: [
        { name: "HTML", color: "bg-orange-500" },
        { name: "CSS", color: "bg-blue-500" },
        { name: "React", color: "bg-purple-500" },
        { name: "TypeScript", color: "bg-teal-500" },
      ],
      modalContent: "Escreva alguma coisa aqui"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-14">
      <h1 className="text-center text-3xl font-bold mb-8">Projetos</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-customOrange rounded-[30px] overflow-hidden cursor-pointer" onClick={() => openModal(project.id)}>
            <div className="bg-customOrange h-13 p-5 flex items-center justify-center">
              <img src={image} className="w-full h-auto rounded-[15px]" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <h3 className="text-md font-light">{project.date}</h3>
              <div className="flex flex-wrap mt-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className={`${tech.color} text-white rounded-full py-1 px-3 text-xs mr-2 mb-2`}>{tech.name}</span>
                ))}
              </div>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-8" />

      {projects.map(project => (
        openModalId === project.id && (
          <div key={project.id} className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
            <div className="bg-white p-8 rounded-lg w-3/4 max-w-lg" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-black focus:outline-none">✕</button>
              <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
              <img src={image} className="w-full h-auto rounded-[15px] mb-4" />
              <h3 className="text-md font-light">{project.date}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="text-gray-600 mt-2">{project.modalContent}</p>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default WorkExperience;
