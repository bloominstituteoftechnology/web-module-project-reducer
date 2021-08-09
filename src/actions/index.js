export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR"
export const MEMORY_VALUE ="MEMORY_VALUE"
export const MEMORY_GRABBED = "MEMORY_GRABBED"
export const MEMORY_CLEARED = "MEMORY_CLEARED"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (input)=>{
    return({type:CHANGE_OPERATION, payload:input})
}
export const clearCalc = ()=>{
    return({type: CLEAR_DISPLAY, })
}
export const setMemoryVal =()=>{
    return({type: MEMORY_VALUE})
}
export const grabMemoryVal=()=>{
    return({type: MEMORY_GRABBED})
}
export const clearMemory=()=>{
    return({type: MEMORY_CLEARED})
}