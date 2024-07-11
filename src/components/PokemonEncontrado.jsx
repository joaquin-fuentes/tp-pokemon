import React from "react";


const PokemonEncontrado = ({ pokemon }) => {
  console.log(pokemon)
  return <div>{pokemon.name}</div>;
};

export default PokemonEncontrado;
