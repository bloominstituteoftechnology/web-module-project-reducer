export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const ADD_MEMORY = "ADD_MEMORY";
export const RECALL_MEMORY = "RECALL_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

const addOne = () => {
    return({type:ADD_ONE});
}
const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload: operator})
}
const clearDisplay = () => {
    return({type:CLEAR_DISPLAY, payload: 0})
}
const addMemory = () => {
    return({type:ADD_MEMORY})
}
const recallMemory = (memory) => {
    return({type:RECALL_MEMORY, payload:memory})
}
const clearMemory = () => {
    return({type:CLEAR_MEMORY, payload: 0})
}

export default {
    addOne, 
    applyNumber,
    changeOperation,
    clearDisplay,
    addMemory,
    recallMemory,
    clearMemory,
}