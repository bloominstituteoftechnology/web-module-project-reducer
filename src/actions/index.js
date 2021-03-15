export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_CALC = "CLEAR_CALC";
export const MEM_STORED = "MEM_STORED"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload: operator})
}

export const clearCalc = () =>{
    return({type:CLEAR_CALC})
}

export const storeMemory = (currentMemory) =>{
    return({type: MEM_STORED, payload: currentMemory})
}