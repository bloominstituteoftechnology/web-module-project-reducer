export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const ADD_TO_MEMORY = "ADD_TO_MEMORY";
export const ADD_MEM = "ADD_MEM"
export const CLEAR_MEM = "CLEAR_MEM"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}
export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const addToMemoryAction = ()=>{
    return({type:ADD_TO_MEMORY});
}

export const addMem = ()=>{
    return({type: ADD_MEM});
}
export const clearMem = () => {
    return({type:CLEAR_MEM});
}
