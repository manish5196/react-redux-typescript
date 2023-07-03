import { useState } from 'react';

interface CounterProps {
    initialCount: number    
}

const CounterPage : React.FC<CounterProps> =  ({ initialCount }) => {
  const [count, setCount] = useState<number> (initialCount);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default CounterPage;
