import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonsTipoDetalles, resetPokemon } from '../slices/pokemonSlice';
import PokeCard from './PokeCard';

const PokeTable = ({ detalles }) => {
  const dispatch = useDispatch();
  const [pokemonTipo, setPokemonTipo] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const pokemons = [];
        for (const name of detalles) {
          const response = await dispatch(getPokemonsTipoDetalles(name));
          pokemons.push(response.payload);
        }
        setPokemonTipo(pokemons);
      } catch (error) {
        console.error(error);
      }
    };

    getPokemons();
  }, [dispatch, detalles]);
  
  dispatch(resetPokemon());

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Detalles</th>
        </tr>
      </thead>
      <tbody>
        {pokemonTipo.length === 0 ? (
          <tr>
            <td colSpan="2">No hay resultados</td>
          </tr>
        ) : (
          pokemonTipo.map((pokemon, index) => (
            <tr key={index}>
              <td><h5>{pokemon.name}</h5></td>
              <td><img src={pokemon.sprites.front_default} alt={pokemon.name} /></td>
              <td><img src={pokemon.sprites.back_default} alt={pokemon.name} /></td>
              <td><img src={pokemon.sprites.front_shiny} alt={pokemon.name} /></td>
              <td><p><strong>Base Experience:</strong> {pokemon.base_experience}</p></td>
              <td><p><strong>Height:</strong> {pokemon.height / 10} m</p></td>
              <td><p><strong>Weight:</strong> {pokemon.weight / 10} kg</p></td>
              <td><p><strong>Types:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p></td>
              <td><p><strong>Abilities:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p></td>
              <td><audio controls>
                    <source src={pokemon.cries.latest} type="audio/ogg" />
                    Your browser does not support the audio element.
                    </audio></td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default PokeTable;
