import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ReduxTicTacToe } from './components/ReduxTicTacToe';
import { TicTacToe } from './components/TicTacToe';
import { INCREMENT } from './redux/actionTypes';

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type: INCREMENT})
  }


  return (
    <div className="App">
      <ReduxTicTacToe />
      <h1>{counter}</h1>
      <button onClick={increase}>Increment</button>
      <TicTacToe />
    </div>
  );
}

export default App;
