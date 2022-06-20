import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Pokemon from "./Pokemon.js";
import PokemonList from "./PokemonList";

function App() {
  const [name, setname] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokemonList name={name} />} />
        <Route path="/pokemon/:name" element={<Pokemon name={name} />} />
      </Routes>
    </div>
  );
}

export default App;
