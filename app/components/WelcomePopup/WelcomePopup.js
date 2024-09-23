'use client';
import { useState } from 'react';
import './WelcomePopup.css'; // Importando o arquivo CSS

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(true); // Estado para controlar a exibição do pop-up

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
            <p className="popup-message">Preencha todos os campos abaixo para obter uma previsão precisa.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomePopup;




