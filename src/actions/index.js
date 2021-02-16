export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const SET_MEMORY = "SET_MEMORY"
export const MEMORY_REDUCE = "MEMORY_REDUCE"
export const CLEAR_MEMORY = "CLEAR_MEMORY"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const setMemory = (total) => {
    return({type:SET_MEMORY, payload: total})
}

export const memoryReduce = () => {
    return({type:MEMORY_REDUCE})
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}