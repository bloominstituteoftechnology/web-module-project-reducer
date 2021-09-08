export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SET_M = "SET_M";
export const APPLY_M = "APPLY_M";
export const CLEAR_M = "CLEAR_M";


export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOp = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const setMemory = () => {
    return({type:SET_M});
}

export const applyMemory = () => {
    return({type:APPLY_M});
}

export const clearMemory = () => {
    return({type:CLEAR_M});
}
