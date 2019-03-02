import * as types from "../constants/Types";
const add = () => ({
    type: types.INCREMENT
});

const remove = () => ({
    type: types.DECREMENT
});

//https://redux.js.org/advanced/async-actions
// an action creator can return a function instead of an action object
const delayMethods = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({ type: types.INCREMENT });
        }, 2000);
    };
};

export default {
    add,
    remove,
    delayMethods
};
