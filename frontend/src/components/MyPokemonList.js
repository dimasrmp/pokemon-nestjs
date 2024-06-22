import React from 'react';

const MyPokemonList = ({ myPokemonList, onRelease, onRename }) => {
  return (
    <ul>
      {myPokemonList.map(pokemon => (
        <li key={pokemon.id}>
            <img src={pokemon.image} alt={pokemon.name} />
            <p> Name : {pokemon.name}</p>
            <p> Nickname: {pokemon.nickname}</p>
            <button onClick={()=> onRename(pokemon.id, pokemon.oldName, pokemon.renameCount)}> Rename </button>
            <button onClick={()=> onRelease(pokemon.id)}> Release </button>
        </li>
      ))}
    </ul>
  );
};

export default MyPokemonList;
