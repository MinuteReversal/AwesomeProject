import * as types from "../constants/Types";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const add = () => ({
    type: types.INCREMENT
});

export const remove = () => ({
    type: types.DECREMENT
});

//https://redux.js.org/advanced/async-actions
// an action creator can return a function instead of an action object
export const delayMethods = () => async dispatch => {
    await delay(1000);
    dispatch({ type: types.INCREMENT });
    await delay(1000);
    dispatch({ type: types.INCREMENT });
    await delay(1000);
    dispatch({ type: types.INCREMENT });
};

export default {
    add,
    remove,
    delayMethods
};
