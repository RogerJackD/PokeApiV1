import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { PokemonGrid } from './PokemonGrid'
import { useCounter } from '../hooks/useCounter'
export const MultiplesPokemon = () => {

    const {counter, increment, decrement} = useCounter(0)
    const { data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon?offset=${counter}&limit=${10}`)
  return (
    <>
        <h1 className='mt-4 text-center fw-bold'>Details and list of Pokémon</h1>
        <hr />


        <PokemonGrid  {...data} />

      <div className='text-center'>

        <button className='btn btn-primary' onClick={()=> decrement(10)}>anterior</button>
        <button className='btn btn-primary' onClick={()=> increment(10)}>siguiente</button>
      </div>





    </>
  )
}
