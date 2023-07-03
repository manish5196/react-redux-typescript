import { Provider } from 'react-redux';
import { store } from '../../store';

import './App.css';
// import RepositoriesList from '../repository/RepositoriesList';
// import CounterPage from '../../pages/CounterWithState';
import CounterPage from '../../pages/CounterWithUseReducerHooks';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <CounterPage  initialCount={10}/>
      </div>
    </Provider>
  );
}

export default App;
