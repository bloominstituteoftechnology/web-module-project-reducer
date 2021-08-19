export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'
export const MEMORY_TOTAL = 'MEMORY_TOTAL'
export const MEMORY_RECALL = 'MEMORY_RECALL'
export const MEMORY_CLEAR = 'MEMORY_CLEAR'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator})
}

export const clearDisplay = () => {
    return({type: CLEAR_DISPLAY})
}

export const memoryTotal = () => {
    return({type: MEMORY_TOTAL})
}

export const memoryRecall = () => {
    return({type:MEMORY_RECALL});
};

export const memoryClear = () => {
    return({type:MEMORY_CLEAR})
}