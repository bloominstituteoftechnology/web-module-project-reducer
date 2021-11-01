export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY = "MEMORY";
export const APPLY_MEMORY = "APPLY_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const EQUALS = "EQUALS"

export const addOne = () => {
    console.log("Step 3: Action is converted into object accepted by the reducer!")
    return({type:ADD_ONE});
    
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) =>{
    return({type:CHANGE_OPERATION, payload:operator})
}

export const clearDisplay =() =>{
    return({type:CLEAR_DISPLAY})
}

export const memory = ()=>{
    return({type:MEMORY})
}

export const applyMemory = () =>{
    return({type:APPLY_MEMORY})
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}

export const equals = ()=>{
    console.log("Step 3: Action")
    return({type:EQUALS})
}