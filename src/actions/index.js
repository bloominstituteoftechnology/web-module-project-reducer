export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const CURRENT_MEMORY = "CURRENT_MEMORY";
export const TOTAL_MEMORY = "TOTAL_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const currentMemory = (memory) => {
    return({type:CURRENT_MEMORY, payload:memory});
}

export const totalMemory = (memory) => {
    return({type:TOTAL_MEMORY, payload:memory});
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY});
}