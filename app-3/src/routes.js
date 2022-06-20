// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Pokemon from "./Pokemon.js";
// import PokemonList from "./PokemonList";

// export default (
//   <Routes>
//     <Route exact path="/" component={PokemonList} />
//     <Route path="/pokemon/:name" component={Pokemon} />
//   </Routes>
// );

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokemon from "./Pokemon.js";
import PokemonList from "./PokemonList";

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Router>
  );
}
