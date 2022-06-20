import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Pokemon = (props) => {
  // const { name } = props;
  const [pokemon, setPokemon] = useState({});
  const location = useLocation();
  const { page } = location.state;

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${page}`).then((res) => {
      setPokemon(res.data);
    });
  }, [page]);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img alt={pokemon.name} src={pokemon.sprites?.front_shiny} />
    </div>
  );
};
export default Pokemon;
