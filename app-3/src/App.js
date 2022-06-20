import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Pokemon from "./Pokemon.js";
import PokemonList from "./PokemonList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
