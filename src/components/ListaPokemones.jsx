import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemones } from "../slices/pokemonSlice";
import { Link } from "react-router-dom";

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
      <ul className="row">
        {pokemones.results &&
          pokemones.results.map((pokemon) => {
            console.log(pokemon);
            return (
              <div className="col-3">
                <div key={pokemon.name} className="card p-3 mb-4 text-center">
                  <img
                    src={pokemon.url}
                    className="card-img-top"
                    alt={pokemon.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <p className="card-text">Tipo: </p>
                    <Link to="/detalle" className="btn btn-primary">
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </ul>
    );
  } else if (status === "Rechazado") {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};

export default ListaPokemones;
