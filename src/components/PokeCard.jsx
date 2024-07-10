import React from 'react'

const PokeCard = ({pokemon}) => {
  return (
  <div className="pokemon-card">
    {!pokemon ? (
        <p>Busca un Pokémon</p>
    ) : (
      <>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <img src={pokemon.sprites.back_default} alt={pokemon.name} />
        <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
        <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
        <p><strong>Height:</strong> {pokemon.height / 10} m</p>
        <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p> 
        <p><strong>Types:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
        <p><strong>Abilities:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
        <audio controls>
          <source src={pokemon.cries.latest} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      </>
    )}
  </div>  )
}

export default PokeCard