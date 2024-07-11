import React, { useEffect, useState } from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  const fullName = "Lucas Francisco do Nascimento Santos";
  const shortName = "LFNS";
  const [displayText, setDisplayText] = useState("");
  const [animationStage, setAnimationStage] = useState(0); // 0 = typing, 1 = pause, 2 = transition

  useEffect(() => {
    let currentText = "";
    const typingSpeed = 30; // Reduzir o tempo de digitação para 38ms por caractere
    const delayBeforeShrink = 1000;

    const typeFullName = () => {
      if (currentText.length < fullName.length) {
        currentText += fullName.charAt(currentText.length);
        setDisplayText(currentText);
        setTimeout(typeFullName, typingSpeed);
      } else {
        setTimeout(() => setAnimationStage(1), delayBeforeShrink);
      }
    };

    typeFullName();
  }, []);

  useEffect(() => {
    if (animationStage === 1) {
      setTimeout(() => {
        setDisplayText(shortName);
        setAnimationStage(2);
      }, 500); // Tempo de pausa antes da transição
    }
  }, [animationStage]);

  return (
    <div className="loading-spinner-container">
      {animationStage !== 2 && <div className="spinner"></div>}
      <h1 className={`typing-text ${animationStage === 2 ? "shrink" : ""}`}>{displayText}</h1>
    </div>
  );
};

export default LoadingSpinner;
