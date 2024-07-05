import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getPokemonTipos, getTipo } from "../slices/pokemonSlice";

const BuscarPorTipo = () => {
  const [tipoElegido, setTipoElegido] = useState("");

  const tipos = useSelector((state) => state.pokemones.tipos);
  const status = useSelector((state) => state.pokemones.status);
  const error = useSelector((state) => state.pokemones.error);
  const tipo = useSelector((state) => state.pokemones.tipo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonTipos());
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(tipoElegido);
    dispatch(getTipo(tipoElegido));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <select
          name="tipo"
          id="tipo"
          onChange={(e) => setTipoElegido(e.target.value)}
        >
          <option value="">Selecciones un tipo</option>
          {/* mapeo de tipos */}
          {status === "Exitoso" &&
            tipos.results.map((tipo) => {
              return (
                <option key={tipo.name} value={tipo.name}>
                  {tipo.name}
                </option>
              );
            })}
        </select>
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {tipo.pokemon &&
          tipo.pokemones.map((p) => {
            return <li>{p.name}</li>;
          })}
      </ul>
    </>
  );
};

export default BuscarPorTipo;
