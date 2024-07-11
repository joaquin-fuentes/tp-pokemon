import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonTipos, getTipo } from "../slices/pokemonSlice";

const BuscarPorTipo = () => {
  const [tipoElegido, setTipoElegido] = useState("");

  const tipos = useSelector((state) => state.pokemones.tipos);
  const status = useSelector((state) => state.pokemones.status);
  const tipo = useSelector((state) => state.pokemones.tipo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonTipos());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (tipoElegido) {
      dispatch(getTipo(tipoElegido));
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <select
          name="tipo"
          id="tipo"
          onChange={(e) => setTipoElegido(e.target.value)}
        >
          <option value="">Selecciona un tipo</option>
          {status === "Exitoso" &&
            tipos.results.map((tipo) => (
              <option key={tipo.name} value={tipo.name}>
                {tipo.name}
              </option>
            ))}
        </select>
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {tipo.pokemon &&
          tipo.pokemon.map((p) => (
            <li key={p.pokemon.name}>{p.pokemon.name}</li>
          ))}
      </ul>
    </>
  );
};

export default BuscarPorTipo;
