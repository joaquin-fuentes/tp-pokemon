import React from "react";
import BuscarPokemon from "../components/BuscarPokemon";

const BusquedaPorNombre = () => {
  return (
    <div className="container">
      <h2 className="text-center">Buscar por nombre</h2>
      <hr />
      <BuscarPokemon></BuscarPokemon>
    </div>
  );
};

export default BusquedaPorNombre;
