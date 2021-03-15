export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_ADD = 'MEMORY_ADD'
export const ADD_FROM_MEMORY = 'ADD_FROM_MEMORY'
export const MEMORY_CLEAR = 'MEMORY_CLEAR'


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

export const memoryAdd = () => {
    return({type:MEMORY_ADD})
}

export const addFromMemory = () => {
    return({type:ADD_FROM_MEMORY})
}

export const memoryclear = () => {
    return({type:MEMORY_CLEAR})
}






