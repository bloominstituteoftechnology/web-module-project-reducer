export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const SAVE_TO_MEMORY = "SAVE_TO_MEMORY";
export const APPLY_FROM_MEMORY = "APPLY_FROM_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const saveToMemory = () => {
    return({type:SAVE_TO_MEMORY})
}

export const applyFromMemory = () => {
    return({type:APPLY_FROM_MEMORY})
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}