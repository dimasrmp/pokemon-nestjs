import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // replace with your backend URL
});

const catchPokemon = async () => {
  const response = await api.get('/pokemon/catch');
  return response.data;
};

const releasePokemon = async () => {
  const response = await api.post('/pokemon/release');
  return response.data;
};

const renamePokemon = async (name, renameCount) => {
  const response = await api.post('/pokemon/rename', { name, renameCount });
  return response.data;
};

const fetchPokemonList = async () => {
  const response = await api.get('/pokemon');
  return response.data;
};

export default {
  catchPokemon,
  releasePokemon,
  renamePokemon,
  fetchPokemonList,
};
