import React from 'react';
import { Link } from 'react-router-dom';

const PokemonList = ({ pokemonList }) => {
  return (
    <ul>
      {pokemonList.map(pokemon => (
        <li key={pokemon.name}>
          <Link to={`/pokemon/${pokemon.name}`}>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
