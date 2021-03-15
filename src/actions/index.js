export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_MEM = "CLEAR_MEM";
export const INPUT_MEM = "INPUT_MEM";
export const MATH_MEM = "MATH_MEM";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (value) => {
    return({type:CHANGE_OPERATION, payload:value})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const clearMemory = () => {
    return({type:CLEAR_MEM});
}
export const inputMemory = () => {
    return({type:INPUT_MEM});
}
export const mathMemory = () => {
    return({type:MATH_MEM});
}