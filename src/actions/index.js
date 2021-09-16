export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const CURRENT_MEMORY ="CURRENT_MEMORY"
export const RECALL_MEMORY = "RECALL_MEMORY"
export const CLEAR_MEMORY = "CLEAR_MEMORY"


export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (number) => {
    return({type:CHANGE_OPERATION, payload:number});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const currentMemory  = () => {
    return({type:CURRENT_MEMORY});
}

export const recallMemory = () => {
    return({type:RECALL_MEMORY});
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY});
}