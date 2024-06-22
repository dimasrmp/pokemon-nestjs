import React, { useEffect, useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import PokemonList from '../components/PokemonList';

const PokemonListPage = () => {
  const { pokemonList, fetchPokemonList } = useContext(PokemonContext);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
};

export default PokemonListPage;
