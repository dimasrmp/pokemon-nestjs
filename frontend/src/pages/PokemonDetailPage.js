import React, { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import PokemonDetail from '../components/PokemonDetail';

const PokemonDetailPage = () => {
  const { name } = useParams();
  const { pokemonDetail, fetchPokemonDetail, catchPokemon } = useContext(PokemonContext);

  useEffect(() => {
    fetchPokemonDetail(name);
  }, [name]);

  const handleCatch = () => {
    catchPokemon(name);
  };

  return (
    <div>
      <PokemonDetail pokemonDetail={pokemonDetail} onCatch={handleCatch} />
    </div>
  );
};

export default PokemonDetailPage;
