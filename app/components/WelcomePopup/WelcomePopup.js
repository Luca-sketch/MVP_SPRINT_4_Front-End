'use client';
import { useState } from 'react';
import './WelcomePopup.css'; 

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(true); 

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="popup-close" onClick={handleClosePopup}>
              &times;
            </button>
            <h1 className="popup-title">Bem-vindo ao sistema de predição de desistência</h1>
            <p className="popup-message">Preencha todos os campos para obter uma previsão.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomePopup;




