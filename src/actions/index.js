export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'

export const ADD_TO_MEMORY = 'ADD_TO_MEMORY'

export const ADD_MEMORY_TO_TOTAL = 'ADD_MEMORY_TO_TOTAL'

export const CLEAR_MEMORY = 'CLEAR_MEMORY'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (sym) => {
    return({type: CHANGE_OPERATION, payload: sym});
}

export const clearTotal = () => {
    return({type: CLEAR_DISPLAY})
}

export const addMemory = (num) => {
    return({type: ADD_TO_MEMORY, payload: num})
}

export const memoryTotal = (num) => {
    return({type: ADD_MEMORY_TO_TOTAL, payload: num})
}

export const clearMemory = (num) => {
    return({type: CLEAR_MEMORY})
}