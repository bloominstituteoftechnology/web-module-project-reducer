export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const SET_TOTAL_TO_MEMORY = 'SET_TOTAL_TO_MEMORY'
export const APPLY_MEMORY = 'APPLY_MEMORY'
export const MEMORY_CLEARED = 'MEMORY_CLEARED'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) => {
    return ({type:CHANGE_OPERATION, payload: operator})
}

export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY})
}

export const setTotalToMemory = () => {
    return ({type:SET_TOTAL_TO_MEMORY})
}

export const applyMemory = () => {
    return ({type:APPLY_MEMORY})
}

export const memoryClear = () => {
    return ({type:MEMORY_CLEARED})
}
