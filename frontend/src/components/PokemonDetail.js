import React from 'react';

const PokemonDetail = ({ pokemonDetail, onCatch }) => {
  if (!pokemonDetail || !pokemonDetail.types || !pokemonDetail.moves) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemonDetail.name}</h1>
      <img src={pokemonDetail.image} alt={pokemonDetail.name} />
      <p>Type: {pokemonDetail.types.join(', ')}</p>
      <p>Moves: {pokemonDetail.moves.join(', ')}</p>
      <button onClick={onCatch}>Catch Pokemon</button>
    </div>
  );
};

export default PokemonDetail;
