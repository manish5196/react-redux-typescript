import React, {useReducer} from 'react';

enum ActionKind {
  Increment = 'INCREMENT',
  Decrement = 'DECREMENT',
}


type CounterProps = {
    initialCount: number    
}

type CounterState  = {
  count: number
}

type CounterAction = {
  type: string
}

const reducer = (state :CounterState, action: CounterAction): CounterState => {
  switch(action.type) {
    case ActionKind.Increment: 
      return {
        ...state,
        count: state.count + 1
      }
    case ActionKind.Decrement: 
      return {
        ...state,
        count: state.count - 1
      }
    default : 
     return state;
  }
}



const CounterPage : React.FC<CounterProps> =  ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount
  });

  const increment = () => {
    dispatch({
      type: ActionKind.Increment
    });
  };
  const decrement = () => {
    dispatch({
      type: ActionKind.Decrement
    });
  };

  return (
    <>
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default CounterPage;
