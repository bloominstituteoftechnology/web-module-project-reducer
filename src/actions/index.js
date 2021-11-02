export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const CLEAR_MEMORY = "CLEAR_MEMORY"
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const ACTION_MR = "ACTION_MR";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOp = (value)=>{
    return({type:CHANGE_OPERATION, payload:value});
}

export const clearDisplay = ()=>{
    return({type:CLEAR_DISPLAY});
}

export const clearMemoryAction = () => {
    return({type:CLEAR_MEMORY});
}

export const actionMR = () => {
    return({type: ACTION_MR});
}



