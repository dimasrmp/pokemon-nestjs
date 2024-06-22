import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import PokemonListPage from './pages/PokemonListPage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import MyPokemonListPage from './pages/MyPokemonListPage';

function App() {
  return (
    <Router>
      <Link to={'/'}>Home</Link>
      <Link to={'/mypokemon'}>My Pokemon List</Link>
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
        <Route path="/mypokemon" element={<MyPokemonListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
