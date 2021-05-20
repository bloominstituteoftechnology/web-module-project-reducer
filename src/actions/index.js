export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const CHANGE_MEMORY = "CHANGE_MEMORY";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEMORY_TOTAL = "MEMORY_TOTAL";



export const addOne = () => {
    return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
    return ({ type: APPLY_NUMBER, payload: number });
}

export const clearDisplay = () => {
    return ({ type: CLEAR_DISPLAY });
}
export const changeMem = () => {
    return ({ type: CHANGE_MEMORY });
}

export const changeOp = (operator) => {
    return ({ type: CHANGE_OPERATION, payload: operator });
}
export const memoryTotal = () => {
    return({type: MEMORY_TOTAL})
}