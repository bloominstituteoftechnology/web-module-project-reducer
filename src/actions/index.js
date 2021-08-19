export const ADD_ONE = "ADD_ONE";
export const ADD_TWO = "ADD_TWO"

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
    return({type:ADD_ONE});
}
// Trying to understand the add 1 scenario.
// okay so here we just gotta give something a type, name it whatever we want. this is just to create a type
export const addTwo = () => {
    return ({ type: ADD_TWO });
}

export const changeOperation = (operation) => {
    return({type: CHANGE_OPERATION, payload: operation})
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}