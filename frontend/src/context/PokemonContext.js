import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import api from '../services/api';

const initialState = {
  pokemonList: [],
  pokemonDetail: {},
  myPokemonList: [],
};

const PokemonContext = createContext(initialState);

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POKEMON_LIST':
      return { ...state, pokemonList: action.payload };
    case 'SET_POKEMON_DETAIL':
      return { ...state, pokemonDetail: action.payload };
    case 'CATCH_POKEMON':
      return { ...state, myPokemonList: [...state.myPokemonList, action.payload] };
    case 'RELEASE_POKEMON':
      return { ...state, myPokemonList: state.myPokemonList.filter(pokemon => pokemon.id !== action.payload) };
    case 'RENAME_POKEMON':
      return {
        ...state,
        myPokemonList: state.myPokemonList.map(pokemon => 
          pokemon.id === action.payload.id ? { ...pokemon, name: action.payload.name, renameCount: action.payload.renameCount+1 } : pokemon
        ),
      };
    default:
      return state;
  }
};

const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const fetchPokemonList = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      const pokemonList = response.data.results.map(pokemon => ({
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[pokemon.url.split('/').length - 2]}.png`
      }));
      dispatch({ type: 'SET_POKEMON_LIST', payload: pokemonList });
    } catch (error) {
      console.error('Failed to fetch Pokemon list', error);
    }
  };

  const fetchPokemonDetail = async (name) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemonDetail = {
      name: response.data.name,
      image: response.data.sprites.front_default,
      types: response.data.types.map(typeInfo => typeInfo.type.name),
      moves: response.data.moves.map(moveInfo => moveInfo.move.name),
    };
    dispatch({ type: 'SET_POKEMON_DETAIL', payload: pokemonDetail });
  };

  const catchPokemon = async (name) => {
    const response = await api.catchPokemon();
    if (response.success) {
      const nickname = prompt('Give your new Pokemon a nickname:');
      const newPokemon = { id: Date.now(), name, nickname, oldName:name, renameCount:0, image: state.pokemonDetail.image };
      dispatch({ type: 'CATCH_POKEMON', payload: newPokemon });
      alert('Success to catch Pokemon');
    } else {
      alert('Failed to catch Pokemon');
    }
  };

  const releasePokemon = async (id) => {
    const response = await api.releasePokemon();
    if (response.success) {
      dispatch({ type: 'RELEASE_POKEMON', payload: id });
    } else {
      alert(`Failed to release Pokemon. Number generated: ${response.number}`);
    }
  };

  const renamePokemon = async (id, name, renameCount) => {
    const response = await api.renamePokemon(name, renameCount);
    dispatch({ type: 'RENAME_POKEMON', payload: { id, name: response.newName, renameCount} });
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonList: state.pokemonList,
        pokemonDetail: state.pokemonDetail,
        myPokemonList: state.myPokemonList,
        fetchPokemonList,
        fetchPokemonDetail,
        catchPokemon,
        releasePokemon,
        renamePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
