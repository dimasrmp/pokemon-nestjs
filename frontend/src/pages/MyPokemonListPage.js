import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import MyPokemonList from '../components/MyPokemonList';

const MyPokemonListPage = () => {
  const { myPokemonList, releasePokemon, renamePokemon } = useContext(PokemonContext);

  return (
    <div>
      <h1>My Pokemon List</h1>
      <MyPokemonList myPokemonList={myPokemonList} onRelease={releasePokemon} onRename={renamePokemon} />
    </div>
  );
};

export default MyPokemonListPage;
