export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEMORY_ONE = "MEMORY_ONE"
export const CLEAR_MEMORY = "CLEAR_MEMORY"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (op) => {
    return({type:CHANGE_OPERATION, payload:op})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const memoryOne = () => {
    return({type:MEMORY_ONE})
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY});
}