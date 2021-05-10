export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const actionCreator = (operator) => {
    return({type:CHANGE_OPERATION})
}


// * [ ] Create an action creator (in `./actions/index.js`) that takes in an operator as an argument and creates an action object with the type `CHANGE_OPERATION.`