// src/components/Pokemones.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Pokemones() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => setPokemones(data.results));
  }, []);

  return (
    <div>
      <h1>Lista de Pokemones</h1>
      <ul>
        {pokemones.map(pokemon => (
          <li key={pokemon.name}>
            <Link to={`/pokemones/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemones;
