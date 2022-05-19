import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { MARKIT } from "../redux/actionTypes";
import { Item } from "./Item";

export const ReduxTicTacToe = () => {

    const state = useSelector(state => state.tictactoe);
    const dispatch = useDispatch();
    const [times, setTimes] = useState(1);
    const [winner, setWinner] = useState("");
    const [timetravel, setTimetravel] = useState([]);

    const checkRow = (state) => {
        for(let i = 0; i < 3; i++) {
            if( state[i*3 + 0] === state[i*3 + 1] && state[i*3 + 1] === state[i*3 + 2] && state[i*3 + 2] !== "") {
                setWinner(state[i*3 + 0]);
                console.log("row");
                break;
            }
        }
    }

    const checkCol = (state) => {
        for(let i = 0; i < 3; i++) {
            if( state[i + 0] === state[i + 3] && state[i + 3] === state[i + 6] && state[i + 6] !== "") {
                setWinner(state[i + 0]);
                console.log("column")
                break;
            }
        }
    }

    const checkDig = (state) => {
        if(state[0] === state[4] && state[4] === state[8] && state[8] !== "") {
            setWinner(state[0]);
            console.log("diagonal")
        }
        if(state[2] === state[4] && state[4] === state[6] && state[6] !== "")  {
            setWinner(state[2]);
            console.log("diagonal");
        }
    }

    const checkWinner = (state1) => {
        checkRow(state1);
        checkCol(state1);
        checkDig(state1);
    }
    
    const onClick = (i) => {
        var value = times % 2 === 1 ? "O" : "X";
        var newState = [...state];
        newState[i] = value;

        if(state[i] === "" && winner === "") {
            // setState([...newState]);
            dispatch({
                type: MARKIT,
                payload: newState
            })
            setTimes(pre => pre+1);
            setTimetravel([...timetravel, newState]);
            checkWinner([...newState])
        }
        
    }

    const resetTictactoe = () => {
        // setState(["", "", "", "", "", "", "", "", ""]);
        dispatch({
            type: MARKIT,
            payload: ["", "", "", "", "", "", "", "", ""]
        })
        setWinner("");
        setTimetravel([]);
    }
    console.log(timetravel);

  return (
    <div style={{ display: "grid",  placeItems: "center", height: "100vh", width: "100vw", backgroundColor: "lightblue"}}>
      <div style={{ width: "290px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(3, 1fr)", gap: "10px"}}>
        {
            state.map((value, index) => <Item key={index} onClick={onClick} value={value} index={index} />)
        }
      </div>
      {
          winner.length > 0 && <h1>Winner is {winner}</h1> 
      }
      <div>

      {
        //   timetravel.length > 0 && timetravel.map((state, index) => <button onClick={() => setState([...state])}>{index+1}</button> )
      }
      </div>
    `<button onClick={resetTictactoe}>Reset</button> 
    </div>
  );
};

