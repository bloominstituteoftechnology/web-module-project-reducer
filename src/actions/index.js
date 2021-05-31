export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SET_MEMORY_TO_TOTAL = "SET_MEMORY_TO_TOTAL";
export const SET_TOTAL_TO_MEMORY = "SET_TOTAL_TO_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";


export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOpperation = (op) => {
    return({type:CHANGE_OPERATION, payload:op})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const setMemoryToTotal = () => {
    return({type:SET_MEMORY_TO_TOTAL})
}

export const setTotalToMemory = () => {
    return({type:SET_TOTAL_TO_MEMORY})
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}