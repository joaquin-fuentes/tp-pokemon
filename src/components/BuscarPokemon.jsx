import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../slices/pokemonSlice";
import PokemonEncontrado from "./PokemonEncontrado";

const BuscarPokemon = () => {
  const [pokemonBuscado, setPokemonBuscado] = useState("");

  const pokemon = useSelector((state) => state.pokemones.pokemon);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(pokemonBuscado);
    dispatch(getPokemon(pokemonBuscado));
  };
  console.log(pokemon)
  return (
    <>
      <form className="d-flex" onSubmit={onSubmit}>
        <div className="form-group w-25 ">
          <label htmlFor="" className="form-label">
            Buscar Pokemon:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setPokemonBuscado(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>
      {/* Item Pokemon encontrado */}
      <PokemonEncontrado pokemon={pokemon}></PokemonEncontrado>
    </>
  );
};

export default BuscarPokemon;
