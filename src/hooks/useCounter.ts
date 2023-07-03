import { useState, useEffect } from 'react';

interface CounterProps {
    initialCount: number    
}

interface CounterExport {
    count: number,
    increment: () => void  
    decrement: () => void  
}
const useCounter = (counterProps: CounterProps): CounterExport  => {
    const [count, setCount] = useState(counterProps.initialCount);

    useEffect(() => {
        console.log(count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return  {
        count,
        increment,
        decrement
    };
}

export default useCounter;