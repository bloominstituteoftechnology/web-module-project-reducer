export const ADD_ONE = "ADD_ONE";
export const CHANGE_MEMORY = "CHANGE_MEMORY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const changeMemory = (memoryOperator) => {
    console.log("changeMemory action creator fires")
    return({type:CHANGE_MEMORY, payload: memoryOperator});
}

export const applyNumber = (number) => {
    console.log("applyNumber action creator fires")
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    console.log("changeOperation action creator fires")
    return({type:CHANGE_OPERATION, payload: operator});
}

export const clearDisplay = () => {
    console.log("clearDispaly action creator fires")
    return ({type:CLEAR_DISPLAY});
}