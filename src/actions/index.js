export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_TOTAL = "CLEAR_TOTAL"
export const CLEAR_MEMORY = "CLEAR_MEMORY"
export const ADD_TO_MEMORY = "ADD_TO_MEMORY"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
export const changeOperation = (operation) => {
    return({type: CHANGE_OPERATION, payload: operation})
}
export const clear = () => {
    return({type: CLEAR_TOTAL})
}

export const clearMemory = () => {
    return({type: CLEAR_MEMORY})
}

export const addToMemory = (number) => {
    return ({type: ADD_TO_MEMORY, payload: number })
}
