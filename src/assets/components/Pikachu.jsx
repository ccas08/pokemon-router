import React from 'react';
import pikachuImage from '../img/pikachu.jpg';
import '../css/pikachu.css';

function Pikachu() {
  return (
    <div className="pikachu-container">
      <img src={pikachuImage} alt="Pikachu" />
    </div>
  );
}

export default Pikachu;
