import { useEffect, useRef, useState } from "react";

export const useCustomCounter = (initialValue , sequence) =>{
    const [counter, setCounter] = useState(initialValue);
    const refCounter = useRef(counter);
    const prevCounterRef = useRef();

    useEffect(() => {
        prevCounterRef.current = refCounter.current;
        refCounter.current = counter;
      }, [counter]);

    const increment = (value = 1) =>{
        setCounter(prev => sequence? prev + sequence : prev + value )
    }

    const decrement = (value = 1) =>{
        if (counter <= 1) return;
        setCounter(prev => sequence? prev - sequence : prev - value )
    }

    const reset = () =>{
        setCounter(initialValue);
    }

    return {
        counter,
        prevCounter: prevCounterRef.current,
        increment,
        decrement,
        reset
    }

}