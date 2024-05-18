
// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Pikachu';
import Pokemones from './assets/components/Pokemones';
import PokemonDetail from './assets/components/PokemonDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<PokemonDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


