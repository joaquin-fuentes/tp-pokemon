import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemones } from "../slices/pokemonSlice";

const ListaPokemones = () => {
  const pokemones = useSelector((state) => state.pokemones.pokemones);
  const status = useSelector((state) => state.pokemones.status);
  const error = useSelector((state) => state.pokemones.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemones());
  }, []);


  let content;

  if (status === "Cargando") {
    content = <p>Cargando...</p>;
  } else if (status === "Exitoso") {
    content = (
      <ul>
        {pokemones &&
          pokemones.map((pokemon) => {
            return <li key={pokemon.name}>{pokemon.name}</li>;
          })}
      </ul>
    );
  } else if (status === "Rechazado") {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};

export default ListaPokemones;
