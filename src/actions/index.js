export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const SET_MEMORY_TOTAL = 'SET_MEMORY_TOTAL';
export const APPLY_MEMORY_TOTAL = 'APPLY_MEMORY_TOTAL';
export const SET_MEMORY_ZERO = 'SET_MEMORY_ZERO';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) =>{
    return({type: CHANGE_OPERATION, payload:operator})
}

export const clearDisplay = () =>{
    return ({type: CLEAR_DISPLAY})
}

export const setMemoryTotatl = () =>{
    return ({type: SET_MEMORY_TOTAL})
}

export const applyMemoryTotal = () => {
    return ({type: APPLY_MEMORY_TOTAL})
}

export const setMemoryZero = () =>{
    return ({type: SET_MEMORY_ZERO})
}