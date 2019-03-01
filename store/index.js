import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//https://github.com/reduxjs/redux-thunk
const initialState = {
    count: 123
};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export default createStore(reducer, initialState, applyMiddleware(thunk));
