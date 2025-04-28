import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { PokemonCard } from './PokemonCard'

export const MultipleCustomHooks = () => {

    
    const {counter, increment, decrement, reset} = useCounter(1)
    const { data, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  return (
    <>
        <h1>Information about pokemon</h1>
        <hr />

        { isLoading? <p>cargando..</p> : <PokemonCard {...data} /> } 

        



        <button className='btn btn-primary' onClick={()=> decrement()}>anterior</button>
        <button className='btn btn-primary' onClick={()=> increment()}>siguiente</button>
        <button className='btn btn-primary' onClick={()=> reset()}>reset</button>





    </>
  )
}
