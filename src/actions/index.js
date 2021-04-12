export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY="CLEAR_DISPLAY";
export const MEM_VALUE = "MEM_VALUE";
export const VALUE_MEM = "VALUE_MEM";
export const MEM_ZERO = "MEM_ZERO";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const operationChanger = (operation) => {
    return ({type:CHANGE_OPERATION, payload:operation})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const memValue = () => {
    return({type:MEM_VALUE})   
}


export const valueMem = () => {
    return({type:VALUE_MEM})   
}


export const memZero = () => {
    return({type:MEM_ZERO})   
}
