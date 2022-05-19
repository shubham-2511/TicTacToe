import { useDispatch, useSelector } from 'react-redux';
import './App.css';
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
      <h1>{counter}</h1>
      <button onClick={increase}>Increment</button>
      <TicTacToe />
    </div>
  );
}

export default App;
