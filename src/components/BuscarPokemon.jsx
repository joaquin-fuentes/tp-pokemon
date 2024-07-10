import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../slices/pokemonSlice";
import PokeCard from "./PokeCard";
//import { getImageURL } from '../utils/utils';


const BuscarPokemon = () => {
  const [pokemonBuscado, setPokemonBuscado] = useState("");
  const [submit, setSubmit] = useState(false);

  const pokemon = useSelector((state) => state.pokemones.pokemon);
  //const imgURL = getImageURL(pokemon.id);

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  useEffect(() => {
    if (submit) {
      console.log(pokemonBuscado);
      dispatch(getPokemon(pokemonBuscado));
      setPokemonBuscado(""); 
      setSubmit(false);
    }
  }, [submit, pokemonBuscado, dispatch]);

  const pokeObjeto = Object.keys(pokemon).length === 0;

  console.log(pokemon);

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
            value= {pokemonBuscado}
            onChange={(e) => setPokemonBuscado(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>
      {/*<PokemonEncontrado pokemon={pokemon} image={image}></PokemonEncontrado>*/}
      {(pokeObjeto) ? <p>{" "}</p>
      : <PokeCard pokemon={pokemon}></PokeCard>}
    </>
  );
};

export default BuscarPokemon;
