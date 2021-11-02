export const ADD_ONE = "ADD_ONE";
export const CLEAR = "CLEAR"
export const CLEAR_MEMORY = "CLEAR_MEMORY"
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOp = (value)=>{
    return({type:CHANGE_OPERATION, payload:value});
}

export const clearAction = ()=>{
    return({type:CLEAR});
}

export const clearMemoryAction = ()=>{
    return({type:CLEAR_MEMORY});
}

