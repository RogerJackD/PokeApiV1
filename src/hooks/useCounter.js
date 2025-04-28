import { useEffect, useRef, useState } from "react";

export const useCounter = (initialValue) =>{
    const [counter, setCounter] = useState(initialValue);
    const refCounter = useRef(counter);


    const increment = (value = 1) =>{
        setCounter(counter + value);
    }

    const decrement = (value = 1) =>{
        if (counter <= 1) return;
        setCounter(counter - value);

    }

    const reset = () =>{
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}