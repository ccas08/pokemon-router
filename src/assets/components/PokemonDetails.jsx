// src/components/PokemonDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {/* Mostrar más detalles si es necesario */}
    </div>
  );
}

export default PokemonDetail;
