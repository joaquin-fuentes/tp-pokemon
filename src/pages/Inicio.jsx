import React from "react";
import ListaPokemones from "../components/ListaPokemones";
import BuscarPokemon from "../components/BuscarPokemon";
import BuscarPorTipo from "../components/BuscarPorTipo";

const Inicio = () => {
  return (
    <div className="container">
      <h1>PokeRedux</h1>
      <hr />
      <BuscarPokemon></BuscarPokemon>
      <BuscarPorTipo></BuscarPorTipo>
      <h5>Listado de pokemones</h5>
      {/* Aqui va a ir el listado */}
      <ListaPokemones></ListaPokemones>
    </div>
  );
};

export default Inicio;
