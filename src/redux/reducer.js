import { INCREMENT, MARKIT } from "./actionTypes"

const initState = {
    counter: 0,
    tictactoe: ["", "", "", "", "", "", "", "", ""],
    winner: "",
    times: 1
}

export const reducer = (state = initState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {...state, counter : state.counter + 1 };
        case MARKIT:
            const newState = action.payload;
            return {...state, tictactoe : newState };
        default:
            return state;
    }
}