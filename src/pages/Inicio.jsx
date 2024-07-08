import React from "react";
import ListaPokemones from "../components/ListaPokemones";

const Inicio = () => {
  return (
    <div className="container">
      <h2 className="text-center">Listado de Pokemones</h2>
      <hr />
      {/* Aqui va a ir el listado */}
      <ListaPokemones></ListaPokemones>
    </div>
  );
};

export default Inicio;
