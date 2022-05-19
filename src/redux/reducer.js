import { INCREMENT } from "./actionTypes"

const initState = {
    counter: 0
}

export const reducer = (state = initState, action) => {
    switch(action.type) {
        case INCREMENT:
            return { counter : state.counter + 1 };
        default:
            return state;
    }
}