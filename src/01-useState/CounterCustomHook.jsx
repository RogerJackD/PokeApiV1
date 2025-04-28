import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterCustomHook = () => {

    const {increment, decrement, reset, counter} = useCounter(0)

  return (
    <>
        <h2>counter with coustom hook : {counter} </h2>

        <hr />

        <button className='btn btn-primary' onClick={() => increment(2)}>+1</button>
        <button className='btn btn-primary' onClick={reset}>reset</button>
        <button className='btn btn-primary' onClick={() => decrement(2)}>-1</button>

    </>
)
}
