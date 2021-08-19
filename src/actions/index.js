export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CHANGE_MEMORY_MPLUS = "CHANGE_MEMORY_MPLUS";
export const CHANGE_MEMORY_MR = "CHANGE_MEMORY_MR";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return ({ type:CHANGE_OPERATION, payload:operator })
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const changeMemoryMplus = () => {
    return ({ type:CHANGE_MEMORY_MPLUS})
}

export const changeMemoryMR = () => {
    return ({ type:CHANGE_MEMORY_MR })
}

export const clearMemory = () => {
    return ({ type:CLEAR_MEMORY })
}