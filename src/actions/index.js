export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEMORY_VALUE = "MEMORY_VALUE";
export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return ({type:CHANGE_OPERATION, payload:operation})
}

export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY})
}

export const memoryValue = () => {
    return({type:MEMORY_VALUE})
}

export const memoryAdd = () => {
    return({type:MEMORY_ADD})
}

export const memoryClear = () => {
    return({type:MEMORY_CLEAR})
}