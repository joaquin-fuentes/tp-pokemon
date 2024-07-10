import React from "react";

const PokemonEncontrado = ({ pokemon, image }) => {
  return (
    <>
      <div>{pokemon.name}</div>
      <div>
					<img alt={ pokemon.name } src={image} />
			</div>
    </>
  );
};

export default PokemonEncontrado;
