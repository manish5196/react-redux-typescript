import useCounter from '../hooks/useCounter';

interface CounterProps {
    initialCount: number    
}

const CounterPage : React.FC<CounterProps> =  ({ initialCount }) => {
  const counter = useCounter({initialCount: initialCount});

  return (
    <>
      <h1 className="text-lg">Count is {counter.count}</h1>
      <div className="flex flex-row">
        <button onClick={counter.increment}>Increment</button>
        <button onClick={counter.decrement}>Decrement</button>
      </div>
    </>
  );
}

export default CounterPage;
