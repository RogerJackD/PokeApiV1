import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { PokemonCard } from './PokemonCard';

export const PokemonGrid = ({results = []}) => {

  return (
    <>

        {results.map((pokemondata) => (
            <PokemonCard key={pokemondata.url} 
            {...pokemondata} />
        ))}
    </>
  );
};
