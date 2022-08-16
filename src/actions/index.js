export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_CALC = "CLEAR_CALC";
export const MPLUS = "MPLUS";
export const MR = "MR";
export const MC = "MC";

export const addOne = () => {
    return({type:"ADD_ONE"});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type: CHANGE_OPERATION, payload: operation});
}

export const clearCalc = () => {
    return({type: CLEAR_CALC});
}

export const setMPlus = () => {
    return({type: MPLUS});
}

export const setMR = (number) => {
    return({type: MR, payload: number});
}

export const setMC = (number) => {
    return({type: MC });
}