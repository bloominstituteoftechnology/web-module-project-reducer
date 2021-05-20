export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const CHANGE_MEMORY = "CHANGE_MEMORY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const changeMem = (memoryOp) =>{
    return({type:CHANGE_MEMORY,payload:memoryOp});
}

export const changeOp = (operator) => {
    return ({type:CHANGE_OPERATION,payload: operator});
}
export const clearDisplay = ()=>{
    return ({type:CLEAR_DISPLAY});}

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}